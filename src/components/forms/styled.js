//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import Color from 'color';
import styled from 'styled-components';
import {colors} from '../../styles';
import {Link} from 'react-router-dom';
import {ErrorField} from '../index';

export const Input = styled.input`
    display: block;
    padding: 0.6em 0.9em;
    width: 100%;
    border: 1px solid ${ colors.bluegrey };
    border-radius: 3px;
    background-color: ${ colors.white };
    font-weight: 200;
    font-size: 1em;
    &[disabled] {
        background-color: ${ colors.grey };
    }
`;

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
type LabelProps = {
    inline?: bool,
}
*/
export const Label/*:ComponentType<LabelProps>*/ = styled.label`
    margin-bottom: ;
    display: ${ props => (props.inline ? 'inline' : 'block') };
    font-weight: bold;
    font-size: 1em;
    margin: 0.5em 0
`;

/*:: type FieldProps = {no_margin: bool} */
export const Field = styled.div`
    margin-bottom: ${ (props/*:FieldProps*/) => (props.no_margin ? '' : '1.5em') };
    &.error {
        input,
        textarea {
            border-color: ${ colors.googleplus };
        }

        > .error_placeholder {
            margin-top: 0.5em;
            color: ${ colors.googleplus };
        }
    }
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

/*::
type ButtonProps = {|
    full?: bool,
    type?: string,
    primary?: bool,
    disabled?: bool,
    children: React.Node,
    onClick?: (void => void),
|}
*/
export const Button/*:ComponentType<ButtonProps>*/ = styled.button`
    color: ${ colors.white };
    display: block;
    border: none;
    padding: 0.8em 1.2em;
    border-radius: 3px;
    font-size: 1.1em;
    cursor: pointer;
    letter-spacing: .035em;
    text-align: center;
    background-color: ${ props=> (props.primary
        ? colors.lightblue
        : colors.midgrey)
};
    ${ props => (props.full ? 'width: 100%' : '') };
    transition: all 0.3s ease-in;
    text-align: center;
    text-transform: uppercase;
    &:hover {
        background-color: ${ props=> (props.primary
        ? Color(colors.lightblue)
        .darken(colors.settings.hover_gap).string()
        : Color(colors.midgrey).darken(colors.settings.hover_gap).string())
};

    }
`;

export const LinkButton = (Button/*:any*/).withComponent(Link);
export const AButton = (Button/*:any*/).withComponent('a');
