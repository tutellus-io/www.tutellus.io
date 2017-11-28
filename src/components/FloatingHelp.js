//@flow
import React from 'react';
import styled from 'styled-components';
import {social_links} from '../config';
import styles from '../styles';
export const FloatingHelp = styled(props =>
    <a className={ props.className }
        href={ social_links.telegram }
        target="_blank"
    />
)`
    position: fixed;
    z-index: 3;
    bottom: 0;
    right: 0;
    cursor: pointer;
    &:before {
        content: '';
        background: url(${ props => props.icon }) center center no-repeat;
        display: block;
        width: 3em;
        height: 3em;
        margin: 1em;
        @media ${ styles.media.tablet } {
            width: 3em;
            height: 3em;
        }
        @media ${ styles.media.desktop } {
            width: 4em;
            height: 4em;
        }
    }
`;
