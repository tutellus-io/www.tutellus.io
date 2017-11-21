//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    SectionImage,
    SectionTitle,
    Text,
    Row,
    Col,
} from '../../../components';

export const ThePain = translate('the_pain')(({t, id}) =>
    <PageSection id={ id }>
        <SectionTitle dangerouslySetInnerHTML={ {__html: t('title')} } />
        <Text center>{ t('description') }</Text>
        <SectionImage src="/images/thepain.svg" />
    </PageSection>
);
