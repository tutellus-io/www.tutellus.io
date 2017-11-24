//@flow
import * as React from 'react';
// $FlowFixMe: usamos moment/moment para que funcione el transpilado (se podría hacer con webpack)
import moment from 'moment/moment';
import styled from 'styled-components';

import styles from '../styles';
const {padding, border, margin, colors} = styles;
const {clearfix} = styles.helpers;

const milestone_marker =  props => `
    content: ' ';
    display: block;
    padding: 1em;
    border-radius: 50%;
    border: solid 2px ${ styles.colors.lightblue };
    background: ${ props.done ? styles.colors.lightblue : 'white' };
`
export const Milestone = styled(props =>
    <li className={ props.className }>
        <div>
            <time dateTime={ moment(props.date).format('YYYY-MM-DD') }>{ moment(props.date).format('MMM YY') }</time>
            <span>{ props.title }</span>
            <div>{ props.children }</div>
        </div>
    </li>
)`
    display: grid;
    align-items: start;
    & > div {
        position: relative;
        top: -1em;
        & > * {
            display: block;
        }
        & > time {
            font-size: 1.5em;
            color: black;
            font-weight: bold;
        }
        & > span {
            color: black;
            margin: 0.5em 0;
        }
        & > div {
            font-size: 0.8em;
            line-height: 1.5em;
            margin-bottom: 2em;
            color: ${ styles.colors.softblack };
        }
    }
    &:before {
        content: ' ';
        display: block;
        grid-row-start: 1;
        grid-row-end: span 3;
        border: solid 2px ${ styles.colors.lightblue };
        border-bottom: 0;
        min-height: 12em;
    }
    &:after {
        ${ milestone_marker }
    }
    &:nth-child(even) {
        position: relative;
        top: 6em;
        grid-template-columns: 20% 80%;
        text-align: left;
        & > * { grid-column-start: 2; padding-left: 2em;}
        &:after {
            grid-column-start: 1;
            grid-row-start: 1;
            align-self: start;
            justify-self: start;
            position: relative;
            top: calc(-1em - 1px);
            left: calc(-1em - 1px);
        }
        &:before {
            grid-column-start: 1;
            border-right: 0;
        }
    }
    &:nth-child(odd) {
        text-align: right;
        grid-template-columns: 80% 20%;
        & > * { grid-column-start: 1; padding-right: 2em;}
        &:after {
            grid-column-start: 2;
            grid-row-start: 1;
            align-self: start;
            justify-self: end;
            position: relative;
            top: calc(-1em - 1px);
            right: calc(-1em - 3px);
        }
        &:before {
            grid-column-start: 2;
            height: 100%;
            width: 100%;
            border-left: 0;
        }
    }
    &:last-child:before {
        /* avoid excess roadmap length past last milestone */
        min-height: 0;
    }
`;
export const Roadmap = styled.ol`
    display: grid;
    grid-template-columns: repeat(2, 50%);
    padding-top: 2em;
    margin-bottom: 2em;
    overflow: hidden;
`;

