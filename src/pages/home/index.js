//@flow
import React from 'react';
/*:: import type {ComponentType} from 'react' */
import {injectGlobal} from 'styled-components';

import styles from '../../styles';

import {
    Advisors,
    ICOIntro,
    Partners,
    ThePain,
    HowItWorks,
    ThePlatform,
    PraiseQuotes,
    TheSolution,
    PlatformBenefits,
    PlatformRoadmap,
    TechnologyStack,
    TheTeam,
    Crowdsale,
    TheRoadshow,
    SubscribeToMailList,
    Documents,
} from './sections';
import {
    AmbassadorsJoinSection,
} from '../ambassadors';
import {Landing} from '../../components';

/*::
type Props = {|
    config: {social_links: any},
|}
*/
export const Home/*:ComponentType<Props>*/= class extends React.Component/*::<Props>*/ {
    componentDidMount() {
        injectGlobal`${ styles.global }`;
    }
    render() {
        return (
            <Landing>
                <ICOIntro />
                <ThePain />
                <TheSolution />
                <PlatformBenefits />
                <HowItWorks />
                <Documents id="documents" />
                <ThePlatform id="platform" />
                <PraiseQuotes />
                <TheTeam id="team" />
                <TheRoadshow/>
                <AmbassadorsJoinSection link="/ambassadors" />
                <PlatformRoadmap />
                <Crowdsale id="crowdsale" />
                <TechnologyStack />
                <Advisors />
                <Partners />
                <SubscribeToMailList />
            </Landing>
        );
    }
};
