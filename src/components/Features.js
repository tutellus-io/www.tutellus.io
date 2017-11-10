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
        }
    ` }
`;
export const FeatureTitle = styled.h4`
    font-weight: bold;
    font-size: 1.143em;
    line-height: 1.251rem;
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
    & ${FeatureTitle}:before {
        content: '';
        display: block;
        background: url(${ props => props.image }) no-repeat;
        position: absolute;
        width: 3em;
        height: 3em;
        left: 0.5em;
    }
`;
