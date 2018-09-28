//@flow
/* eslint no-magic-numbers: off */
import React from 'react';
import {translate} from 'react-i18next';
import {animateScroll} from 'react-scroll';
import {
    PageSection,
    SectionTitle,
    Text,
    CrowdsalePurpose,
    DistributionTable,
    CrowdsaleSummary,
    Button,
    CenteredBlock,
} from '../../../components';

export const Crowdsale = translate('crowdsale')(({t, id}) =>
    <PageSection id={ id } darker title={ t('title') }>
        <Text center>{ t('description') }</Text>
        <CrowdsalePurpose>
            <DistributionTable title={ t('c_title') } stats={
                [0.5, 0.2, 0.2, 0.1].map((value, index) => ({
                    value,
                    label: t(`c_item_${ index }`),
                }))
            } graph="/images/funds_allocation.svg" />
        </CrowdsalePurpose>
        <CrowdsaleSummary>
            <tbody>
                <tr>
                    <td>{ t('tut_price') }</td><td dangerouslySetInnerHTML={ {__html: t('tut_price_value')} } />
                </tr>
                <tr>
                    <td>{ t('fundraising') }</td><td dangerouslySetInnerHTML={ {__html: t('fundraising_value')} } />
                </tr>
                <tr>
                    <td>{ t('tokens_supply') }</td><td dangerouslySetInnerHTML={ {__html: t('tokens_supply_value')} } />
                </tr>
                <tr>
                    <td>{ t('tokens_sold') }</td><td dangerouslySetInnerHTML={ {__html: t('tokens_sold_value')} } />
                </tr>
                <tr>
                    <td>{ t('teachers_event') }</td><td dangerouslySetInnerHTML={ {__html: t('teachers_event_value')} } />
                </tr>
                <tr>
                    <td>{ t('rights_ttut') }</td><td dangerouslySetInnerHTML={ {__html: t('rights_ttut_value')} } />
                </tr>
                <tr>
                    <td>{ t('irr') }</td><td dangerouslySetInnerHTML={ {__html: t('irr_value')} } />
                </tr>
            </tbody>
        </CrowdsaleSummary>
        <SectionTitle>{t('distribution_title')}</SectionTitle>
        <CrowdsaleSummary>
            <thead>
                <tr>
                    <th>{ t('distribution_name_title') }</th>
                    <th>{ t('distribution_discount_title') }</th>
                    <th>{ t('distribution_status_title') }</th>
                </tr>
            </thead>
            <tbody>
                {
                    [0, 1, 2, 3, 4].map(index =>
                        <tr key={ index }>
                            <td>{ t(`distribution_name_${ index }`) }</td>
                            <td dangerouslySetInnerHTML={ {__html: t(`distribution_discount_${ index }`)} } />
                            <td dangerouslySetInnerHTML={ {__html: t(`distribution_status_${ index }`)} } />
                        </tr>
                    )
                }
            </tbody>
        </CrowdsaleSummary>
    </PageSection>
);
