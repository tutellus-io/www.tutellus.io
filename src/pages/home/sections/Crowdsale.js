//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    Text,
    CrowdsalePurpose,
    DistributionTable,
    CrowdsaleSummary,
    CenteredBlock,
    CTAButton,
} from '../../../components';
import styled from 'styled-components';

export const Crowdsale = translate('crowdsale')(({t}) =>
    <PageSection dark title={ t('title') }>
        <Text center>{ t('description') }</Text>
        <CrowdsalePurpose>
            <DistributionTable title={ t('funds_allocation') } stats={ [
                {value: .4, label: t('product_engineering')},
                {value: .2, label: t('sales_marketing')},
                {value: .2, label: t('publicity_pr')},
                {value: .1, label: t('operations')},
                {value: .1, label: t('security_loyalty_reserves')},
            ] } graph="/images/funds_allocation.svg" />
            <DistributionTable title={ t('token_distribution') } stats={ [
                {value: .6, label: t('crowdsale')},
                {value: .2, label: t('pool')},
                {value: .1, label: t('team')},
                {value: .1, label: t('bounty_advisors')},
            ] } graph="/images/token_distribution.svg" />
        </CrowdsalePurpose>
        <CrowdsaleSummary>
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
        </CrowdsaleSummary>
        <CenteredBlock>
            <CTAButton secondary>{ t('register_for_the_crowdsale') }</CTAButton>
        </CenteredBlock>
    </PageSection>
);
