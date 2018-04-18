//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';

import styles from '../styles';

export const ProductFeatures = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 1em;
    font-size: 0.9em;
    margin-left: 1em;

    @media ${ styles.media.tablet } {
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 1em;
        margin-left: 0em;
        justify-items: start;
    }
    @media ${ styles.media.laptop } {
        font-size: 1em;
    }
`;
ProductFeatures.displayName = 'ProductFeatures';

const FeatureTitle = styled.h4``;
FeatureTitle.displayName = 'FeatureTitle';
/*::
type Props = {|
    title: string,
    children?: React.Node,
    image: string,
|}
*/
export const ProductFeature/*:ComponentType<Props>*/= styled((props/*:Props*/) =>
    <li { ...props }>
        <FeatureTitle>{ props.title }</FeatureTitle>
        { props.children }
    </li>
)`
    height: 3.3em;
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
            width: 3.3em;
            height: 3.3em;
            margin-bottom: -1.9em;
            margin-left: -1.4em;
            margin-right: 1em;
            margin-right: 1em;
        }
    }
`;
ProductFeature.displayName = 'ProductFeature';
