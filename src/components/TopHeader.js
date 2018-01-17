//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';
import {translate} from 'react-i18next';
import SmoothScroll from 'react-scroll';
import {Link} from 'react-router-dom';
import {observer, inject} from 'mobx-react';

import {SocialIcons} from './Footer';
import {LinkButton, Button} from './';
import styles from '../styles';
import {get} from 'lodash';

const SMALL_HEADER_HEIGHT = 64;//px
export const TOP_HEADER_HEIGHT = {
    SMALL: SMALL_HEADER_HEIGHT,
    BIG: 2 * SMALL_HEADER_HEIGHT,
};
const small_header_styles = `
    height: ${ TOP_HEADER_HEIGHT.SMALL }px;
    background: black;
    transition: all .5s linear;
`;
/*::
type HeaderLogoProps = {|
    className?: string,
    logo: string,
    title: string,
|}
*/
const HeaderLogo/*:ComponentType<HeaderLogoProps>*/ = styled((props/*:HeaderLogoProps*/) =>
    <Link to="/" className={ props.className }>
        <img src={ props.logo } alt={ props.title } />
    </Link>
)`
    display: block;
    max-width: 7em;
`;
/*::
type LinkProps = {|
    to: string,
    children?: React.Node,
|}
*/
const MenuLink/*:ComponentType<LinkProps>*/ = styled((props/*:LinkProps*/) =>
    <SmoothScroll.Link { ...props }
        spy={ true }
        smooth={ true }
        activeClass="active"
        offset={ -TOP_HEADER_HEIGHT.SMALL }>
        { props.children }
    </SmoothScroll.Link>
)`
    cursor: pointer;
    transition: color .2s linear;
    &:hover {
        color: ${ styles.colors.midgrey };
    }
    &.active {
        color: ${ styles.colors.lightblue };
    }
`;
export const MainMenu = styled(translate()(({t, className}) =>
    <nav className={ className }>
        <ul>
            <li><MenuLink to="documents">{ t('documents:title') }</MenuLink></li>
            <li><MenuLink to="platform">{ t('Platform') }</MenuLink></li>
            <li><MenuLink to="team">{ t('the_team:title') }</MenuLink></li>
            <li><MenuLink to="crowdsale">{ t('crowdsale:title') }</MenuLink></li>
        </ul>
    </nav>
))`
    display: block;
    margin-left: .5em;

    & li {
        display: inline-block;
        font-size: .5em;
        font-weight: normal;
        padding: 0 .5em;
        text-transform: uppercase;
        & ${ MenuLink } {
            display: block;
            margin-top: -1.5em;
        }
    }
    @media ${ styles.media.laptop } {
        font-size: 1.25em;
        & li {
            padding: 0 1em;
        }
    }
`;
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
|}
*/
const SecondaryMenuElement/*:ComponentType<SecondaryMenuProps>*/ = inject('store')(observer((props/*:SecondaryMenuProps*/) => {
    const {
        store,
        history = {},
    } = props;
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

/*::
type TopHeaderProps = {|
    className?: string,
    logo: string,
    title: string,
    small?: bool,
    children?: React.Node,
|}
*/
export const TopHeader/*:ComponentType<TopHeaderProps>*/ = styled((props/*:TopHeaderProps*/) =>
    <header className={ props.className }>
        <HeaderLogo logo={ props.logo } title={ props.title } />
        { props.children }
    </header>
)`
    position: fixed;
    top: 0;
    z-index: 3;
    width: 100%;
    padding: 0 1em;
    font-size: 125%;
    color: white;
    ${ small_header_styles }
    display: grid;
    grid: "logo secondary-menu"
          / 30%            70%;
    align-items: center;
    justify-items: justify;
    transition: all .5s linear;

    & > ${ HeaderLogo } {
        grid-area: logo;
    }
    & > ${ MainMenu } {
        display: none;
        grid-area: main-menu;
    }
    & > ${ SecondaryMenu } {
        grid-area: secondary-menu;
    }

    @media ${ styles.media.tablet } {
        height: ${ TOP_HEADER_HEIGHT.BIG }px;
        background: linear-gradient(black, transparent);
        grid: "logo main-menu secondary-menu"
              / 10%       50%            40%;
        & > ${ MainMenu } {
            display: block;
        }

        ${ props => props.small && small_header_styles }

    }
    @media ${ styles.media.laptop } {
        padding: 0 2em;
    }
`;
