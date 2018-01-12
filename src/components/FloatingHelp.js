//@flow
import React from 'react';
/*:: import type {ComponentType} from 'react' */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from '../styles';
import {observer, inject} from 'mobx-react';

/*::
type Props = {|
    className?: string,
    icon: string,
|}
*/
const FloatingHelpComponent = inject('config')(observer((props/*:Props*/) =>
    <a className={ props.className }
        href={ props.config.social_links.telegram }
        target="_blank" />
));

FloatingHelpComponent.propTypes = {
    className: PropTypes.string,
};

export const FloatingHelp = styled(FloatingHelpComponent)`
    position: fixed;
    z-index: 3;
    bottom: 0;
    right: 0;
    cursor: pointer;
    &:before {
        content: '';
        background: url(${ props => props.icon }) center center no-repeat;
        display: block;
        width: 3em;
        height: 3em;
        margin: 1em;
        @media ${ styles.media.tablet } {
            width: 3em;
            height: 3em;
        }
        @media ${ styles.media.desktop } {
            width: 4em;
            height: 4em;
        }
    }
`;
