//@flow
import React from 'react';
import styled from 'styled-components';
import {translate} from 'react-i18next';
import styles from '../../../styles';
import {
    PageSection,
    Text,
} from '../../../components';

export const Benefits = styled.div`
    display:grid;
    grid-template-columns: repeat(2, 50%);
`;
export const UserGroup = styled(props =>
    <div className={ props.className }>
        <h4>{ props.name }</h4>
        <div>{ props.children }</div>
    </div>
)`
    display: grid;
    grid-column-gap: 10px;
    grid-template-columns: 33% 67%;
    align-items: center;

    & > h4 {
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;

        &:before {
            content: '';
            background: url(${ props => props.icon }) center center no-repeat;
            padding: 2em;
            display: block;
            margin-bottom: 1em;
        }
    }
`;
export const BulletList = styled.ul``;
export const BulletPoint = styled.li`
    line-height: 2em;
    &:before {
        content: '';
        display: inline-block;
        border: solid 5px transparent;
        border-left-color: ${ styles.colors.lightblue };
        border-right: none;
        margin: 0 10px;
    }
`;
export const PlatformBenefits = translate('the_benefits')(({t, id}) =>
    <PageSection id={ id } title={ t('title') }>
        <Text center>{ t('description') }</Text>
        <Benefits>
            <UserGroup name={ t('students') } icon="/images/students.svg">
                <BulletList>
                    <BulletPoint>{ t('earn_studying') }</BulletPoint>
                    <BulletPoint>{ t('learn_more') }</BulletPoint>
                    <BulletPoint>{ t('relevance') }</BulletPoint>
                    <BulletPoint>{ t('use_crypto') }</BulletPoint>
                    <BulletPoint>{ t('wordwide_payments') }</BulletPoint>
                </BulletList>
            </UserGroup>
            <UserGroup name={ t('teachers') } icon="/images/teachers.svg">
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
