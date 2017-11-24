//@flow
import * as React from 'react';
import styled from 'styled-components';

import styles from '../styles';
const {margin, padding, border, colors} = styles;

/*:: type FAQAttrs = {className: string, title: string, children: React.Node} */
export const FAQ = styled((props/*: FAQAttrs */) =>
    <details className={ props.className }>
        <summary>{ props.title }</summary>
        <div>{ props.children }</div>
    </details>
)`
/*
    & summary:before {
        content: '';
        display: inline;
        background: url(/images/plus.svg) center center no-repeat;
        padding: 1.25em;
        margin-right: 1em;
    }
    &[open] {
        & summary:before {
            background-image: url(/images/minus.svg);
        }
    }
	border-bottom: solid ${ border.small } ${ colors.softblack };
    line-height: 3em;
    margin-bottom: 1em;
    padding-bottom: 1em;

    & > div {
        margin-top: 1em;
    }
    &:last-of-type {
        border-bottom: none;
    }
*/
`;
