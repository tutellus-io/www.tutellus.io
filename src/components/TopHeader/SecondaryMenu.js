//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';
import {observer, inject} from 'mobx-react';
import {get} from 'lodash';

import {SocialIcons} from '../Footer';
import {LinkButton, Button} from '../';
import styles from '../../styles';

/*::
type LangSelectProps = {|
    className?: string,
    onLanguage: (string => void),
    locale: string,
|}
*/
const LangSelect/*:ComponentType<LangSelectProps>*/ = styled((props/*:LangSelectProps*/) =>
    <select className={ props.className }
        onChange={ event => props.onLanguage(event.target.value) }
        value={ props.locale }>
        <option value="en">English</option>
        <option value="es">Español</option>
    </select>
)`
    text-align: right;
    appearance: none;
    background: transparent;
    border: none;
    text-transform: uppercase;
    color: white;
`;

/*::
type SecondaryMenuProps = {|
    className?: string,
    socialLinks?: Object,
    onLanguage: (string => void),
    locale: string,
    history?: void,
|}
*/
const SecondaryMenuElement/*:ComponentType<SecondaryMenuProps>*/ = inject('store')(observer((props/*:SecondaryMenuProps*/) => {
    const {
        store,
        history = {},
    } = (props/*:any*/);
    const path = get(history, 'location.pathname');
    const isHome = path === "/";

    return (
        <div className={ props.className }>
            { props.socialLinks &&
            <SocialIcons networks={ props.socialLinks } />
            }
            {
                (isHome
                    ? <LinkButton to="/dashboard/home">{store.logged ? 'Dashboard' : 'Join ICO'}</LinkButton>
                    : store.logged && <Button onClick={()=> store.logout()}> Logout </Button>)
            }
            <LangSelect onLanguage={ props.onLanguage } locale={ props.locale } />
        </div>
    );
}));

export const SecondaryMenu/*:ComponentType<SecondaryMenuProps>*/ = styled(SecondaryMenuElement)`
    display: grid;
    grid: "cta lang-select" / 3fr 1fr;
    align-items: center;
    justify-items: end;
    & > ${ SocialIcons } {
        display: none;
        grid-area: social;
    }

    & > ${ LinkButton }, & > ${ Button }  {
        grid-area: cta;
        padding: .5em;
        font-size: .8em;
        background: transparent;
        border: solid 1px white;
        color: white;

        &:hover {
            background: white;
            color: black;
            transition: all .2s linear;
        }
    }

    & > ${ LangSelect } {
        grid-area: lang-select;
        color: white;
    }

    @media ${ styles.media.laptop } {
        grid: "social cta lang-select" / 6fr 2fr 1fr;
        & > ${ SocialIcons } {
            display: block;
        }
        & > ${ LinkButton }, & > ${ Button }  {
            margin: 0 1em;
            font-size: .5em;
            padding: 1em;
        }
    }
`;
