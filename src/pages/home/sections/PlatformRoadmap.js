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

export const PlatformRoadmap = translate('the_roadmap')(({t, id}) =>
    <PageSection id={ id } title={ t("title") }>
        <Text center>{ t("description") }</Text>
        <Roadmap>
            <Milestone done title={ t("mvp") } date={ moment('2014-01') }>
                <ul>
                    <li>{ t("usercount_100k") }</li>
                    <li>{ t("coursecount_20k") }</li>
                    <li>{ t("university_count_20") }</li>
                </ul>
            </Milestone>
            <Milestone done title={ t("new_platform") } date={ moment('2015-05') }>
                <ul>
                    <li>{ t("api_plus_mean_fw") }</li>
                    <li>{ t("usercount_300k") }</li>
                    <li>{ t("coursecount_40k") }</li>
                </ul>
            </Milestone>
            <Milestone done title={ t("crowdsale") } date={ moment('2017-09') }>
                <ul>
                    <li>{ t("usercount_800k") }</li>
                    <li>{ t("decentralization") }</li>
                    <li>{ t("tokens") }</li>
                </ul>
            </Milestone>
            <Milestone title={ t("ico") } date={ moment('2018-01') } />
            <Milestone title={ t("core_features") } date={ moment('2018-06') }>
                <ul>
                    <li>{ t("wallets") }</li>
                    <li>{ t("token_interop") }</li>
                    <li>{ t("active_cryptocurrency") }</li>
                </ul>
            </Milestone>
            <Milestone title={ t("value_services") } date={ moment('2018-12') }>
                <ul>
                    <li>{ t("full_offchain_interop") }</li>
                    <li>{ t("teacher_services") }</li>
                    <li>{ t("erc20_multifunctionality") }</li>
                </ul>
            </Milestone>
            <Milestone title={ t("third_entities") } date={ moment("2019-06") }>
                <ul>
                    <li>{ t("entities_design") }</li>
                    <li>{ t("product_management") }</li>
                    <li>{ t("multiuser_features") }</li>
                </ul>
            </Milestone>
            <Milestone title={ t("value_features") } date={ moment("2019-12") }>
                <ul>
                    <li>{ t("deep_learning") }</li>
                    <li>{ t("full_integration") }</li>
                    <li>{ t("tokenomics_optimization") }</li>
                </ul>
            </Milestone>
        </Roadmap>
    </PageSection>
);
