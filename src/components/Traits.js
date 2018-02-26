//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';

import {styles} from '../styles';

const grid_centered = `
    display: grid;
    align-items: start;
    justify-items: center;
`;

/*::
type TraitsProps = {|
    children: any,
|}
*/
export const Traits/*: ComponentType<TraitsProps> */= styled.ul`
    font-size: 1em;
    ${ grid_centered }
    grid-column-gap: 3em;
    grid-row-gap: 2em;
    grid-template-columns: 1fr;
    @media ${ styles.media.tablet } {
        grid-template-columns: ${ props => `
            repeat(${ props.columns || React.Children.count(props.children) }, 1fr)
        ` };
    }
`;

export const TraitIcon = styled.img`
    max-width: 70px;
    min-width: 70px;
    margin-bottom: 1.2em;
    border-radius: 50%;
`;

export const TraitImage = TraitIcon.extend`
    max-width: 200px;
    min-width: 200px;
    margin-bottom: 1.2em;
    border-radius: 50%;
`;

/*::
type TraitProps = {|
    className?: string,
    title: string,
    image?: string,
    icon?: string,
    children: any,
|}
*/
export const Trait/*: ComponentType<TraitProps> */= styled(props =>
    <li className={ props.className }>
        { props.icon && <TraitIcon src={ props.icon } alt={ props.title }/> }
        { props.image && <TraitImage src={ props.image } alt={ props.title }/> }
        <h4>{ props.title }</h4>
        <p>{ props.children }</p>
    </li>
)`
    list-style-type: none;
    ${ grid_centered }

    & h4 {
        font-weight: bold;
        font-size: 1.15em;
        line-height: 1.25em;
        margin: 0 0 0.3em 0;
    }

    & p {
        text-align: center;
        line-height: 1.4em;
        margin: 0;
    }
`;
