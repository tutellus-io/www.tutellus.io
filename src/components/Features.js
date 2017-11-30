//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';

import styles from '../styles';

export const Features = styled.ul`
    margin-top: 1em;

    @media ${ styles.media.tablet } {
        display: grid;
        grid-template-columns: repeat(4, 25%);
        font-size: .9em;
        justify-items: start;
    }
    @media ${ styles.media.laptop } {
        font-size: 1.2em;
    }
`;
export const FeatureTitle = styled.h4``;
/*::
type FeatureProps = {|
    title: string,
    children?: React.Node,
    image: string,
|}
*/
export const Feature/*:ComponentType<FeatureProps>*/= styled((props/*:FeatureProps*/) =>
    <li { ...props }>
        <FeatureTitle>{ props.title }</FeatureTitle>
        { props.children }
    </li>
)`
    height: 4em;
    padding-left: 5em;
    text-transform: capitalize;
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
`;
