//@flow
import React from 'react';
import {observer, inject} from 'mobx-react';
import {translate} from 'react-i18next';
import R from 'ramda';

import {
    BigOrderedList,
    BulletList,
    CrowdsaleCTA,
    Feature,
    FeatureList,
    Landing,
    PageSection,
    Powered,
    SplitPageSection,
    SectionImage,
    Text,
} from '../components';

export const AmbassadorsJoinSection = translate('ambassadors')(({t, link}) =>
    <PageSection light title={ t("join_title") }>
        <Text center>{ t("join_description") }</Text>
        <CrowdsaleCTA href={ link }>{ t("cta_title") }</CrowdsaleCTA>
    </PageSection>
);

const upTo = R.range(0);
const FEATURE_COUNT = 8;
const CHORES_COUNT = 6;
const RULES_COUNT = 4;
export const Ambassadors = translate('ambassadors')(inject('config')(observer(({config, t}) =>
    <Landing>
        <PageSection dark
                     title={ t("banner_title") }
                     backgroundImage={ `${ config.S3 }/images/ambassadors/background.jpg` }>
            <CrowdsaleCTA href={ t("cta_link") }>{ t("cta_title") }</CrowdsaleCTA>
        </PageSection>
        <PageSection title={ t("whatisit_title") }>
            <Text center>{ t("whatisit_description") }</Text>
            <SectionImage src={ `${ config.S3 }/images/ambassadors/mapa.svg` } />
        </PageSection>
        <PageSection dark title={ t("benefits_title") }>
            <FeatureList>{ upTo(FEATURE_COUNT).map(i =>
                <Feature key={ i }
                         icon={ `${ config.S3 }/images/ambassadors/benefits_${ i }.svg` }
                         title={ t(`benefits_${ i }_title`) }>
                    { t(`benefits_${ i }_description`) }
                </Feature>
            ) }</FeatureList>
        </PageSection>
        <SplitPageSection right
                          title={ t("chores_title") }
                          image={ `${ config.S3 }/images/ambassadors/chores.png` }>
            <BulletList>{ upTo(CHORES_COUNT).map(i =>
                <li key={ i }>{ t(`chores_${ i }`) }</li>
            ) }</BulletList>
        </SplitPageSection>
        <PageSection dark
                     title={ t("meetuprules_title") }
                     backgroundImage={ `${ config.S3 }/images/ambassadors/background_meetups.jpg` }>
            <Text center>{ t("meetuprules_description") }</Text>
            <BigOrderedList>{ upTo(RULES_COUNT).map(i =>
                <li key={ i } number={ `0${ i + 1 }` }>
                    { t(`meetuprules_${ i }`) }
                </li>
            ) }</BigOrderedList>
            <Powered by={ t("meetuprules_powered") }
                     logo={ `${ config.S3 }/images/ambassadors/meetup_logo.svg` }
                     alt="Meetup" />
        </PageSection>
        <AmbassadorsJoinSection link={ t("cta_link") }/>
    </Landing>
)));
