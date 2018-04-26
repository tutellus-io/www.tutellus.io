//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import dayjs from 'dayjs';
import styled from 'styled-components';

import styles from '../styles';

const milestone_marker = props => `
    content: ' ';
    display: block;
    padding: 1em;
    border-radius: 50%;
    border: solid 2px ${ styles.colors.lightblue };
    background: ${ props.done ? styles.colors.lightblue : styles.colors.dark };
`;

const left_side = `
    top: 6em;
    grid-template-columns: 20% 80%;
    text-align: left;
    & > * { grid-column-start: 2; padding-left: 2em;}
    &:after {
        grid-column-start: 1;
        grid-row-start: 1;
        align-self: start;
        justify-self: start;
        margin-left: -1.125em;
    }
    &:before {
        grid-column-start: 1;
        border-right: 0;
    }
`;
/*::
type MilestoneProps = {|
    className?: string,
    date: string,
    title: string,
    children?: React.Node,
    done?: boolean,
|}
*/
export const Milestone/*:ComponentType<MilestoneProps>*/= styled((props/*:MilestoneProps*/) =>
    <li className={ props.className }>
        <div>
            <time dateTime={ dayjs(props.date).format('YYYY-MM-DD') }>{ dayjs(props.date).format('MMM YY') }</time>
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
            color: ${ styles.colors.lightblue };
            font-weight: bold;
        }
        & > span {
            color: white;
            margin: 0.5em 0;
        }
        & > div {
            font-size: 0.8em;
            line-height: 1.5em;
            margin-bottom: 2em;
            color: ${ styles.colors.midgrey };
        }
    }
    &:before {
        content: ' ';
        display: block;
        grid-row-start: 1;
        grid-row-end: span 3;
        border: solid 2px ${ styles.colors.lightblue };
        border-bottom: 0;
        min-height: 9em;
        @media ${ styles.media.tablet } {
            min-height: 12em;
        }
    }
    &:after {
        ${ milestone_marker }
        margin-top: -1.125em;
        z-index: 2;
    }
    &:nth-child(n) {
        ${ left_side }
        margin-left: 1.1em;
    }
    @media ${ styles.media.tablet } {
        &:nth-child(even) {
            position: relative;
            ${ left_side }
            margin-left: 0;
        }
        &:nth-child(odd) {
            margin-left: 0;
            text-align: right;
            grid-template-columns: 80% 20%;
            & > * { grid-column-start: 1; padding-right: 2em;}
            &:after {
                grid-column-start: 2;
                grid-row-start: 1;
                align-self: start;
                justify-self: end;
                margin-right: -1.125em;
            }
            &:before {
                grid-column-start: 2;
                height: 100%;
                width: 100%;
                border-right: solid 2px ${ styles.colors.lightblue };
                border-left: 0;
            }
        }
    }
    &:last-child:before {
        /* avoid excess roadmap length past last milestone */
        min-height: 0;
    }
`;
Milestone.displayName = 'Milestone';

export const Roadmap = styled.ol`
    display: grid;
    padding-top: 2em;
    padding-bottom: 2em;
    overflow: hidden;
    @media ${ styles.media.tablet } {
        grid-template-columns: 1fr 1fr;
    }
`;
Roadmap.displayName = 'Roadmap';

