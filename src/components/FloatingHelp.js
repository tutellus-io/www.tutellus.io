//@flow
import React from 'react';
import styled from 'styled-components';
import {social_links} from '../config';
export const FloatingHelp = styled(props =>
    <a className={ props.className } href={ social_links.telegram } />
)`
/*
    position: fixed;
    z-index: 3;
    bottom: 0;
    right: 0;
    &:before {
        content: '';
        background: url(${ props => props.icon }) center center no-repeat;
        display: block;
        width: 5em;
        height: 5em;
        margin: 1em;
    }
    */
`;
