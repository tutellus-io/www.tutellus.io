//@flow
import React from 'react';
import styled from 'styled-components';
import {translate} from 'react-i18next';
import SmoothScroll from 'react-scroll';

import {SocialIcons} from './Footer';
import {CTAButton} from './Buttons';
import styles from '../styles';

export const TOP_HEADER_HEIGHT = 128;
//TODO: que por defecto sea small para evitar que flashee?
export const TopHeader = styled(props =>
    <header className={ props.className }>
        <a href="/">
            <img src={ props.logo } alt={ props.title } />
        </a>
        { props.children }
    </header>
)`
    display: grid;
    grid-template-areas: "logo . main-menu . secondary-menu";
    grid-template-columns: 10% 5% 40% 5% 40%;
    align-items: center;
    font-size: .8em;
    padding: 0 50px;
    background: linear-gradient(black, transparent);
    height: ${ TOP_HEADER_HEIGHT }px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 3;
    transition: all .5s linear;
    color: white;

    & > a {
        grid-area: logo;
    }
    ${ props => props.small && `
        background: black;
        height: ${ TOP_HEADER_HEIGHT / 2 }px;
        padding: 15px 50px;
        transition: all .5s linear;
    ` }
`;
const LangSelect = styled(props =>
    <select className={ props.className } onChange={ event => props.onLanguage(event.target.value) } value={ props.locale }>
        <option value="en">English</option>
        <option value="es">Español</option>
    </select>
)`
    appearance: none;
    border: none;
    background: transparent;
    color: white;
    text-transform: uppercase;
`;

export const SecondaryMenu = styled(props =>
    <ul className={ props.className }>
        <li><SocialIcons networks={ props.socialLinks } /></li>
        <li><CTAButton>Whitelist</CTAButton></li>
        <li><LangSelect onLanguage={ props.onLanguage } locale={ props.locale } /></li>
    </ul>
)`
    grid-area: secondary-menu;
    text-align: right;
    & > li {
        display: inline-block;
        margin: 0 .25rem;
    }
    & ${ SocialIcons } {
        display: inline;
        position: relative;
        top: 0.25em;
    }
    & ${ CTAButton } {
        margin-top: 0;
        padding: 0.5rem;
        background: transparent;
        border: solid 1px white;
        transition: all .2s linear;
        &:hover {
            background: white;
            color: black;
            transition: all .2s linear;
        }
    }
`;
const Link = styled(props =>
    <SmoothScroll.Link { ...props } spy={ true } smooth={ true } activeClass="active" offset={ -TOP_HEADER_HEIGHT / 2 }>
    { props.children }
    </SmoothScroll.Link>
)`
    cursor: pointer;
    transition: color .2s linear;
    &:hover {
        color: ${ styles.colors.lightblue };
    }
    &.active {
        border-bottom: solid 1px ${ styles.colors.lightblue };
        padding-bottom: 1em;
        transition: all .2s linear;
    }
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
    grid-area: main-menu;

    & li {
        display: inline;
        line-height: 1.5em;
        font-weight: bold;
        padding: 0 1em;
        text-transform: uppercase;
    }
`;
