//@flow
import React from 'react';
import styled from 'styled-components';
import {omit} from 'ramda';

import styles from '../styles';

export const DocumentList = styled(props =>
    <ol { ...omit('documents', props) }>{
        Object.entries(props.documents || {}).map(([name, url]) =>
            <li key={ name }>
                <a target="_blank" href={ url }>{ name }</a>
            </li>
        )
    }</ol>
)`
    & > li {
        background: white;
        padding: 2em;
        margin: 1em 0;
        position: relative;

        & > a:before {
            content: '\\E2C0';
            font-family: 'Material Icons';
            display: inline-block;
            background: ${ styles.colors.darkblue };
            color: white;
            font-size: 2em;
            padding: .75em;
            margin: -1em;
            position: absolute;
            right: 1em;

            @media ${ styles.media.tablet } {
                background: white;
                color: black;
                font-size: 1em;
                border-radius: 50%;
                width: 1em;
                line-height: 1em;
                position: initial;
                margin-right: .75em;
            }
        }

        @media ${ styles.media.tablet } {
            background: transparent;
            line-height: 2em;
            padding: 0;
            padding-left: 2.5em;
        }
    }
    @media ${ styles.media.tablet } {
        display: grid;
        grid-template-columns: repeat(3, 33%);
        grid-column-gap: .5em;
    }
    @media ${ styles.media.laptop } {
        display: grid;
        grid-template-columns: repeat(4, 25%);
        grid-column-gap: .5em;
    }
`;

