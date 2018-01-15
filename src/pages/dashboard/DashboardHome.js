import * as React from 'react';
import {translate} from 'react-i18next';
import styled from 'styled-components';
import styles from '../../styles';
import Clipboard from 'react-clipboard.js';
import {
    TokenCalculator,
    SectionContent,
    HelpLink,
    PageSection,
    RoundStatus,
} from '../../components';

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

const DashboardHomeForm = translate('dashboard')(styled(props =>
    <form className={ props.className } onSubmit={ () => false }>
        <p>{ props.t('title') }</p>
        <fieldset>
            <label>{ props.t('calculator') }</label>
            <TokenCalculator />
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
        <fieldset>
            <label>{ props.t('gas_price') }</label>
            <span>
                { props.gasPrice }
                <small>
                    { props.t('gas_price_explained') }
                    &nbsp;
                    <a href={ props.t('gas_price_help_url') } target="_blank">{ props.t('gas_price_help') }</a>
                </small>
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

export const DashboardHome = ({t, showAlert}) =>
    <DashboardHomeContent light>
        <RoundStatus />
        <DashboardHomeForm balance="0"
            gas="200.000"
            gasPrice="40 Gwei"
            address="0x0F3D5562cA6084F7d59CE10Dc5aB672257573dE6"
            showAlert={ showAlert } />
        <div>
            <HelpLink href={ t('help_url') }>{ t('help') }</HelpLink>
            <HelpLink href="http://2tel.us/2klVR9N">{ t('how_to_buy') }</HelpLink>
            <HelpLink href={ t('terms_url') }>{ t('terms') }</HelpLink>
        </div>
    </DashboardHomeContent>
;
