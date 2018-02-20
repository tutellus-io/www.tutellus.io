//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    Text,
    Benefits,
    UserGroup,
    BulletList,
} from '../../../components';

export const PlatformBenefits = translate('the_benefits')(({t, id}) =>
    <PageSection id={ id } title={ t('title') }>
        <Text center>{ t('description') }</Text>
        <Benefits>
            <UserGroup name={ t('translation:students') } icon="/images/student.svg">
                <BulletList>
                    <li>{ t('earn_studying') }</li>
                    <li>{ t('learn_more') }</li>
                    <li>{ t('relevance') }</li>
                    <li>{ t('use_crypto') }</li>
                    <li>{ t('wordwide_payments') }</li>
                </BulletList>
            </UserGroup>
            <UserGroup name={ t('translation:teachers') } icon="/images/teacher.svg">
                <BulletList>
                    <li>{ t('instant_payments') }</li>
                    <li>{ t('earn_via_best_students') }</li>
                    <li>{ t('earn_via_relevance') }</li>
                    <li>{ t('earn_via_subscriptions') }</li>
                    <li>{ t('exclusive_services') }</li>
                </BulletList>
            </UserGroup>
        </Benefits>
    </PageSection>
);
export default PlatformBenefits;
