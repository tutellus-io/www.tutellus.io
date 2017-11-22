//@flow
import * as React from 'react';
import styled from 'styled-components';

import {CenteredImage} from './Images';

import styles from '../styles';
const {margin, colors} = styles;
const {clearfix} = styles.helpers;


export const Features = styled.ul`
    ${ clearfix }
	margin-top: 10px;
	margin-bottom: 10px;
	padding: 10px;
    ${ (props/*: {children: React.Node} */) => `
        & > li {
            width: ${ 1 / React.Children.count(props.children) * 100 }%;
            @media ${ styles.media.tablet } {
                width: 50%;
                font-size: 1.25em;
                margin-top: 1em;
            }
        }
    ` }
`;
export const FeatureTitle = styled.h4`
    font-weight: bold;
    font-size: 1.1em;
    line-height: 1.25em;
    color: ${ colors.darkblack };
    margin-bottom: 5px;
`;
/*:: type FeatureAttrs = {image: string, title: string, children?: React.Node} */
export const Feature = styled((props/*: FeatureAttrs */) =>
    <li { ...props }>
        <FeatureTitle>{ props.title }</FeatureTitle>
        { props.children }
    </li>
)`
    position: relative;
    display: inline-block;
    padding-left: 4.5em;
    text-transform: capitalize;
    font-size: 1.5em;
    @media ${ styles.media.laptop } {
        font-size: 1em;
    }
    & ${ FeatureTitle }:before {
        content: '';
        display: block;
        background: url(${ props => props.image }) no-repeat;
        position: absolute;
        width: 3em;
        height: 3em;
        left: 0.5em;
    }
`;
