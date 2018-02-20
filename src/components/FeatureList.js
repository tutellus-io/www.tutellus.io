//@flow
import React from 'react';
import styled from 'styled-components';

import {styles} from '../styles';
import {Roadshow} from './Roadshow';

export const Feature = styled(props =>
    <li className={ props.className }>
        <img src={ props.icon } alt={ props.title }/>
        <strong>{ props.title }</strong>
        <span>{ props.children }</span>
    </li>
)`
    display: grid;
    align-content: start;
    font-size: 1em;
    line-height: 1.2em;
    & > img {
        height: 60px;
        margin: 0 auto 0.6em;
    }

    & > strong {
        display: block;
        text-align: center;
        margin-bottom: 0.3em;
    }

    & > span {
        font-size: 0.8em;
        text-align: center
    }
`;

export const FeatureList = Roadshow.withComponent('ul').extend`
    display: grid;
    padding-top: 2em;
    grid-gap: 2.5em 2em;
    grid-template-columns: repeat(2, 1fr);

    @media ${ styles.media.laptop } {
        grid-template-columns: repeat(3, 1fr);
    }

    @media ${ styles.media.laptop } {
        grid-template-columns: repeat(4, 1fr);
    }
`;
