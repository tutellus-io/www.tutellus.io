//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';
import {observer, inject} from 'mobx-react';
import {get} from 'lodash';
import {withRouter} from 'react-router-dom';

import {SocialIcons} from '../Footer';
import {
    LinkButton,
    Button,
} from '../';
import styles from '../../styles';

const SelectedLocale = styled.div`
    position: relative;
    font-size: 0.8em;
    font-weight: 400;
    padding-right: 1.5em;
    cursor: pointer;
    &:after {
        content: "";
        display: inline-block;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-4px);
        height: 0;
        width: 0;
        border: 7px solid transparent;
        border-top: 8px solid #FFF;
    }
`;
SelectedLocale.displayName = 'SelectedLocale';

const ListLocales = styled(({className, locales, selected, onLanguage}) => <ul className={ className }>
        {
            locales && locales.map((locale, index) => (
                    <li className={ selected === locale ? 'active' : '' }
                        key={index}
                    >
                        <a href="#" onClick={ () => onLanguage(locale.toLowerCase()) }>
                            { locale }
                        </a>
                    </li>
                )
            )
        }
    </ul>)`
    position: absolute;
    padding: 0.25em 0;
    font-size: 0.9em;
    font-weight: 400;
    top: calc(100% + 10px);
    left: -0.5em;
    color: black;
    background-color: white;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
    transition: all .2s ease-in-out;
    & li {
        padding: 0.25em 0.8em;
        &.active{
            color: ${ styles.colors.lightblue };
        }
    }
    display: none;
    &.open {
        display: block;
    }

`;
ListLocales.displayName = 'ListLocales';
/*::
type LangSelectProps = {|
    className?: string,
    onLanguage: (string => void),
    locale: string,
    store: any,
|}
type LangSelectState = {|
    open: bool,
|}
*/
const LangSelect = styled(inject('store')(observer(class extends React.Component/*::<LangSelectProps, LangSelectState>*/ {
    constructor() {
        super();
        this.state = {
            open: false,
        };
    }

    toggleOpen = () => {
        this.setState({
            open: !this.state.open,
        });
    }

    render() {
        const {
            className,
            onLanguage,
            locale,
            store,
        } = this.props;

        const selectLanguage = lang => {
            this.toggleOpen();
            onLanguage(lang);
        };

        let selected_locale = locale.toUpperCase();

        if (selected_locale.indexOf('-') !== -1) {
            selected_locale = selected_locale.split("-")[0];
        }

        return (
            <div className={ className }>
                <SelectedLocale onClick={ this.toggleOpen }>
                    { selected_locale }
                </SelectedLocale>
                <ListLocales className={ `${ this.state.open ? 'open' : '' }` }
                             locales={ store.config.locales}
                             onLanguage={ selectLanguage }
                             selected={ selected_locale } />
            </div>
        );
    }
})))`
    position: relative;
`;

const isHome = url => url === '/';
const LoginButton = withRouter(inject('store')(observer(({history, store: {logged, logout}}) => (
    isHome(get(history, 'location.pathname'))
        ? <LinkButton to="/dashboard/home">
              { logged ? 'Dashboard' : 'Whitelist' }
          </LinkButton>
        : logged && <Button onClick={ logout }>Logout</Button>
))));
/*::
type SecondaryMenuProps = {|
    className?: string,
    socialLinks?: Object,
    onLanguage: (string => void),
    locale: string,
|}
*/
export const SecondaryMenu/*:ComponentType<SecondaryMenuProps>*/ = styled(props =>
    <nav className={ props.className }>
        <LangSelect onLanguage={ props.onLanguage } locale={ props.locale } />
        { props.socialLinks && <SocialIcons networks={ props.socialLinks } /> }
        <LoginButton />
    </nav>
)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 0.5em;
    align-items: center;
    justify-items: center;
    justify-self: end;
    
    & > * {
        margin-top: 0.8em;
    }

    & > ${ LinkButton }, & > ${ Button }  {
        padding: 1em 1.25em;
        font-weight: 400;
        background: ${ styles.colors.lightblue };
        color: white;
        font-size: 1em;
        &:hover {
            color: black;
            transition: all .2s linear;
        }
    }

    & ${ SocialIcons } {
        margin-top: 0.6em;
    }

    & > ${ LangSelect } {
        margin-top: 0.6em;
        color: white;
    }

    @media ${ styles.media.tablet } {
        & > ${ LangSelect } {
            justify-self: end;
        }
        grid-template-columns: 1fr 1fr;
        & ${ SocialIcons } {
            display: none;
        }
        & > ${ LinkButton }, & > ${ Button }  {
            font-size: .7em;
        }
    }
    @media ${ styles.media.laptop } {
        grid-template-columns: 1fr 2fr 1.5fr;
        & ${ SocialIcons } {
            display: inline-block;
        }
    }
`;
SecondaryMenu.displayName = 'SecondaryMenu';
