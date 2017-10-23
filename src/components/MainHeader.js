//@flow
import React from 'react';
import styled from 'styled-components';

import styles from '../styles';
const {colors} = styles;

export const MainHeader = styled.header`
    background-color: ${ colors.white };
    border-bottom: 1px solid ${ colors.grey };
    height: 50px;
    padding-left: 15px;
    padding-right: 15px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 3;

    @media only screen and (min-width: 64em) {
        height: 70px;
    }
`;
/*:: type url = string */
export const MainLogo = styled((props/*: & {href: url} */) =>
    <a {...props}>
        {/*TODO: imagen fija que no dependa del tudle (S3)*/}
        <img src="https://www.tutellus.com/tudle/image" alt="Tutellus" />
    </a>
)`
    float: left;
    margin: 15px 20px 0 0;
`;
export const MainMenu = styled((props/*: {className: string, onLanguage: (string => void)} */) =>
    <nav className={ props.className } role="navigation">
        <ul>
            <li><a>Blog</a></li>
            <li><a>Platform</a></li>
            <li><a>Whitepaper</a></li>
            <li><a>Token Sale</a></li>
            <li><a>Team</a></li>
            <li><a onClick={ () => props.onLanguage('es') }>&#x2691;</a></li>
            <li><a onClick={ () => props.onLanguage('en') }>&#x2691;</a></li>
        </ul>
    </nav>
)`
    float: right;
    font-weight: 700;
    font-size: 1.143em;

    & li {
        display: inline-block;
        margin: 0 -2px;

        & a {
            display: inline-block;
            color: ${ colors.midgrey };
            padding: 25px 15px;
            transition: none;
        }
    }
`;
