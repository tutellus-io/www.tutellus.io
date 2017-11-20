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
        <FooterBranding logo="/images/color-logo.svg" about={ t('about_tutellus') } socialLinks={ socialLinks } />
        <FooterNav>
            <NavCategory title={ t('company') }>
                <NavLink>Tutellus</NavLink>
                <NavLink>{ t('Platform') }</NavLink>
                <NavLink>{ t('Roadmap') }</NavLink>
                <NavLink>{ t('Terms of Use') }</NavLink>
            </NavCategory>
            <NavCategory title={ t('ICO') }>
                <NavLink>{ t('Whitepaper') }</NavLink>
                <NavLink>{ t('Token Sale') }</NavLink>
                <NavLink>{ t('Wallet') }</NavLink>
                <NavLink>{ t('Blog') }</NavLink>
                <NavLink>{ t('Help') }</NavLink>
            </NavCategory>
            <NavCategory title={ t('CONTACT') }>
                <NavLink href="mailto:ico@tutellus.com">ico@tutellus.com</NavLink>
                <NavLink href="//2tel.us/tutellus-address" target="_blank">c/ Henri Dunant, 15. Madrid 28050.</NavLink>
                <NavLink href="tel://+34910052511">+34 91 00 525 11</NavLink>
            </NavCategory>
        </FooterNav>
    </PageFooter>
);
