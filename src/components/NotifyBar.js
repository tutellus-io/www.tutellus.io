//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {translate} from 'react-i18next';

import {TOP_HEADER_HEIGHT} from './TopHeader';
import styles from '../styles';
import {MenuLink} from './TopHeader';

/*::
type NotificationProps = {|
    open?: bool,
    onClose: void => void,
    theme: {
        foreground?: string,
        background?: string,
    },
    children: React.Node,
|}
*/
const Notification/*:ComponentType<NotificationProps>*/ = styled(props =>
    <div className={ props.className }>
        { props.children }
        { props.onClose && <span onClick={ props.onClose }>&times;</span> }
    </div>
)`
    position: fixed;
    top: ${ TOP_HEADER_HEIGHT.SMALL }px;
    z-index: 100;
    width: 100%;
    background: ${ props => props.theme.background || styles.colors.lightblue };
    color: ${ props => props.theme.foreground || "white" };
    font-size: 1rem;
    text-align: center;
    padding: .5em;
    transition: all .5s linear;
    /* closing transition */
    ${ props => !props.open && `
        margin-left: 105%;
        opacity: 0;
    ` }
    & > a {
        text-decoration: underline;
        &.active{
            color: ${ props => props.theme.foreground || "white" };
        }
    }
    & > span{
        position: absolute;
        right: 1em;
        cursor: pointer;
    }
`;

class Notify extends React.Component/*::<{store: any, t: any}, {open: boolean}>*/ {
    constructor() {
        super();
        this.state = {open: true};
        this.isOpen = this.isOpen.bind(this);
        this.close = this.close.bind(this);
    }
    /*:: isOpen: void => bool */
    isOpen() {
        return this.state.open && this.props.t('limit_on') > Date.now();
    }
    /*:: close: void => void */
    close() {
        this.setState(() => ({open: false}));
    }
    render() {
        const {t} = this.props;

        const theme = {
            background: t('background'),
            foreground: t('foreground'),
        };

        if (!t('enabled')) {
            return null;
        }

        const link_url = t('link_url');

        return (
            <Notification open={ this.isOpen() } onClose={ this.close } theme={ theme }>
                { t('text') }
                &nbsp;&gt;&gt;&nbsp;
                { link_url.startsWith('#')
                    ? <MenuLink to={ link_url.substring(1) }>{ t('link') }</MenuLink>
                    : <a target="_blank" href={ link_url }>{ t('link') }</a> }
            </Notification>
        );
    }
}
Notify.propTypes = {
    store: PropTypes.object,
    t: PropTypes.func,
};

export const NotifyBar = translate('notify')(Notify);
