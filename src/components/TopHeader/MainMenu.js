//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import SmoothScroll from 'react-scroll';
import styled from 'styled-components';
import {translate} from 'react-i18next';

import {TOP_HEADER_HEIGHT} from './styles';
import styles from '../../styles';

/*::
type LinkProps = {|
    to: string,
    children?: React.Node,
|}
*/
const MenuLink/*:ComponentType<LinkProps>*/ = styled((props/*:LinkProps*/) =>
    <SmoothScroll.Link { ...props }
        spy={ true }
        smooth={ true }
        activeClass="active"
        offset={ -TOP_HEADER_HEIGHT.SMALL }>
        { props.children }
    </SmoothScroll.Link>
)`
    cursor: pointer;
    transition: color .2s linear;
    &:hover {
        color: ${ styles.colors.midgrey };
    }
    &.active {
        color: ${ styles.colors.lightblue };
    }
`;
MenuLink.displayName = 'MenuLink';

export const Menu = styled(({className, children}) =>
    <nav>
        <ul className={ className }>
            { children }
        </ul>
    </nav>
)`
    display: block;

    & > * {
        display: inline-block;
    }

    @media ${ styles.media.tablet } {
        margin-top: 0.8em;
    }
`;
Menu.displayName = 'Menu';

export const MainMenu = styled(translate('menu')(({t, className}) =>
    <Menu className={ className }>
        <li><MenuLink to="platform">{ t('solution') }</MenuLink></li>
        <li><MenuLink to="team">{ t('the_team:title') }</MenuLink></li>
        <li><MenuLink to="roadshow">{ t('roadshow') }</MenuLink></li>
        <li><MenuLink to="crowdsale">{ t('crowdsale:title') }</MenuLink></li>
        <li><MenuLink to="documents">{ t('documents:title') }</MenuLink></li>
    </Menu>
))`
    font-size: 1em;

    & li {
        font-weight: normal;
        text-transform: uppercase;
        & ${ MenuLink } {
            display: block;
        }
    }
    
    @media ${ styles.media.tablet } {
        font-size: 0.6em;
        & li {
            padding: 0 .5em;
        }
    }

    @media ${ styles.media.laptop } {
        font-size: 0.7em;
        & li {
            padding: 0 .75em;
        }
    }
`;
MainMenu.displayName = 'MainMenu';
