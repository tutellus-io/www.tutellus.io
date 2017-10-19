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
	text-align: center;
    ${ (props/*: {children: React.Node} */) => `
        & > li {
            display: inline-block;
            text-align: center;
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
export const Feature = (props/*: FeatureAttrs */) =>
    <li { ...props }>
        <CenteredImage src={ props.image } style={ {marginBottom: `${ margin.small }`} } />
        <FeatureTitle>{ props.title }</FeatureTitle>
        { props.children }
    </li>;
