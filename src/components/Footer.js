//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';
import R from 'ramda';
import {NavLink as RouteNavLink} from 'react-router-dom';

import styles from '../styles';

export const NavLink = styled(props => {
    if (props.href.startsWith("http") || props.href.startsWith("mailto")) {
        return <a { ...props } />;
    }
    return <RouteNavLink { ...R.omit(['href'], props) } to={ props.href } />;
})`
    line-height: 1.4em;
    font-size: 0.9em;
    &:hover {
        color: ${ styles.colors.lightblue };
        transition: color .2s linear;
    }
`;

export const NavCategoryTitle = styled.h3`
    font-weight: bold;
    text-transform: uppercase;
    margin: 1em 0;
`;
/*::
type NavCategoryProps = {|
    className?: string,
    children?: React.Node,
|}
*/
export const NavCategory/*:ComponentType<NavCategoryProps>*/ = styled((props/*:NavCategoryProps*/) =>
    <ul className={ props.className }>{
        React.Children.map(props.children, navlink =>
            <li>{ navlink }</li>
        )
    }</ul>
)`
    justify-self: start;
    @media ${ styles.media.tablet } {
        justify-self: center;
    }

    & > * {
        font-size: 0.95em;

        @media ${ styles.media.tablet } {
            font-size: 1em;
            display: inline-block;
            padding: 0 0.5em;
            border-left: 1px solid black;

            &:first-of-type {
                border-left: none;
            }
        }

    }
`;

export const SocialIcon = styled.li`
    display: inline;
    margin: 0 .25em;
`;

/*::
type SocialIconsProps = {|
    className?: string,
    networks: void,
|}
*/
export const SocialIcons = styled((props/*:SocialIconsProps*/) =>
    <ul className={ props.className }>
        {
            Object.entries(props.networks).map(([network, link]) =>
                <SocialIcon key={ network }>
                    <a className={ `icon-${ network }` }
                        href={ link }
                        target="_blank"
                    />
                </SocialIcon>
            )
        }
    </ul>
)`
    font-size: 1.2em;

    footer & {
        display: grid;
        grid-auto-flow: column;
        grid-gap: 0.7em;
        justify-items: center;
        align-items: start;
        & ${ SocialIcon } {
            margin: 0;
        }
    }
`;

/*::
type FooterBrandingProps = {|
    className?: string,
    logo: string,
    about: string,
|}
*/
export const FooterBranding/*:ComponentType<FooterBrandingProps>*/ = styled((props/*:FooterBrandingProps*/) =>
    <div className={ props.className }>
        <img src={ props.logo } alt="Tutellus.io"/>
        <small>{ props.about }</small>
    </div>
)`
    text-align: center;

    & img {
        display: block;
        margin: 1em auto;
        width: 10em;
    }
    & small {
        display: block;
        font-size: .8em;
        line-height: 1.3em;
        font-style: italic;
        margin: 0 auto;
    }
`;
