//@flow
import React from 'react';
import {translate} from 'react-i18next';
import styled from 'styled-components';
import {
    PageSection,
    Text,
    ImageCarousel,
} from '../../../components';

export const OurOffice = translate('our_offices')(styled(({className, t}) =>
    <PageSection className={className} light
        title={ t('title') }>
        <Text center>{ t('description') }</Text>
        <ImageCarousel slidesToShow={ 2 } images={ JSON.parse(t('pics')) } />
    </PageSection>
)``);
OurOffice.displayName = 'OurOffice';
