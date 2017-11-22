//@flow
import * as React from 'react';
import R from 'ramda';
import styled from 'styled-components';

import styles from '../styles';
const {colors, margin} = styles;
const {clearfix} = styles.helpers;

export const MAX_CONTENT_WIDTH = 1140;
export const CenteredBlock = styled.div`
    display: flex;
    justify-content: center;
    max-width: ${ MAX_CONTENT_WIDTH / 2 }px;
    margin: 0 auto;
`;
const alignText = R.cond([
    [R.has('center'), R.always('center')],
    [R.has('right'), R.always('right')],
    [R.T, R.always('left')],
]);
export const Text = styled.p`
    font-size: 1em;
    line-height: 1.5em;
    margin-bottom: 1.5em;
    text-align: ${ alignText }
`;
export const Row = styled.div`
    ${ clearfix }
`;
/*:: type fraction = number */
const stretchColumnWidth = props/*: string */=>
    `${ (props.size * 100) - 2 }%`;

export const Col = styled.div`
    float: left;
    width: ${ stretchColumnWidth };
	margin-right: 1%;
	margin-left: 0;
    &:first-of-type {
        clear: left;
		margin-left: 0;
    }
    &:last-of-type {
        clear: right;
		margin-right: 0;
    }
    &:last-of-type:after {
        clear: both;
    }
`;

/*::
type url = string;
type QuoteAttrs = {
    href: url,
    className: string,
    cite: React.Node,
    children?: React.Node,
}
*/
export const Quote = styled(props/*: React.Node */=>
    <blockquote cite={ props.href } className={ props.className }>
        "{ props.children }"
        <small>{ props.cite }</small>
    </blockquote>
)`
    position: relative;
    font-style: italic;
    display: block;
    line-height: 2em;
    font-size: 2em;
    color: ${ colors.darkblack };
    text-align: center;
    margin-top: ${ margin.medium };

    & > small {
        width: 100%;
        text-align: center;
        display: inline-block;
        font-size: .7em;
        color: ${ colors.darkgrey };
        position: relative;
    }
`;
