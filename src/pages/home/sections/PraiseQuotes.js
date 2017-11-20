//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    Quote,
    CenteredBlock,
    CTAButton,
} from '../../../components';

export const PraiseQuotes = translate('quotes')(({t}) =>
    <PageSection light>
        <Quote href="https://elpais.com/economia/2015/07/10/actualidad/1436521761_125197.html" cite="El Pais, 2016">
            { t('the_leading_platform') }
        </Quote>
        <CenteredBlock>
            <CTAButton secondary>{ t('goto_tutellus') }</CTAButton>
        </CenteredBlock>
    </PageSection>
);
