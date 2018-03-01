//@flow
/* eslint no-magic-numbers: off */
import React from 'react';
/*::import type {ComponentType} from 'react'*/
import PropTypes from 'prop-types';
import R from 'ramda';
import styled from 'styled-components';
import moment from 'moment';
import {translate} from 'react-i18next';
import {NavLink} from 'react-router-dom';
import styles from '../styles';

export const Tab = styled(NavLink)`
    display: inline-block;
    text-transform: uppercase;
    margin-bottom: 1em;
    &.active {
        color: ${ styles.colors.lightblue };
        &:after {
            content: '';
            display: block;
            width: 100%;
            border-bottom: solid 2px ${ styles.colors.lightblue };
            position: relative;
            top: 1em;
        }
    }
    &[disabled] {
        color: ${ styles.colors.athens };
    }
    & + & {
        margin-left: 3em;
    }
`;
export const Tabs = styled.div`
    border-bottom: solid 1px ${ styles.colors.athens };
    padding-top: 1em;
`;

const PRESALE = 'pre-sale';
const stages = R.map(R.evolve({
    end_date: end_date => new Date(`${ end_date }T19:00:00Z`).valueOf(),
}), [
    //important: keep in end_date order, RoundStatus will show the first one
    //that hasn't ended yet.
    {end_date: '2018-01-15', status: PRESALE, bonus: 0.5, min_eth_purchase: 5},
    {end_date: '2018-01-29', status: PRESALE, bonus: 0.45, min_eth_purchase: 5},
    {end_date: '2018-02-12', status: PRESALE, bonus: 0.4, min_eth_purchase: 5},
    {end_date: '2018-03-31', status: PRESALE, bonus: 0.35, min_eth_purchase: 5},
]);
const isStillOpen = R.propSatisfies(
    end_date => ((end_date/*:any*/)/*:number*/) > moment().valueOf(),
    'end_date'
);
const findCurrent = R.find(isStillOpen);
const TUTS_PER_ETH = 1500;
const stageRate = R.compose(R.multiply(TUTS_PER_ETH), R.add(1), R.prop('bonus'));
const currentRate = R.compose(stageRate, findCurrent);

const RoundStage = translate('dashboard')(styled(({className, stage, t}) =>
    <div className={ className }>
        <h1>{ t('status') } { t(stage.status) }</h1>
        <div>
            <div>
                { moment(stage.end_date).diff(moment(), 'days') }
                <span>{ t('days') }</span>
            </div>
            <div>
                { stage.bonus * 100 }%
                <span>{ t('bonus') }</span>
            </div>
            <div>
                { stage.min_eth_purchase }
                <span>{ t('min') }&nbsp;ETH</span>
            </div>
        </div>
        <hr/>
        <div>
            <span>{ t('today') }</span>
            1ETH&nbsp;=&nbsp;{ Math.round(stageRate(stage)) }TUT
        </div>
    </div>
)`
    background: url('https://lib.tutellus.com/ico/video/background.mp4.jpg') no-repeat;
    max-width: 40em;
    margin: 0 auto;
    margin-bottom: 3em;
    padding: 3em;
    color: white;
    text-shadow: 2px 2px 2px black;
    text-transform: uppercase;
    text-align: center;
    & > h1 {
        margin-bottom: 1em;
    }
    & span {
        display: block;
        font-size: .8em;
    }
    & > div:nth-child(2) {
        & > div {
            border: solid 1px white;
            padding: 1em;
            margin: .5em;
            font-weight: bold;
            & > span {
                font-weight: 300;
                margin-top: 1em;
            }
        }
        @media ${ styles.media.tablet } {
            display: grid;
            grid-template-columns: 33% 33% 33%;
        }
    }
    & > div:nth-child(4) {
        font-weight: bold;
        & > span {
            margin-bottom: 1em;
            font-weight: 300;
        }
    }
`);
export const RoundStatus = styled(() => {
    const stage = findCurrent(stages);
    if (stage) {
        return <RoundStage stage={ stage } />;
    }
    return null;
})``;

export const HelpLink = styled.a`
    text-decoration: underline;
    color: ${ styles.colors.lightblue };
    margin-left: 1em;
`;

/*::
type CalculatorProps = {| className?: string |}
type CalculatorState = {| tut: number, eth: number |}
*/
class UnstyledCalculator extends React.Component/*::<CalculatorProps, CalculatorState>*/ {
    /*:: rate: number */
    constructor() {
        super();
        this.rate = currentRate(stages);
        this.state = ({
            tut: '',
            eth: '',
        }/*:any*/);
        this.calculateETH = this.calculateETH.bind(this);
        this.calculateTUT = this.calculateTUT.bind(this);
    }
    /*:: calculateETH: Event => bool */
    calculateETH(event) {
        this.setState({
            eth: event.target.value / this.rate,
            tut: event.target.value,
        });
        return true;
    }
    /*:: calculateTUT: Event => bool */
    calculateTUT(event) {
        this.setState({
            tut: this.rate * event.target.value,
            eth: event.target.value,
        });
        return true;
    }
    render() {
        return <div className={ this.props.className }>
            <input value={ this.state.eth }
                   type="number"
                   onChange={ this.calculateTUT } />
            <span>&nbsp;ETH&nbsp;=&nbsp;</span>
            <input value={ this.state.tut }
                   type="number"
                   onChange={ this.calculateETH } />
            <span>&nbsp;TUT</span>
        </div>;
    }
}
UnstyledCalculator.propTypes = {
    className: PropTypes.string,
};
export const TokenCalculator/*:ComponentType<CalculatorProps>*/ = styled(UnstyledCalculator)`
    & > span {
        font-weight: bold;
    }
`;
