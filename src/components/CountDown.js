//@flow
/*eslint no-magic-numbers: off*/
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Observed from 'react-intersection-observer';
import {withClickTracker} from '../withTracker';
import {
    PageSection,
    Timer,
    TimerTitle,
    TimerBox,
    AButton,
} from './';
import styles from '../styles';
import 'intersection-observer';

const TrackButton = withClickTracker(AButton);

const BuyICO = styled(({className, url, text}) =>
    <TrackButton className={ className }
        event= {{
            category: "cryptonomos",
            action: "contribute",
        }}
        href={ url }
        primary
    >
        { text }
    </TrackButton>
)`
    justify-self: center;
    align-self: center;
    padding: 0.6em 1.5em;
    font-size: 1em;
`;

const CountDown = styled(({className, title, timer_limit, server_time, cta_url, cta_text, mapRef}) =>
    <div className={ className } ref={ mapRef }>
        <Timer title={ title }
            limit={ timer_limit }
            server_time = { server_time }
        />
        <BuyICO url={ cta_url } text={ cta_text }/>
    </div>
)``;
CountDown.displayName = 'CountDown';

export const CountDownPanel = styled(CountDown)`
    display: grid;
    grid-gap: 2em;
    justify-items: center;
`;
CountDownPanel.displayName = 'CountDownPanel';

const CountDownBar = styled(class extends React.Component {
    static displayName = 'CountDownBar';
    constructor() {
        super();
        this.el = document.createElement('div');
    }
    componentDidMount() {
        const body = document.getElementsByTagName('body');
        body[0].appendChild(this.el);
    }
    render() {
        const {
            className,
            background_url,
            ...props
        } = this.props;
        return ReactDOM.createPortal(
            <PageSection dark className={ className }
                backgroundImage={ background_url }>
                <CountDown {...props}/>
            </PageSection>,
            this.el
        );
    }
})`
    position: fixed;
    bottom: -200px;
    z-index: 1000;
    transition: all 0.5s linear;
    ${
        ({show = false}) =>
            (show ? `bottom: 0;` : '')
    }
    left: 0;
    width: 100%;

    padding: 0.5em;
    @media ${ styles.media.tablet } {
        padding: 0.5em 3em;
    }
    font-size: 0.8em;
    & ${ CountDown } {
        padding: 0em;
        @media ${ styles.media.laptop } {
            padding: 0em 7em;
        }
        @media ${ styles.media.desktop } {
            padding: 0em 12em;
        }
        display: grid;
        grid-template-columns: 7fr 5fr;
        @media ${ styles.media.tablet } {
            grid-template-columns: 7fr 3fr;
        }
        grid-gap: 1em;
        & ${ Timer } {
            grid-template-columns: repeat(4, 0.9fr);
            grid-gap: 0.6em;
            @media ${ styles.media.tablet } {
                grid-template-columns: 5fr repeat(4, 0.9fr);
                grid-gap: 1em;
            }
            grid-template-rows: 1fr;
            & ${ TimerTitle } {
                grid-column: 1 / span 1;
                display:none;
                @media ${ styles.media.tablet } {
                    display:block;
                }
            }
            & ${ TimerBox } {
                font-size: 0.8em;
            }
        }

        & ${ BuyICO } {
            font-size: 0.82em;
            padding: 0.8em 1em;
            @media ${ styles.media.tablet } {
                font-size: 1em;
                padding: 0.6em 1.5em;
            }
        }
    }
`;

export const DoubleCountDown = class extends React.Component {
    static displayName = "DoubleCountDown";

    state = {
        show: false,
    }

    handleVisibility = isInView => {
        this.setState({
            show: !isInView,
        });
    }

    render() {
        const {
            show,
        } = this.state;
        return (
            <React.Fragment>
                <Observed onChange={ this.handleVisibility }>
                    <CountDownPanel {...this.props}/>
                </Observed>
                <CountDownBar {...this.props} show={ show }/>
            </React.Fragment>
        );
    }
};

