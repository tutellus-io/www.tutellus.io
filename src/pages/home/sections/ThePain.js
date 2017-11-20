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

export const ThePain = translate()(({t}) =>
    <PageSection>
        <SectionTitle dangerouslySetInnerHTML={ {__html: t('the_pain_title')} } />
        <Text center>{ t('the_pain') }</Text>
        <Row>
            <Col size={ 1 / 2}>
                <SectionImage src="/images/edtech.svg" />
            </Col>
            <Col size={ 1 / 2}>
                <SectionImage src="/images/itjobs.svg" />
            </Col>
        </Row>
    </PageSection>
);
