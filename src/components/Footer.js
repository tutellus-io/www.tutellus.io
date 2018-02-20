//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';
import {omit} from 'lodash';
import {NavLink as RouteNavLink} from 'react-router-dom';

import styles from '../styles';

export const NavLink = styled(props => {
    if (props.href.startsWith("http")) {
        return <a { ...props } />;
    }
    return <RouteNavLink { ...omit(props, ['href']) } to={ props.href } />;
})`
    line-height: 1.5em;
`;

export const NavCategoryTitle = styled.h3`
    font-weight: bold;
    text-transform: uppercase;
    margin: 1em 0;
`;
/*::
type NavCategoryProps = {|
    className?: string,
    title: string,
    children?: React.Node,
|}
*/
export const NavCategory/*:ComponentType<NavCategoryProps>*/ = styled((props/*:NavCategoryProps*/) =>
    <div className={ props.className }>
        <NavCategoryTitle>{ props.title }</NavCategoryTitle>
        <ul>{
            React.Children.map(props.children, navlink =>
                <li>{ navlink }</li>
            )
        }</ul>
    </div>
)`
`;
export const SocialIcon = styled.li`
    display: inline;
    margin: 0 .25em;
    &:hover {
        color: ${ styles.colors.midgrey };
        transition: color .2s linear;
    }
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
)``;

/*::
type FooterBrandingProps = {|
    className?: string,
    logo: string,
    about: string,
    socialLinks: void,
|}
*/
export const FooterBranding/*:ComponentType<FooterBrandingProps>*/ = styled((props/*:FooterBrandingProps*/) =>
    <div className={ props.className }>
        <img src={ props.logo } />
        <small>{ props.about }</small>
        <SocialIcons networks={ props.socialLinks } />
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
        max-width: 15em;
        font-style: italic;
        margin: 0 auto;
        margin-bottom: 1em;
    }
    & ${ SocialIcons } {
        font-size: 120%;
    }
    @media ${ styles.media.laptop } {
        text-align: left;
        & img {
            margin-left: 0;
        }
        & small {
            margin-left: 0;
        }
    }
`;
export const FooterNav = styled.nav`
    @media ${ styles.media.tablet } {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;
export const PageFooter = styled.footer`
    padding: 1em;
    @media ${ styles.media.laptop } {
        display: grid;
        grid: "logo nav" / 1fr 1fr;
        padding: 2em 2em 4em;
    }
`;
