//@flow
/* eslint indent: off */
import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import moment from 'moment';
import {translate} from 'react-i18next';
import Clipboard from 'react-clipboard.js';
import {
    Switch,
    Route,
    NavLink,
    Redirect,
} from 'react-router-dom';
import {
    PageSection,
    SectionContent,
} from './PageSection';
import {TOP_HEADER_HEIGHT} from './TopHeader';
import styles from '../styles';

const Tab = styled(NavLink)`
    text-transform: uppercase;
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
`;
const Tabs = styled.div`
    border-bottom: solid 1px ${ styles.colors.athens };
    padding-top: 1em;
    & > ${ Tab } {
        display: inline-block;
        margin-right: 3em;
        margin-bottom: 1em;
    }
`;
const RoundStatus = translate('dashboard')(styled(props =>
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
const HelpLink = styled.a`
    text-decoration: underline;
    color: ${ styles.colors.lightblue };
    margin-left: 1em;
`;
const DashboardHomeContent = styled(PageSection)`
    margin-top: 0;
    & ${ HelpLink } {
        display: block;
        line-height: 1.5em;
        @media ${ styles.media.tablet } {
            display: inline;
        }
    }
    @media ${ styles.media.laptop } {
        & > ${ SectionContent } {
            width: 100%;
            display: grid;
            grid: "form status"
                  "help   help"
                  / 50%    50%;
            & > form {
                grid-area: form;
            }
            & > ${ RoundStatus } {
                grid-area: status;
                max-width: 100%;
                width: 100%;
            }
        }
    }
    @media ${ styles.media.desktop } {
        & > ${ SectionContent } {
            grid: "form status"
                  "help   help"
                  / 60%    40%;
        }
    }

`;
const TokenCalculator = styled(class extends React.Component {
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
const DashboardHomeForm = translate('dashboard')(styled(props =>
    <form className={ props.className } onSubmit={ () => false }>
        <p>{ props.t('title') }</p>
        <fieldset>
            <label>{ props.t('calculator') }</label>
            <TokenCalculator rate="1500" />
        </fieldset>
        <p>{ props.t('instructions') }</p>
        <fieldset>
            <label>{ props.t('contract_address') }</label>
            <Clipboard data-clipboard-text={ props.address }
                       onSuccess={ () =>
                           props.showAlert({text: props.t('copied_to_clipboard')})
                       } >
                <input disabled onChange={ () => false } value={ props.address } />
            </Clipboard>
            &nbsp;
            <a href={ `https://etherscan.io/address/${ props.address }` } target="_blank">{ props.t('View') }</a>
        </fieldset>
        <fieldset>
            <label>{ props.t('gas_limit') }</label>
            <span>
                { props.gas }
                <small>{ props.t('gas_limit_explained') }</small>
            </span>
        </fieldset>
    </form>
)`
    & > fieldset {
        margin-top: 1em;
        & label {
            text-transform: capitalize;
            margin-right: 1em;
        }
        & span {
            font-weight: bold;
        }
        & small {
            display: block;
            font-size: .8em;
            font-weight: 300;
            margin-top: 1em;
            margin-bottom: 1em;
        }
        & ${ TokenCalculator } {
            margin-top: 1em;
            @media ${ styles.media.tablet } {
                width: 24em;
                display: inline-flex;
                align-items: baseline;
                & input {
                    @media ${ styles.media.desktop } {
                        flex-grow: 2;
                        font-size: 1em;
                    }
                }
            }
        }
        &:nth-child(4) input {
            font-size: 1em;
            width: 24em;
            max-width: 100%;
            display: block;
            margin-top: 1em;
            @media ${ styles.media.desktop } {
                display: inline;
            }
        }
    }
    & a {
        color: ${ styles.colors.lightblue };
        text-decoration: underline;
    }
    & p {
        display: block;
        font-weight: bold;
        margin-top: 2em;
    }
    & input {
        padding: .25em;
    }
    /* clipboard */
    & button {
        border: 0;
        background: transparent;
        padding: 0;
        margin: 0;
        font-size: 1em;
    }
`);
const DashboardHome = translate('dashboard')(({t, showAlert}) =>
    <DashboardHomeContent light>
        <RoundStatus endDate="2018-01-15"
                     rate="1500"
                     bonus="50%"
                     minETH="5" />
        <DashboardHomeForm balance="0"
                           rate="1500"
                           gas="1.000.000"
                           address="0x0F3D5562cA6084F7d59CE10Dc5aB672257573dE6"
                           showAlert={ showAlert } />
        <div>
            <HelpLink href={ t('help_url') }>{ t('help') }</HelpLink>
            <HelpLink href="http://2tel.us/2klVR9N">{ t('how_to_buy') }</HelpLink>
            <HelpLink href={ t('terms_url') }>{ t('terms') }</HelpLink>
        </div>
    </DashboardHomeContent>
);
const hasCompletedKYC = R.prop('eth_ok');
export const DashboardComponent = translate('dashboard')(styled(props =>
    <div className={ props.className }>
        <Tabs>
            <Tab to="/dashboard/home" disabled={ !hasCompletedKYC(props.user) }>{ props.t('Inicio') }</Tab>
            <Tab to="/dashboard/kyc">{ props.t('KYC') }</Tab>
        </Tabs>
        <Switch>
            <Route exact path="/dashboard/home" render={ () =>
                (hasCompletedKYC(props.user) ? <DashboardHome { ...props } />
                                            : <Redirect to="/dashboard/kyc" />)
            } />
            <Route exact path="/dashboard/kyc" render={ () =>
                <props.KYC { ...props } embed />
            } />
        </Switch>
    </div>
)`
    margin-top: ${ TOP_HEADER_HEIGHT.SMALL }px;
    & > ${ Tabs } {
        padding-left: 3em;
    }
`);
