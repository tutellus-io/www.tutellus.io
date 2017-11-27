//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageFooter,
    FooterBranding,
    FooterNav,
    NavCategory,
    NavLink,
} from '../../components';

export const MainFooter = translate()(({t, socialLinks}) =>
    <PageFooter>
        <FooterBranding logo="/images/color-logo.svg"
            about={ t('about_tutellus') }
            socialLinks={ socialLinks }
        />
        <FooterNav>
            <NavCategory title={ t('About') }>
                <NavLink href={ t('help_url') }>{ t('Help') }</NavLink>
                <NavLink href={ socialLinks.medium }>{ t('Blog') }</NavLink>
                <NavLink href="//www.tutellus.com">Tutellus</NavLink>
                <NavLink href={ t('tos_url') }>{ t('terms_of_sale') }</NavLink>
            </NavCategory>
            <NavCategory title={ t('Contact') }>
                <NavLink href="mailto:ico@tutellus.com">
                    ico@tutellus.io
                </NavLink>
                <NavLink href="//2tel.us/tutellus-address" target="_blank">
                    c/ Henri Dunant, 15. Madrid 28036 Spain
                </NavLink>
                <NavLink href="tel://+34910052511">+34 91 00 525 11</NavLink>
            </NavCategory>
        </FooterNav>
    </PageFooter>
);
