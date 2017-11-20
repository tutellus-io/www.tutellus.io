//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    Text,
    CenteredBlock,
    CTAButton,
} from '../../../components';

export const HowItWorks = translate()(({t}) =>
    <PageSection dark title={ t('how_it_works_title') } image="/images/HTTW.png">
        <Text center>{ t('how_it_works') }</Text>
        <CenteredBlock>
            <CTAButton icon="http://placehold.it/20x20" primary>{ t('download_whitepaper') }</CTAButton>
        </CenteredBlock>
    </PageSection>
);
