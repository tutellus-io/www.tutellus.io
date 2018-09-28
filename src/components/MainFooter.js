//@flow
import React from 'react';
import {translate} from 'react-i18next';
import styled from 'styled-components';
import {
    FooterBranding,
    NavCategory,
    NavLink,
    SocialIcons,
} from './Footer';

import {
    SectionContent,
} from './PageSection';

export const MainFooter = styled(translate('footer')(({t, className, socialLinks}) =>
    <footer className={ className }>
        <SectionContent >
            <FooterBranding logo="/images/color-logo.svg"/>
            <NavCategory>
                <NavLink href={ t('help_url') } target="_blank">{ t('help') }</NavLink>
                <NavLink href={ socialLinks.medium } target="_blank">{ t('blog') }</NavLink>
                <NavLink href="/ambassadors">{ t('ambassadors') }</NavLink>
                <NavLink href="//www.tutellus.com" target="_blank">Tutellus</NavLink>
                <NavLink href={ t('tos_url') } target="_blank">{ t('terms_of_sale') }</NavLink>
                <NavLink href={ `mailto:${ t('contact_email') }` }>{ `${ t('contact_title') }: ${ t('contact_email') }` }</NavLink>
            </NavCategory>
            <SocialIcons networks={ socialLinks } />
        </SectionContent>
    </footer>
))`
    & > ${ SectionContent } {
        padding: 1em 1em 3em;
        display: grid;
        grid-gap: 1.5em;
        justify-items: center;
    }
`;
MainFooter.displayName = 'MainFooter';
