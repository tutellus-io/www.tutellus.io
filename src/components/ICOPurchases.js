//@flow
/* global fetch: false */
import React from 'react';
import {observer, inject} from 'mobx-react';
import styled from 'styled-components';
import {ToastContainer, Bounce, toast} from 'react-toastify';
import R from 'ramda';
import PageVisibility from 'react-page-visibility';
import 'react-toastify/dist/ReactToastify.css';

import styles from '../styles';

const POOLING_INTERVAL = 60000;
const MIN_TIMEOUT = 2000;
const MAX_TIMEOUT = 10000;

const NotificationMsg = styled(({tuts, amount, currency, className}) => {
    return (
        <div className={ className }>
            Last contribution<br/><b>{ amount } { currency }</b> for <b> { parseInt(tuts) } TUT</b>
        </div>
    );
})`
    padding: 1em 2em;
    color: white;
    background-color: ${ styles.colors.lightblue };
    font-size: 0.7em;
    line-height: 1.4em;
    font-weight: 200;
    text-align: center;
    & b {
        font-weight: 400;
    }
`;

const NotificationContainer = styled((props) =>
    <ToastContainer {...props}/>
)`
    &.Toastify__toast-container {
        width: auto;
        left: 1em;
        bottom: 1.7em;
    }

    & .Toastify__toast {
        padding: 0;
        min-height: 0;
        margin-bottom: 0.5em;
    }
`;

export const ICOPurchases = inject('config')(observer(class extends React.Component {
    static displayName = 'ICOPurchases'

    constructor() {
        super();
        this.state = {
            max_id: -1,
        };
    }

    startInterval = () => {
        if (!this.interval) {
            this.interval = setInterval(this.updatePurchases, POOLING_INTERVAL);
        }
    }

    stopInterval = () => {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    handleVisibilityChange = isVisible => {
        if (isVisible) {
            this.startInterval();
        } else {
            this.stopInterval();
        }
    }

    getPurchases = async() => {
        const {
            config: {
                purchase_url: url,
            },
        } = this.props;

        return await fetch(url)
        .then(resp => resp.json())
        .then(stats => stats.resume.last_orders);
    };

    componentDidMount() {
        setTimeout(this.updatePurchases, MIN_TIMEOUT);
        this.handleVisibilityChange(true);
    }

    componentWillUnmount() {
        this.stopInterval();
    }

    updatePurchases = () => {
        const getMaxId = R.compose(R.reduce(R.max, 0), R.pluck('id'));
        const filterByMinId = min_id => R.filter(item => item.id > min_id);

        this.getPurchases()
        .then(orders =>{
            const recent_orders = filterByMinId(this.state.max_id)(orders);

            let orders_to_show = recent_orders;
            if (this.state.max_id === -1) {
                orders_to_show = recent_orders.slice(0, 2);
            }

            this.setState({
                max_id: getMaxId(orders),
            });

            this.notifyNewOrders(orders_to_show.reverse());
        });
    }

    notifyNewOrders = new_orders => {
        new_orders.forEach((order, index) => {
            const timeout = (Math.random() * (MAX_TIMEOUT - MIN_TIMEOUT)) + MIN_TIMEOUT;
            setTimeout(() =>
                toast(<NotificationMsg {...order}/>),
            (index * MAX_TIMEOUT) + timeout);
        });
    }

    render() {
        const {
            className,
        } = this.props;

        return (
            <React.Fragment>
                <PageVisibility onChange={this.handleVisibilityChange}/>
                <NotificationContainer className={ className }
                    autoClose={false}
                    position="bottom-left"
                    transition={ Bounce }
                    closeButton={ false }
                />
            </React.Fragment>
        );
    }
}));
