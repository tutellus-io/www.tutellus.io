//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    SectionTitle,
    Text,
} from '../../../components';

export const TheSolution = translate('the_solution')(({t}) =>
    <PageSection light interstitialImage="/images/tokens.png">
        <SectionTitle dangerouslySetInnerHTML={{ __html: t('title') }} />
        <Text center>{ t('description') }</Text>
    </PageSection>
);
