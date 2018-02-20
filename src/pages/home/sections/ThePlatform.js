//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    ProductFeatures,
    ProductFeature,
    Text,
    SectionImage,
} from '../../../components';

export const ThePlatform = translate('the_platform')(({t, id}) =>
    <PageSection id={ id } title={ t('title') }>
        <Text center>{ t('description') }</Text>
        <SectionImage src="/images/theplatform.png" />
        <ProductFeatures>
            <ProductFeature title="1.000.000" image="/images/students.svg">
                { t('translation:students') }
            </ProductFeature>
            <ProductFeature title="+2.000.000" image="/images/transactions.svg">
                { t('translation:transactions') }
            </ProductFeature>
            <ProductFeature title="+1b min" image="/images/learning.svg">
                { t('translation:learning') }
            </ProductFeature>
            <ProductFeature title="$10m" image="/images/transactioned.svg">
                { t('translation:transactioned') }
            </ProductFeature>
        </ProductFeatures>
    </PageSection>
);
