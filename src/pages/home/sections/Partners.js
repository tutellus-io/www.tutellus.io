//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    Text,
    PartnerList,
} from '../../../components';

export const Partners = translate('partners')(({t}) =>
    <PageSection title={ t('title') } light>
        <Text center>{ t('description') }</Text>
        <PartnerList entities={ {
            coinsilium: "/images/partners/coinsilium.svg",
            MIT: "/images/partners/mit.svg",
            Finnovating: "/images/partners/finnovating.svg",
            "Cremades & Calvo-Sotelo Abogados": "/images/partners/cremades_calvosotelo.svg",
        } } />
    </PageSection>
);
