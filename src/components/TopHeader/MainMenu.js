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

export const MainMenu = styled(translate()(({t, className}) =>
    <nav className={ className }>
        <ul>
            <li><MenuLink to="documents">{ t('documents:title') }</MenuLink></li>
            <li><MenuLink to="platform">{ t('Platform') }</MenuLink></li>
            <li><MenuLink to="team">{ t('the_team:title') }</MenuLink></li>
            <li><MenuLink to="crowdsale">{ t('crowdsale:title') }</MenuLink></li>
        </ul>
    </nav>
))`
    display: block;
    margin-left: .5em;

    & li {
        display: inline-block;
        font-size: .5em;
        font-weight: normal;
        padding: 0 .5em;
        text-transform: uppercase;
        & ${ MenuLink } {
            display: block;
            margin-top: -1.5em;
        }
    }
    @media ${ styles.media.laptop } {
        font-size: 1.25em;
        & li {
            padding: 0 1em;
        }
    }
`;
