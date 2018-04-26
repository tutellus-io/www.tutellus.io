//@flow
/* eslint no-magic-numbers: off */
import React from 'react';
import {translate} from 'react-i18next';
import styled from 'styled-components';

import {
    PageSection,
    Text,
    Roadshow,
    ImageCarousel,
} from '../../../components';

const Carousel = styled(ImageCarousel)`
    margin-top: 1.5em;
`;

export const TheRoadshow = translate('roadshow')(({t, id}) =>
    <PageSection darker id={ id } title={ t('title') }>
        <Text center>{ t('description') }</Text>
        <Roadshow events={ JSON.parse(t('events')).map(event => ({
            id: event,
            address: t(`${ event }_address`),
            date: t(`${ event }_date`),
            end_date: t(`${ event }_end_date`),
            description: t(`${ event }_description`),
            place: t(`${ event }_place`),
            title: t(`${ event }_title`),
            url: t(`${ event }_url`),
        })) } />
        <Carousel slidesToShow={ 3 } images={ JSON.parse(t('pics')) } />
    </PageSection>
);
