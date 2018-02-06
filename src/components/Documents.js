//@flow
import React from 'react';
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';
import {translate} from 'react-i18next';
import {omit} from 'ramda';

import styles from '../styles';

/*::
type Document = {description: string, url: string}
type Props = {|
    documents: Array<Document>,
|}
*/
export const DocumentList/*:ComponentType<Props>*/ = translate()(styled((props/*:(Props & {t: any})*/) =>
    <ol { ...omit(['documents', 't'], props) }>{
        //$FlowFixMe typecast to Array<Document>
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
                    height: 3em;
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

                    &:before {
                        content: '\\E2C0';
                        font-family: 'Material Icons';
                        display: inline;
                        line-height: 0;
                        color: white;
                        font-size: 1.5em;
                        padding-right: .25em;
                        position: relative;
                        top: .25em;
                    }
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
                    display: none;
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
    @media ${ styles.media.desktop } {
        display: grid;
        grid-template-columns: repeat(4, 25%);
        grid-column-gap: .5em;
    }
`);
