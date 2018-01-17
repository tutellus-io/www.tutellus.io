//@flow
import * as React from 'react';
import {translate} from 'react-i18next';
import {
    TopHeader,
    TOP_HEADER_HEIGHT,
    MainMenu,
    SecondaryMenu,
} from '../../components';
import {withWindowScroll} from '../../hoc';

export const MainHeader = withWindowScroll(translate()(({scroll, i18n, history, socialLinks}) =>
    <TopHeader small={ scroll.y > TOP_HEADER_HEIGHT.SMALL }
        logo="/images/white-logo.svg"
        title="Tutellus.io"
        notify
    >
        <MainMenu />
        <SecondaryMenu onLanguage={ lang => i18n.changeLanguage(lang) }
            socialLinks={ socialLinks }
            locale={ i18n.language }
            history={history}
        />
    </TopHeader>
));
