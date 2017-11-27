//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    Text,
    MailListSubscriptionForm,
} from '../../../components';

export const SubscribeToMailList = translate('mailinglist')(({t}) =>
    <PageSection dark title={ t('title') }>
        <Text center>{ t('description') }</Text>
        <MailListSubscriptionForm />
    </PageSection>
);
