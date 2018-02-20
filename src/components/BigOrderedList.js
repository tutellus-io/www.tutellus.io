//@flow
import React from 'react';
import styled from 'styled-components';

import {styles} from '../styles';

export const BigOrderedList = styled.ol`
    display: grid;
    padding: 2em 0;
    grid-auto-flow: dense;
    grid-gap: 2em 2em;
    & > li {
        display: grid;
        grid-template-columns: 50px 1fr;
        grid-column-gap: 1.5em;
        font-size: 0.889em;
        line-height: 1.3em;
        &:before {
            content: attr(number);
            font-size: 2em;
            color: ${ styles.colors.lightblue };
            border: solid 1px ${ styles.colors.lightblue };
            padding: .3em .25em 1em .25em;
            align-self: center;
            justify-self: center;
        }
    }
    @media ${ styles.media.tablet } {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2em 3em;
        & > li {
            &:nth-child(-n + ${ props =>
                React.Children.count(props.children) / 2
            }) {
                grid-column-start: 1;
            }
        }
    }
    @media ${ styles.media.desktop } {
        grid-gap: 2em 5em;
    }
`;

