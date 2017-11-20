//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    Text,
    CenteredBlock,
    SectionImage,
    CTAButton,
} from '../../../components';

export const HowItWorks = translate('how_it_works')(({t}) =>
    <PageSection dark title={ t('title') } >
        <Text center>{ t('description') }</Text>
        <SectionImage src="/images/HTTW.png" />
        <CenteredBlock>
            <CTAButton icon="http://placehold.it/20x20" primary>{ t('download_whitepaper') }</CTAButton>
        </CenteredBlock>
    </PageSection>
);
