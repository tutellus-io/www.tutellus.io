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

export const ThePain = translate('the_pain')(({t}) =>
    <PageSection>
        <SectionTitle dangerouslySetInnerHTML={ {__html: t('title')} } />
        <Text center>{ t('description') }</Text>
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
