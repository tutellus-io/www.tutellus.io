//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    Text,
    SectionImage,
} from '../../../components';
import {CrowdsaleCTA} from './Crowdsale';

export const HowItWorks = translate('how_it_works')(({t, id}) =>
    <PageSection id={ id } dark title={ t('title') } >
        <Text center>{ t('description') }</Text>
        <SectionImage src="/images/howitworks.svg" />
        <CrowdsaleCTA href={ t("whitepaper_url") }>{ t('download_whitepaper') }</CrowdsaleCTA>
    </PageSection>
);
