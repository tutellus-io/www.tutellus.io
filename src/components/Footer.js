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
    margin-bottom: 1em;
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
    color: ${ styles.colors.athens };
    margin: 0 .25em;
    &:hover {
        color: ${ styles.colors.midgrey };
        transition: color .2s linear;
    }
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
    & > ${ SocialIcon } > a {
        font-size: 1.5em;
        letter-spacing: 8px;
    }
`;
//TODO: media queries
export const FooterBranding = styled(props =>
    <div className={ props.className }>
        <img src={ props.logo } />
        <small>{ props.about }</small>
        <SocialIcons networks={ props.socialLinks } />
    </div>
)`
    & img {
        display: block;
        margin-bottom: 1em;
        width: 10em;
    }
    & small {
        display: block;
        font-size: .8em;
        max-width: 15em;
        font-style: italic;
        margin-bottom: 1em;
    }
`;
export const FooterNav = styled.nav`
    display: grid;
    grid-template-columns: repeat(2, 50%);
`;
export const PageFooter = styled.footer`
    display: grid;
    grid-template-columns: [logo] 50% [sitemap] 50%;
    padding: 30px 50px;
`;
