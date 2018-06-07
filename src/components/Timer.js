//@flow
/*:: import type {ComponentType} from 'react' */
import * as React from 'react';
import styled from 'styled-components';
import R from 'ramda';
import styles from '../styles';

const TimerBox = styled(({className, number, title}) =>
    <div className={ className }>
        <div>{ number.toString().padStart(2, '0') }</div>
        <div>{ title }</div>
    </div>
)`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 0.4em;
    font-size: 1em;
    padding: 0.5em;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.6);
    color: ${ styles.colors.white };
    border-radius: 2px;
    border: 2px solid ${ styles.colors.white };
    & div:nth-child(1){
        font-size: 1.8em;
    }
    & div:nth-child(2){
        font-size: 0.6em;
        font-weight: 700;
        text-transform: uppercase;
    }
`;
TimerBox.displayName = 'TimerBox';

const TimerTitle = styled.div`
    text-transform: uppercase;
    justify-self: center;
    font-weight: bold;
    & span {
        background-color: ${ styles.colors.lightblue };
        color: ${ styles.colors.white };
        padding: 0.1em 0.6em 0.2em;
        border-radius: 1em;
        font-weight: 300;
        font-size: 1.1em;
        margin: 0.2em;
    }
`;
TimerTitle.displayName = 'TimerTitle';

/*::
type Props = {|
    getServerTime: void => Promise<number>,
    limit: number,
    className?: string,
    title: string,
|}
type State = {|
    days: string,
    hours: string,
    minutes: string,
    seconds: string,
    server_time?: number,
|}
*/
export const Timer = styled(class extends React.Component/*::<Props, State>*/ {
    static displayName = 'Timer';

    /*:: interval: IntervalID */
    constructor() {
        super();

        this.state = {
            days: '--',
            hours: '--',
            minutes: '--',
            seconds: '--',
        };
    }

    componentWillUnmount() {
        this.destroyInterval();
    }

    componentWillMount() {
        const {
            server_time,
        } = this.props;

        this.updateServerTime(server_time);
    }

    componentWillReceiveProps(nextProps) {
        const {
            server_time,
        } = nextProps;

        this.updateServerTime(server_time);
    }

    updateServerTime = server_time => {
        this.destroyInterval();
        this.setState({
            server_time,
        }, () =>{
            this.interval = setInterval(this.updateTimer, 1000);
        });
    }

    destroyInterval = () => {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = undefined;
        }
    }

    checkNoTimer = () => {
        if (this.state.days === "--") {
            this.setState({
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            });
        }
    }

    updateTimer = () => {
        const {
            limit,
        } = this.props;
        const {
            server_time,
        } = this.state;

        const remaining_time = limit - (server_time || 0);
        const new_server_time = server_time + 1000;
        let delta_seconds = Math.floor(remaining_time / 1000);

        const fractions = {
            days: 86400, //eslint-disable-line no-magic-numbers
            hours: 3600,
            minutes: 60, //eslint-disable-line no-magic-numbers
            seconds: 1,
        };

        if (delta_seconds >= 0) {
            const results = R.map(value => {
                const num_fractions = Math.floor(delta_seconds / value);
                delta_seconds -= num_fractions * value;
                return num_fractions;
            }, fractions);

            this.setState({
                ...results,
                server_time: new_server_time,
            });
        } else {
            this.checkNoTimer();
            this.destroyInterval();
        }
    }
    render() {
        const {
            days,
            hours,
            minutes,
            seconds,
        } = this.state;
        return (
            <div className={ this.props.className }>
                <TimerTitle dangerouslySetInnerHTML={ {__html: this.props.title} } />
                <TimerBox number={days} title="days"/>
                <TimerBox number={hours} title="hours"/>
                <TimerBox number={minutes} title="minutes"/>
                <TimerBox number={seconds} title="seconds"/>
            </div>
        );
    }
})`
    display: grid;
    grid-template-columns: repeat(4, 4em);
    grid-template-rows: 1em 1fr;
    grid-gap: 1em 0.5em;
    align-items: center;
    font-size: 0.8em;

    & ${ TimerTitle } {
        grid-column: 1 / -1;
        font-size: 1em;
    }
    @media ${ styles.media.laptop } {
        font-size: 1em;
    }
`;
