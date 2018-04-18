//@flow
/* eslint no-magic-numbers: off */
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    ResponsiveGrid,
    Feature,
    Text,
} from '../../../components';

export const WhyICO = translate('why_ico')(({t}) =>
    <PageSection dark title={ t('title') }>
        <Text center>{ t('description') }</Text>
        <ResponsiveGrid gap="2em 2em">
            {
                JSON.parse(t('features_order')).map((name, index) =>
                    <Feature key={ index }
                        icon={ t(`${ name }_icon`) }
                        title={ t(`${ name }_title`) }>
                        { t(`${ name }_description`) }
                    </Feature>
                )
            }
        </ResponsiveGrid>
    </PageSection>
);
