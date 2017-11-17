//@flow
import React from 'react';
import styled from 'styled-components';

import {SocialIcons} from './Footer';
import {CTAButton} from './Buttons';

export const TOP_HEADER_HEIGHT = 128;
//TODO: que por defecto sea small para evitar que flashee?
export const TopHeader = styled(props =>
    <header className={ props.className }>
        <a href="/">
            <img src={ props.logo } alt={ props.title } height="100%" />
        </a>
        { props.children }
    </header>
)`
    background: linear-gradient(black, transparent);
    height: ${ TOP_HEADER_HEIGHT }px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 3;
    padding: 42px 50px;
    transition: all .5s linear;

    & img {
        margin-right: 1em;
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

export const MainMenu = styled((props/*: {className: string, onLanguage: (string => void)} */) =>
    <nav className={ props.className }>
        <ul>
            <li><a>Blog</a></li>
            <li><a>Platform</a></li>
            <li><a>Whitepaper</a></li>
            <li><a>Token Sale</a></li>
            <li><a>Team</a></li>
            <li><SocialIcons networks={ props.socialLinks } /></li>
            <li><CTAButton>Whitelist</CTAButton></li>
            <li><LangSelect onLanguage={ props.onLanguage } locale={ props.locale } /></li>
        </ul>
    </nav>
)`
    display: inline-block;
    position: relative;
    top: -0.8em;

    & li {
        display: inline;
        line-height: 1.5em;
        font-weight: bold;
        padding: 0 1em;
        text-transform: uppercase;
        & a {
            color: white;
        }
    }
    & ${ SocialIcons } {
        display: inline;
        position: relative;
        top: 0.25em;
    }
    & ${ CTAButton } {
        background: transparent;
        border: solid 1px white;
        transition: all .2s linear;
        &:hover {
            background: white;
            color: black;
            transition: all .2s linear;
        }
        ${ TopHeader }.small & {
            padding: 5px 10px;
        }
    }
`;
