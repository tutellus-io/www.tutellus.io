//@flow
import React from 'react';
/*:: import type {ComponentType} from 'react' */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from '../styles';

/*::
type Props = {|
    className?: string,
    icon: string,
|}
*/
const FloatingHelpComponent = (props/*:Props*/, context) =>
    <a className={ props.className }
        href={ context.social_links.telegram }
        target="_blank" />;

FloatingHelpComponent.propTypes = {
    className: PropTypes.string,
};
FloatingHelpComponent.contextTypes = {
    social_links: PropTypes.any,
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
