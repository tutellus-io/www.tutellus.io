//@flow
import React from 'react';
import styled from 'styled-components';
import {translate} from 'react-i18next';
import SmoothScroll from 'react-scroll';

import {SocialIcons, SocialIcon} from './Footer';
import {CTAButton} from './Buttons';
import styles from '../styles';

export const TOP_HEADER_HEIGHT = {
    //px
    SMALL: 64,
}
TOP_HEADER_HEIGHT.BIG = 2 * TOP_HEADER_HEIGHT.SMALL;
//TODO: que por defecto sea small para evitar que flashee?
const small_header_styles = `
    height: ${ TOP_HEADER_HEIGHT.SMALL }px;
    background: black;
    transition: all .5s linear;
`
const HeaderLogo = styled(props =>
    <a className={ props.className }>
        <img src={ props.logo } alt={ props.title } />
    </a>
)`
`

export const TopHeader = styled(props =>
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
        display: block;
        grid-area: logo;
        max-width: 8em;
    }
    & > ${ SecondaryMenu } {
        grid-area: secondary-menu;
    }
/*

    @media ${ styles.media.tablet } {
        padding: 0 50px;
        height: ${ TOP_HEADER_HEIGHT }px;
        background: linear-gradient(black, transparent);
        grid-template-areas: "logo . main-menu . secondary-menu";
        grid-template-columns: 0% 0% 70% 0% 30%;

        ${ props => props.small && small_header_styles }
    }
    @media ${ styles.media.laptop } {
        grid-template-columns: 10% 0% 50% 0% 40%;
    }
    @media ${ styles.media.desktop } {
        grid-template-columns: 10% 5% 40% 5% 40%;
    }
    */
`;
const LangSelect = styled(props =>
    <select className={ props.className } onChange={ event => props.onLanguage(event.target.value) } value={ props.locale }>
        <option value="en">English</option>
        <option value="es">Español</option>
    </select>
)`
    text-align: right;
    appearance: none;
    background: transparent;
    border: none;
/*
    background: transparent;
    color: white;
    text-transform: uppercase;
    */
`;

export const SecondaryMenu = styled(props =>
    <div className={ props.className }>
        <SocialIcons networks={ props.socialLinks } />
        <CTAButton>Whitelist</CTAButton>
        <LangSelect onLanguage={ props.onLanguage } locale={ props.locale } />
    </div>
)`
    display: grid;
    grid: "social lang-select" / 3fr 1fr;
    justify-items: end;
    & ${ SocialIcons } {
        grid-area: social;
    }

    & ${ CTAButton } {
        display: none;
    /*
        grid-area: cta;
        padding: 1em;
        font-size: .8em;
        background: transparent;
        border: solid 1px white;
        color: white;

        &:hover {
            background: white;
            color: black;
            transition: all .2s linear;
        }
    */
    }
    & ${ LangSelect } {
        grid-area: lang-select;
        color: white;
    }
/*
    */
`;
const Link = styled(props =>
    <SmoothScroll.Link { ...props } spy={ true } smooth={ true } activeClass="active" offset={ TOP_HEADER_HEIGHT.SMALL }>
    { props.children }
    </SmoothScroll.Link>
)`
/*
    cursor: pointer;
    transition: color .2s linear;
    &:hover {
        color: ${ styles.colors.midgrey };
    }
    &.active {
        color: ${ styles.colors.lightblue };
    }
    */
`
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
/*
    grid-area: main-menu;

    & li {
        display: inline;
        line-height: 1.5em;
        font-weight: normal;
        padding: 0 1em;
        text-transform: uppercase;
    }
*/
`;
