//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    Features,
    Feature,
    Text,
} from '../../../components';

export const ThePlatform = translate('the_platform')(({t}) =>
    <PageSection title={ t('title') } image="https://www.tutellus.com/bower_components/tutellus.css/images/home/desktop-computer.jpg">
        <Text center>{ t('description') }</Text>
        <Features>
            <Feature title="1.000.000" image="/images/students.svg">
                { t('students') }
            </Feature>
            <Feature title="+2.000.000" image="/images/transactions.svg">
                { t('transactions') }
            </Feature>
            <Feature title="+1b min" image="/images/learning.svg">
                { t('learning') }
            </Feature>
            <Feature title="$10m" image="/images/transactioned.svg">
                { t('transactioned') }
            </Feature>
        </Features>
    </PageSection>
);
