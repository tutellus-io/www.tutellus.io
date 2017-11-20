//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    Text,
} from '../../../components';

export const TechnologyStack = translate('technology_stack')(({t}) =>
    <PageSection light title={ t('title') }>
        <Text center>{ t('description') }</Text>
    </PageSection>
);
