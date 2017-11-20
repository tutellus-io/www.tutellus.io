//@flow
import React from 'react';
import {translate} from 'react-i18next';
import moment from 'moment/moment';
import {
    PageSection,
    Roadmap,
    Milestone,
    Text,
} from '../../../components';

export const PlatformRoadmap = translate('the_roadmap')(({t}) =>
    <PageSection title={ t("title") }>
        <Text center>{ t("description") }</Text>
        <Roadmap>
            <Milestone done title={ t("mvp") } date={ moment('2014-01') }>
                <ul>
                    <li>{ t("usercount_100k") }</li>
                    <li>{ t("coursecount_20k") }</li>
                </ul>
            </Milestone>
            <Milestone done title={ t("new_platform") } date={ moment('2015-05') }>
                <ul>
                    <li>{ t("api_plus_mean_fw") }</li>
                    <li>{ t("usercount_300k") }</li>
                    <li>{ t("coursecount_40k") }</li>
                </ul>
            </Milestone>
            <Milestone done title={ t("crowdsale") } date={ moment('2017-11') } />
            <Milestone title={ t("ico") } date={ moment('2018-01') } />
            <Milestone title={ t("core_features") } date={ moment('2018-06') }>
                <ul>
                    <li>{ t("wallets") }</li>
                    <li>{ t("token_interop") }</li>
                </ul>
            </Milestone>
            <Milestone title={ t("value_services") } date={ moment('2018-12') }>
                <ul>
                    <li>{ t("full_offchain_interop") }</li>
                </ul>
            </Milestone>
            <Milestone title={ t("third_entities") } date={ moment("2019-06") }>
                <ul>
                    <li>{ t("entities_design") }</li>
                    <li>{ t("access_management") }</li>
                </ul>
            </Milestone>
            <Milestone title={ t("value_features") } date={ moment("2019-12") }>
                <ul>
                    <li>{ t("product_management") }</li>
                    <li>{ t("full_integration") }</li>
                </ul>
            </Milestone>
            <Milestone title={ t("api_features") } date={ moment("2020-06") }/>
        </Roadmap>
    </PageSection>
);
