//@flow
import * as React from 'react';
// $FlowFixMe: usamos moment/moment para que funcione el transpilado (se podría hacer con webpack)
import moment from 'moment/moment';
import styled from 'styled-components';

import styles from '../styles';
const {padding, border, margin, colors} = styles;
const {clearfix} = styles.helpers;

/*::
type MilestoneAttrs = {
    className: string,
    title: string,
    date: moment$Moment,
    children?: React.Node,
}
*/
export const Milestone = styled((props/*: MilestoneAttrs */)/*: React.Node */=>
    <li className={ props.className }>
        <time dateTime={ moment(props.date).format('YYYY-MM-DD') }>{ moment(props.date).format('MMM YY') }</time>
        <span>{ props.title }</span>
        <div>{ props.children }</div>
    </li>
)`
    position: relative;
    padding: ${ padding.medium } 0;
    &:after {
        content: "";
        height: 110%;
        width: 5px;
        background: white;
        border-radius: 100px;
        border: solid .15em ${ colors.lightblue };
        position: absolute;
        z-index: 0;
    }
    & > time {
        ${ clearfix }
        color: ${ colors.darkblack };
        border-bottom: solid ${ border.small } ${ colors.darkgrey };
    }
    & > span {
        position: absolute;
        top: 0;
        width: 100%
    }
    & > div {
        margin: ${ margin.small } 0;
    }
    & > time:before {
        content: "";
        border-radius: 100px;
        height: 1em;
        width: 1em;
        background: ${ colors.white };
        border: solid 0.25em ${ colors.lightblue };
        position: absolute;
        z-index: 1;
    }
    &:nth-child(odd) {
        margin-right: 50%;
        text-align: right;
        float: right;
        right: 17px;
        & > time:before {
            top: -2%;
            right: -25%;
        }
        & > span {
            left: 130%;
            text-align: left;
        }
        & > div {
            float: right;
            text-align: left;
            display: inline-block;
        }
        &:after {
            right: -22px;
            top: -5%;
        }
    }
    &:nth-child(even) {
        margin-left: 50%;
        float: left;
        left: 17px;
        & > time:before {
            top: -2%;
            left: -25%;
        }
        & > span {
            right: 130%;
            text-align: right;
            padding-right: 0.5em;
        }
        &:after {
            left: -22px;
            top: 0;
        }
    }
`;
export const Roadmap = styled.ol`
    display: block;
    ${ clearfix }
`;

