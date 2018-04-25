//@flow
import React from 'react';
import {translate} from 'react-i18next';

import {
    CrowdsaleCTA,
    PageSection,
    Text,
} from '../../../components';
export const AmbassadorsJoinSection = translate('ambassadors')(({t, link}) =>
    <PageSection dark title={ t("join_title") }>
        <Text center>{ t("join_description") }</Text>
        <CrowdsaleCTA href={ link }>{ t("cta_title") }</CrowdsaleCTA>
    </PageSection>
);
