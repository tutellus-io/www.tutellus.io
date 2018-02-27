//@flow
import React from 'react';
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';
import {translate} from 'react-i18next';

import styles from '../styles';

import {
    withLoading,
} from '../hoc';

/*::
type Document = {name: string, description: string, url: string}
type Props = {|
    documents: Array<Document>,
    loading: bool,
|}
type HOCProps = {className: string, t: string => string}
*/
export const DocumentList/*:ComponentType<Props>*/ = withLoading(translate("documents")(styled((props/*:(Props & HOCProps)*/) =>
    <ol className={ props.className }>{
        //$FlowFixMe typecast to Array<String>
        props.documents.map((name/*:string*/, index) =>
            <li key={ index }>
                <a target="_blank" href={ props.t(`${ name }_url`) }>
                    { props.t(`${ name }_name`) }
                    <small>{ props.t(`${ name }_description`) }</small>
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
`));
