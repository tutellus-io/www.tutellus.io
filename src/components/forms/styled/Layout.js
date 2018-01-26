//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';

import {colors} from '../../../styles';
import {ErrorField} from '../../index';

export const Hr = styled.div`
    height: 4em;
`;

/*::
type IconProps = {|
    name: string,
    color?: string,
    size?: string,
    margin?: string,
    title?: string,
|}
*/
export const IconElement = (props/*:IconProps*/) =>
    <i title={props.title} className={`material-icons ${ (props/*:any*/).className }`}>
        {props.name}
    </i>;

export const Icon/*:ComponentType<IconProps>*/ = styled(IconElement)`
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;  /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
    ${ props => (props.color ? `color: ${ props.color };` : '') }
    ${ props => (props.size ? `font-size: ${ props.size };` : '') }
    ${ props => (props.margin ? `margin: ${ props.margin };` : '') }
`;


/*::
type BoxTitleProps = {|
    margin?: string,
    children: React.Node,
|}
*/
export const BoxTitle/*:ComponentType<BoxTitleProps>*/ = styled.h3`
    font-weight: bold;
    font-size: 1.1em;
    text-align: center;
    margin-bottom: 0.75em;
    ${ props => (props.margin ? `margin: ${ props.margin };` : '') }
`;

export const BoxInTitle = styled.div`
    font-weight: bold;
    font-size: 1.1em;
    > * {
        display: flex;
        align-items: center;
    }
    margin-bottom: 0.75em;
`;

/*::
type FlexCenterProps = {|
    margin?: string,
    children: React.Node,
|}
*/
export const FlexCenter/*:ComponentType<FlexCenterProps>*/ = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    & ${ ErrorField }{
        width: 100%
    }
    ${ props => (props.margin ? `margin: ${ props.margin };` : '') }
`;

export const ImageGrid = styled.div`
    display: grid;
    grid-column-gap: 0.5em;
    grid-row-gap: 0.5em;
    grid-template-columns: repeat(2, 50%);
    align-items: center;
`;

export const InnerBox = styled.div`
    border: 2px solid ${ colors.bluegrey };
    background-color: ${ colors.grey };
    padding: 1.75em;
`;

/*::
type BoxElementProps = {|
    className: string,
    preTitle?: string,
    title?: string,
    children?: React.Node,
|}
*/
export const BoxElement = (props/*:BoxElementProps*/) =>
    <div className={props.className}>
        {props.preTitle && <BoxTitle>{props.preTitle}</BoxTitle>}
        <InnerBox>
            {props.title && <BoxInTitle>{props.title}</BoxInTitle>}
            {props.children}
        </InnerBox>
    </div>;

export const Box = styled(BoxElement)`
    margin-bottom: 3em;
    & a {
        text-decoration: underline;
    }
`;
