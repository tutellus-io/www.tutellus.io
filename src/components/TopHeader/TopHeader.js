//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';

import {HeaderLogo} from './HeaderLogo';
import {MainMenu} from './MainMenu';
import {SecondaryMenu} from './SecondaryMenu';
import {TOP_HEADER_HEIGHT} from './styles';
import styles from '../../styles';

const small_header_styles = `
    height: ${ TOP_HEADER_HEIGHT.SMALL }px;
    background: black;
    transition: all .5s linear;
`;

/*::
type TopHeaderProps = {|
    className?: string,
    logo: string,
    title: string,
    small?: bool,
    children?: React.Node,
    notify?: bool,
|}
*/
export const TopHeader/*:ComponentType<TopHeaderProps>*/ = styled((props/*:TopHeaderProps*/) =>
    <header className={ props.className }>
        <HeaderLogo logo={ props.logo } title={ props.title } />
        { props.children }
    </header>
)`
    position: fixed;
    top: 0;
    z-index: 3;
    width: 100%;
    padding: 0 1em;
    font-size: 125%;
    color: white;
    ${ small_header_styles }
    display: grid;
    grid: "logo secondary-menu"
          / 30%            70%;
    align-items: center;
    justify-items: justify;
    transition: all .5s linear;

    & > ${ HeaderLogo } {
        grid-area: logo;
    }
    & > ${ MainMenu } {
        display: none;
        grid-area: main-menu;
    }
    & > ${ SecondaryMenu } {
        grid-area: secondary-menu;
    }

    @media ${ styles.media.tablet } {
        height: ${ TOP_HEADER_HEIGHT.BIG }px;
        background: linear-gradient(black, transparent);
        grid: "logo main-menu secondary-menu"
              / 10%       50%            40%;
        & > ${ MainMenu } {
            display: block;
        }

        ${ props => props.small && small_header_styles }

    }
    @media ${ styles.media.laptop } {
        padding: 0 2em;
    }
`;
