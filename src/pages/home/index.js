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
    WhyICO,
    VideoFrame,
    OurOffice,
    Investors,
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
                <ThePlatform/>
                <Partners />
                <WhyICO/>
                <PraiseQuotes />
                <ThePain id="platform"/>
                <TheSolution />
                <PlatformBenefits />
                <HowItWorks />
                <TheTeam id="team" />
                <VideoFrame/>
                <OurOffice/>
                <Advisors />
                <Investors/>
                <TheRoadshow id="roadshow"/>
                <AmbassadorsJoinSection link="/ambassadors" />
                <TechnologyStack />
                <PlatformRoadmap />
                <Crowdsale id="crowdsale" />
                <Documents id="documents" />
                <SubscribeToMailList />
            </Landing>
        );
    }
};
