//@flow
/* eslint indent: off */
import React from 'react';
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

export const RoundStatus = translate('dashboard')(styled(props =>
    <div className={ props.className }>
        <h1>{ props.t('status') } { props.t('pre-sale') }</h1>
        <div>
            <div>
                { moment(props.endDate).endOf('day').diff(moment(), 'days') }
                <span>{ props.t('days') }</span>
            </div>
            <div>
                { props.bonus }
                <span>{ props.t('bonus') }</span>
            </div>
            <div>
                { props.minETH }
                <span>{ props.t('min') }&nbsp;ETH</span>
            </div>
        </div>
        <hr/>
        <div>
            <span>{ props.t('today') }</span>
            1ETH&nbsp;=&nbsp;{ props.rate }TUT
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
export const HelpLink = styled.a`
    text-decoration: underline;
    color: ${ styles.colors.lightblue };
    margin-left: 1em;
`;

export const TokenCalculator = styled(class extends React.Component {
    constructor() {
        super();
        this.state = {
            tut: '',
            eth: '',
        };
        this.calculateETH = this.calculateETH.bind(this);
        this.calculateTUT = this.calculateTUT.bind(this);
    }
    calculateETH(event) {
        this.setState({
            eth: event.target.value / this.props.rate,
            tut: event.target.value,
        });
        return true;
    }
    calculateTUT(event) {
        this.setState({
            tut: this.props.rate * event.target.value,
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
})`
    & > span {
        font-weight: bold;
    }
`;
