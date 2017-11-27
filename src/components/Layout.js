//@flow
import * as React from 'react';
import R from 'ramda';
import styled from 'styled-components';

import styles from '../styles';

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
    margin-bottom: 1.5em;
    text-align: ${ alignText };
    line-height: 1.5em;
`;

export const Col = styled.div``;

export const Quote = styled(props =>
    <blockquote cite={ props.href } className={ props.className }>
        &quot;{ props.children }&quot;
        <small>{ props.cite }</small>
    </blockquote>
)`
    margin-bottom: 1em;
    font-size: 1.5em;
    line-height: 1.5em;
    color: ${ styles.colors.darkblack };
    font-style: italic;
    text-align: center;
    & > small {
        display: inline-block;
        margin-top: .5em;
        width: 100%;
        font-size: .7em;
        color: ${ styles.colors.darkgrey };
    }
`;
