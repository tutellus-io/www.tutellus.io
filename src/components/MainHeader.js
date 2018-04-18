//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import {translate} from 'react-i18next';
import {withRouter} from 'react-router-dom';

import {
    TopHeader,
    TOP_HEADER_HEIGHT,
    MainMenu,
    SecondaryMenu,
} from './TopHeader';
import {withWindowScroll} from '../hoc';

/*::
type MainHeaderProps = {
    socialLinks: Object,
}
*/
export const MainHeader/*:ComponentType<MainHeaderProps>*/ = withWindowScroll(withRouter(translate()((({scroll, i18n, history, socialLinks}) =>
    <TopHeader small={ scroll.y > TOP_HEADER_HEIGHT.SMALL }
               logo="/images/white-logo.svg"
               title="Tutellus.io">
        { history.location.pathname === '/' && <MainMenu /> }
        <SecondaryMenu onLanguage={ lang => i18n.changeLanguage(lang) }
                       socialLinks={ socialLinks }
                       locale={ i18n.language } />
    </TopHeader>
/*:ComponentType<*>*/))));
