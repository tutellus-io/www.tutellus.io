//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';
import {translate} from 'react-i18next';
import SmoothScroll from 'react-scroll';

import {SocialIcons} from './Footer';
import {LinkButton} from './';
import styles from '../styles';

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
    <a className={ props.className }>
        <img src={ props.logo } alt={ props.title } />
    </a>
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
const Link/*:ComponentType<LinkProps>*/ = styled((props/*:LinkProps*/) =>
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
            <li><Link to="howitworks">{ t('Whitepaper') }</Link></li>
            <li><Link to="platform">{ t('Platform') }</Link></li>
            <li><Link to="team">{ t('the_team:title') }</Link></li>
            <li><Link to="crowdsale">{ t('crowdsale:title') }</Link></li>
        </ul>
    </nav>
))`
    display: none;

    @media ${ styles.media.tablet } {
        display: block;
        margin-left: .5em;

        & li {
            display: inline-block;
            font-size: .5em;
            font-weight: normal;
            padding: 0 .5em;
            text-transform: uppercase;
            & ${ Link } {
                display: block;
                margin-top: -1.5em;
            }
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
    grid: "logo secondary-menu" / 30% 70%;
    align-items: center;
    justify-items: justify;
    transition: all .5s linear;

    & > ${ HeaderLogo } {
        grid-area: logo;
    }
    $ > ${ MainMenu } {
        grid-area: main-menu;
    }

    @media ${ styles.media.tablet } {
        height: ${ TOP_HEADER_HEIGHT.BIG }px;
        background: linear-gradient(black, transparent);
        grid: "logo main-menu secondary-menu" / 10% 50% 40%;

        ${ props => props.small && small_header_styles }

    }
    @media ${ styles.media.laptop } {
        padding: 0 2em;
        grid: "logo . main-menu . secondary-menu" / 15% 55% 30%;
        & > ${ HeaderLogo } {
            grid-area: logo;
        }
        $ > ${ MainMenu } {
            grid-area: main-menu;
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
    socialLinks: Object,
    onLanguage: (string => void),
    locale: string,
|}
*/
export const SecondaryMenu/*:ComponentType<SecondaryMenuProps>*/ = styled((props/*:SecondaryMenuProps*/) =>
    <div className={ props.className }>
        <SocialIcons networks={ props.socialLinks } />
        <LinkButton to="/signup">Whitelist</LinkButton>
        <LangSelect onLanguage={ props.onLanguage } locale={ props.locale } />
    </div>
)`
    display: grid;
    grid: "social lang-select" / 3fr 1fr;
    align-items: center;
    justify-items: end;
    & > ${ SocialIcons } {
        grid-area: social;
    }

    & > ${ LinkButton } {
        display: none;
    }

    & > ${ LangSelect } {
        grid-area: lang-select;
        color: white;
    }

    @media ${ styles.media.tablet } {
        grid: "cta lang-select" / 3fr 1fr;
        & > ${ SocialIcons } {
            display: none;
        }
        & > ${ LinkButton } {
            display: block;
            grid-area: cta;
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
    }
    @media ${ styles.media.laptop } {
        grid: "social cta lang-select" / 6fr 2fr 1fr;
        & > ${ SocialIcons } {
            display: block;
        }
        & > ${ LinkButton } {
            margin: 0 1em;
            font-size: .5em;
            padding: 1em;
        }
    }
`;
