//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    Quote,
    CrowdsaleCTA,
} from '../../../components';

export const PraiseQuotes = translate('quotes')(({id, t}) => {
    const url = "https://elpais.com/economia/2015/07/10/actualidad/1436521761_125197.html";
    return (
        <PageSection id={ id } light>
            <Quote href={url} cite="El Pais, 2016">
                { t('the_leading_platform') }
            </Quote>
            <CrowdsaleCTA href="https://www.tutellus.com">
                { t('goto_tutellus') }
            </CrowdsaleCTA>
        </PageSection>
    );
});
