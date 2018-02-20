//@flow
import React from 'react';
import R from 'ramda';
import {observer, inject} from 'mobx-react';
import styled from 'styled-components';

import {MainHeader} from './MainHeader';
import {MainFooter} from './MainFooter';
import {NotifyBar} from './NotifyBar';
import {PageSection, SectionTitle} from './PageSection';
import {TOP_HEADER_HEIGHT} from './TopHeader';
import styles from '../styles';

const MAX_SOCIAL_LINKS_IN_HEADER = 3;
const pickMostRelevant = social_links =>
    R.pick(R.take(MAX_SOCIAL_LINKS_IN_HEADER, R.keys(social_links)), social_links);

export const Landing = inject('config')(observer(styled(({className, config, children}) =>
    <div className={ className }>
        <MainHeader socialLinks={ pickMostRelevant(config.social_links) } />
        <NotifyBar />
        <main>{ children }</main> <MainFooter socialLinks={ config.social_links } />
    </div>
)`
    & ${ PageSection }:first-child {
        margin-top: ${ TOP_HEADER_HEIGHT.SMALL }px;
        padding: 3em;
        & ${ SectionTitle } {
            color: ${ styles.colors.white };
            margin-bottom: 2em;
        }
        @media ${ styles.media.tablet } {
            margin-top: 0;
            padding-top: calc(${ TOP_HEADER_HEIGHT.BIG }px + 3em);
        }
        @media ${ styles.media.desktop } {
            padding: 10em;
        }
    }
`));
