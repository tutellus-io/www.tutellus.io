//@flow
import React from 'react';
import styled from 'styled-components';
import 'socicon/css/socicon.css';
import styles from '../styles';

export const NavLink = styled.a`
    line-height: 1.5em;
`;
export const NavCategoryTitle = styled.h3`
    font-weight: bold;
    text-transform: uppercase;
    margin: 1em 0;
`;
export const NavCategory = styled(props =>
    <div className={ props.className }>
        <NavCategoryTitle>{ props.title }</NavCategoryTitle>
        <ul>
        {
            React.Children.map(props.children, navlink =>
                <li>{ navlink }</li>
            )
        }
        </ul>
    </div>
)`
`;
export const SocialIcon = styled.li`
    display: inline;
    margin: 0 .25em;
/*
    color: ${ styles.colors.athens };
    &:hover {
        color: ${ styles.colors.midgrey };
        transition: color .2s linear;
    }
*/
`;
export const SocialIcons = styled(props =>
    <ul className={ props.className }>
    {
        Object.entries(props.networks).map(([network, link]) =>
            <SocialIcon key={ network }><a className={ `socicon-${ network }` } href={ link }></a></SocialIcon>
        )
    }
    </ul>
)`

/*
    & > ${ SocialIcon } > a {
        font-size: 1.5em;
        letter-spacing: 8px;
    }
*/
`;
export const FooterBranding = styled(props =>
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
`;
export const FooterNav = styled.nav`
/*
    display: grid;
    grid-template-columns: repeat(2, 50%);
*/
`;
export const PageFooter = styled.footer`
    padding: 1em;
/*
    display: grid;
    grid-template-columns: [logo] 50% [sitemap] 50%;
    padding: 30px 50px;
*/
`;
