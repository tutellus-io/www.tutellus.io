//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    Text,
} from '../../../components';

export const TechnologyStack = translate()(({t}) =>
    <PageSection light title={ t('Technology') }>
        <Text center>{ t('technology_description') }</Text>
    </PageSection>
);
