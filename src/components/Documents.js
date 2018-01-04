//@flow
import React from 'react';
import styled from 'styled-components';
import {translate} from 'react-i18next';
import {omit} from 'ramda';

import styles from '../styles';

export const DocumentList = translate()(styled(props =>
    <ol { ...omit('documents', props) }>{
        Object.entries(props.documents || {}).map(([name, {description, url}]) =>
            <li key={ name }>
                <a target="_blank" href={ url }>
                    { name }
                    <small>{ description }</small>
                    <button>{ props.t('download') }</button>
                </a>
            </li>
        )
    }</ol>
)`
    & > li {
        background: url('https://lib.tutellus.com/ico/video/background.mp4.jpg') no-repeat;
        background-color: ${ styles.colors.darkblue };
        color: white;
        margin: 1em 0;
        position: relative;

        & > a {
            display: block;
            width: 100%;
            height: 100%;
            padding: 2em;
            background: rgba(0,0,0,.4);
            & > small {
                display: none;

                @media ${ styles.media.tablet } {
                    display: block;
                    margin-top: 1em;
                    font-size: .8em;
                    line-height: 1.25em;
                }
            }
            & > button {
                display: none;

                @media ${ styles.media.tablet } {
                    display: block;
                    cursor: pointer;
                    background: ${ styles.colors.lightblue };
                    font-size: .8em;
                    border-radius: 5px;
                    padding: 1em;
                    margin: 0 auto;
                    text-transform: uppercase;
                    border: 0;
                    color: white;
                    width: 100%;
                    margin-top: 1.5em;
                }
            }

            &:before {
                content: '\\E2C0';
                font-family: 'Material Icons';
                display: inline-block;
                background: white;
                color: black;
                font-size: 2em;
                padding: .75em;
                margin: -1em;
                position: absolute;
                right: 1em;

                @media ${ styles.media.tablet } {
                    font-size: .75em;
                    display: block;
                    margin: 0 auto;
                    margin-bottom: 1em;
                    border-radius: 50%;
                    width: 1em;
                    line-height: 1em;
                    position: initial;
                    background: white;
                    color: black;
                }
            }
        }

        @media ${ styles.media.tablet } {
            text-align: center;
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
`);

