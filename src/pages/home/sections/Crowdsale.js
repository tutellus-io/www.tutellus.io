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
    LinkButton,
    AButton,
} from '../../../components';

export const CrowdsaleCTA = ({href = "", children}) =>
    <CenteredBlock>
        {
            (href.startsWith("http")
                ? <AButton href={href} target="_blank" primary> { children }</AButton>
                : <LinkButton to={href} primary>{ children }</LinkButton>)
        }
    </CenteredBlock>;

export const Crowdsale = translate('crowdsale')(({t, id}) =>
    <PageSection id={ id } dark title={ t('title') }>
        <Text center>{ t('description') }</Text>
        <CrowdsalePurpose>
            <DistributionTable title={ t('funds_allocation') } stats={ [
                {value: 0.4, label: t('product_engineering')},
                {value: 0.2, label: t('sales_marketing')},
                {value: 0.2, label: t('publicity_pr')},
                {value: 0.1, label: t('operations')},
                {value: 0.1, label: t('security_loyalty_reserves')},
            ] } graph="/images/funds_allocation.svg" />
            <DistributionTable title={ t('token_distribution') } stats={ [
                {value: 0.6, label: t('crowdsale')},
                {value: 0.2, label: t('pool')},
                {value: 0.1, label: t('team')},
                {value: 0.1, label: t('bounty_advisors')},
            ] } graph="/images/token_distribution.svg" />
        </CrowdsalePurpose>
        <CrowdsaleSummary>
            <tbody>
                <tr>
                    <td>{ t('total_supply') }</td><td>{ t('total_supply_value') }</td>
                </tr>
                <tr>
                    <td>{ t('amount_for_sale') }</td><td>{ t('amount_for_sale_value') }</td>
                </tr>
                <tr>
                    <td>{ t('hard_cap') }</td><td>{ t('hard_cap_value') }</td>
                </tr>
                <tr>
                    <td>{ t('accepted_currencies') }</td><td>ETH</td>
                </tr>
                <tr>
                    <td>{ t('preico_date') }</td><td>{ t('preico_date_value') }</td>
                </tr>
                <tr className="secondary">
                    <td>{ t('preico_min') }</td><td>{ t('preico_min_value') }</td>
                </tr>
                <tr className="secondary">
                    <td>{ t('preico_bonus') }</td><td>{ t('preico_bonus_value') }</td>
                </tr>
                <tr>
                    <td>{ t('ico_date') }</td><td>{ t('ico_date_value') }</td>
                </tr>
                <tr className="secondary">
                    <td>{ t('ico_min') }</td><td>{ t('ico_min_value') }</td>
                </tr>
                <tr className="secondary">
                    <td>{ t('ico_bonus') }</td><td>{ t('ico_bonus_value') }</td>
                </tr>
            </tbody>
        </CrowdsaleSummary>
        <CrowdsaleCTA href="/signup">{ t('crowdsale:register_for_the_crowdsale') }</CrowdsaleCTA>
    </PageSection>
);
