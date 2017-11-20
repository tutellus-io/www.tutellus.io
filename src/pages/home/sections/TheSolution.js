//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    SectionTitle,
    Text,
} from '../../../components';

export const TheSolution = translate()(({t}) =>
    <PageSection light interstitialImage="/images/tokens.png">
        <SectionTitle dangerouslySetInnerHTML={{ __html: t('the_solution_title') }} />
        <Text center>{ t('the_solution') }</Text>
    </PageSection>
);
