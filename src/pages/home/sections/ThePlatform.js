//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    Features,
    Feature,
    Text,
    SectionImage,
} from '../../../components';

export const ThePlatform = translate('the_platform')(({t, id}) =>
    <PageSection id={ id } title={ t('title') }>
        <Text center>{ t('description') }</Text>
        <SectionImage src="/images/theplatform.png" />
        <Features>
            <Feature title="1.000.000" image="/images/students.svg">
                { t('translation:students') }
            </Feature>
            <Feature title="+2.000.000" image="/images/transactions.svg">
                { t('translation:transactions') }
            </Feature>
            <Feature title="+1b min" image="/images/learning.svg">
                { t('translation:learning') }
            </Feature>
            <Feature title="$10m" image="/images/transactioned.svg">
                { t('translation:transactioned') }
            </Feature>
        </Features>
    </PageSection>
);
