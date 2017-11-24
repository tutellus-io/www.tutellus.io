//@flow
import * as React from 'react';
import styled from 'styled-components';

import {CenteredImage} from './Images';

import styles from '../styles';
const {margin, colors} = styles;
const {clearfix} = styles.helpers;


export const Features = styled.ul`
    margin-top: 1em;
/*
    ${ clearfix }
	margin-top: 10px;
	margin-bottom: 10px;
	padding: 10px;
    ${ (props) => `
        & > li {
            width: ${ 1 / React.Children.count(props.children) * 100 }%;
        }
    ` }
*/
`;
export const FeatureTitle = styled.h4``;
/*:: type FeatureAttrs = {image: string, title: string, children?: React.Node} */
export const Feature = styled((props/*: FeatureAttrs */) =>
    <li { ...props }>
        <FeatureTitle>{ props.title }</FeatureTitle>
        { props.children }
    </li>
)`
    height: 4em;
    padding-left: 5em;
    & ${ FeatureTitle } {
        margin-left: -3em;
        padding-left: .2em;
        line-height: 1.25em;
        font-weight: 400;
        color: ${ styles.colors.darkblack };
        margin-bottom: .25em;

        &:before {
            content: '';
            background: url(${ props => props.image }) no-repeat;
            display: inline-block;
            width: 3em;
            height: 3em;
            margin-bottom: -1.5em;
            margin-left: -1em;
            margin-right: 1em;
            margin-right: 1em;
        }
    }
/*
    position: relative;
    display: inline-block;
    padding-left: 4.5em;
    text-transform: capitalize;
    font-size: 1.5em;
    /*
    @media ${ styles.media.laptop } {
        font-size: 1em;
    }
    *//*
    & ${ FeatureTitle }:before {
        content: '';
        display: block;
        background: url(${ props => props.image }) no-repeat;
        position: absolute;
        width: 3em;
        height: 3em;
        left: 0.5em;
    }
    */
`;
