//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    Text,
    Benefits,
    UserGroup,
    BulletList,
    BulletPoint,
} from '../../../components';

export const PlatformBenefits = translate('the_benefits')(({t, id}) =>
    <PageSection id={ id } title={ t('title') }>
        <Text center>{ t('description') }</Text>
        <Benefits>
            <UserGroup name={ t('students') } icon="/images/student.svg">
                <BulletList>
                    <BulletPoint>{ t('earn_studying') }</BulletPoint>
                    <BulletPoint>{ t('learn_more') }</BulletPoint>
                    <BulletPoint>{ t('relevance') }</BulletPoint>
                    <BulletPoint>{ t('use_crypto') }</BulletPoint>
                    <BulletPoint>{ t('wordwide_payments') }</BulletPoint>
                </BulletList>
            </UserGroup>
            <UserGroup name={ t('teachers') } icon="/images/teacher.svg">
                <BulletList>
                    <BulletPoint>{ t('instant_payments') }</BulletPoint>
                    <BulletPoint>{ t('earn_via_best_students') }</BulletPoint>
                    <BulletPoint>{ t('earn_via_relevance') }</BulletPoint>
                    <BulletPoint>{ t('earn_via_subscriptions') }</BulletPoint>
                    <BulletPoint>{ t('exclusive_services') }</BulletPoint>
                </BulletList>
            </UserGroup>
        </Benefits>
    </PageSection>
);
export default PlatformBenefits;
