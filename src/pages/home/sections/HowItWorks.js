//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    Text,
    CenteredBlock,
    CTAButton,
} from '../../../components';

export const HowItWorks = translate('how_it_works')(({t}) =>
    <PageSection dark title={ t('title') } image="/images/HTTW.png">
        <Text center>{ t('description') }</Text>
        <CenteredBlock>
            <CTAButton icon="http://placehold.it/20x20" primary>{ t('download_whitepaper') }</CTAButton>
        </CenteredBlock>
    </PageSection>
);
