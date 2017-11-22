//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    Quote,
} from '../../../components';
import {CrowdsaleCTA} from './Crowdsale';

export const PraiseQuotes = translate('quotes')(({id, t}) =>
    <PageSection id={ id } light>
        <Quote href="https://elpais.com/economia/2015/07/10/actualidad/1436521761_125197.html" cite="El Pais, 2016">
            { t('the_leading_platform') }
        </Quote>
        <CrowdsaleCTA href="https://www.tutellus.com">{ t('goto_tutellus') }</CrowdsaleCTA>
    </PageSection>
);
