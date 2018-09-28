//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    Text,
    SectionImage,
} from '../../../components';

export const HowItWorks = translate('how_it_works')(({t, id}) =>
    <PageSection id={ id } darker title={ t('title') } >
        <Text center>{ t('description') }</Text>
        <SectionImage src={ t('image_url') } style={ {marginBottom: 0} } />
    </PageSection>
);
