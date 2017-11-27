//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    SectionTitle,
    Text,
    SectionImage,
} from '../../../components';

export const TheSolution = translate('the_solution')(({t, id}) =>
    <PageSection id={ id } light interstitialImage="/images/tokens.png">
        <SectionTitle dangerouslySetInnerHTML={ {__html: t('title')} } />
        <Text center>{ t('description') }</Text>
        <SectionImage src="/images/thesolution.svg" />
    </PageSection>
);
