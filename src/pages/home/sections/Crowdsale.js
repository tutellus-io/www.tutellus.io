//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    Text,
    Row,
    Col,
    CenteredImage,
    CrowdsaleTable,
    CenteredBlock,
    CTAButton,
} from '../../../components';

export const Crowdsale = translate('crowdsale')(({t}) =>
    <PageSection dark title={ t('title') }>
        <Text center>{ t('description') }</Text>
        <Row>
            <Col size={ 1 / 2 }>
                <CenteredImage src="https://placehold.it/800x600" />
            </Col>
            <Col size={ 1 / 2 }>
                <CenteredImage src="https://placehold.it/800x600" />
            </Col>
        </Row>
        <CrowdsaleTable>
            <tbody>
                <tr>
                    <td>{ t('token_name') }</td><td>TUT</td>
                </tr>
                <tr>
                    <td>{ t('preico_date') }</td><td>{ t('preico_date_value') }</td>
                </tr>
                <tr>
                    <td>{ t('ico_date') }</td><td>{ t('ico_date_value') }</td>
                </tr>
                <tr>
                    <td>{ t('total_supply') }</td><td>{ t('total_supply_value') }</td>
                </tr>
                <tr>
                    <td>{ t('amount_for_sale') }</td><td>{ t('amount_for_sale_value') }</td>
                </tr>
                <tr>
                    <td>{ t('soft_cap') }</td><td>{ t('soft_cap_value') }</td>
                </tr>
                <tr>
                    <td>{ t('accepted_currencies') }</td><td>ETH</td>
                </tr>
            </tbody>
        </CrowdsaleTable>
        <CenteredBlock>
            <CTAButton secondary>{ t('register_for_the_crowdsale') }</CTAButton>
        </CenteredBlock>
    </PageSection>
);
