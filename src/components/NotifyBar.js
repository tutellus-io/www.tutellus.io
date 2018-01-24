//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {inject, observer} from 'mobx-react';
import {translate} from 'react-i18next';

import {TOP_HEADER_HEIGHT} from './TopHeader';
import {withWindowScroll} from '../hoc';
import styles from '../styles';

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
const Notification/*:ComponentType<NotificationProps>*/ = withWindowScroll(styled(props =>
    <div className={ props.className }>
        { props.children }
        <span onClick={ props.onClose }>&times;</span>
    </div>
)`
    position: fixed;
    top: ${ props => (
        props.scroll.y > TOP_HEADER_HEIGHT.SMALL ? `${ TOP_HEADER_HEIGHT.SMALL }px`
                                                 : 0
    ) };
    z-index: 999;
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
    }
    & > span{
        position: absolute;
        right: 1em;
        cursor: pointer;
    }
`);

class Notify extends React.Component/*::<{store: any, t: any}, {open: boolean}>*/ {
    constructor() {
        super();
        this.state = {open: true};
        this.isOpen = this.isOpen.bind(this);
        this.close = this.close.bind(this);
    }
    /*:: isOpen: void => bool */
    isOpen() {
        return this.state.open && this.props.store.logged;
    }
    /*:: close: void => void */
    close() {
        this.setState(() => ({open: false}));
    }
    render() {
        const {t} = this.props;
        const notifybar = this.props.store.config.notifybar;
        if (!notifybar.enabled) {
            return null;
        }
        return (
            <Notification open={ this.isOpen() } onClose={ this.close } theme={ notifybar.theme }>
                { t('notifybar') }&nbsp;&gt;&gt;&nbsp;
                <a target="_blank" href={ t('notifybar_link_url') }>{ t('notifybar_link') }</a>
            </Notification>
        );
    }
}
Notify.propTypes = {
    store: PropTypes.object,
    t: PropTypes.func,
};

export const NotifyBar = translate()(inject('store')(observer(Notify)));
