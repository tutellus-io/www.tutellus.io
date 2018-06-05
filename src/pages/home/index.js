//@flow
import React from 'react';
/*:: import type {ComponentType} from 'react' */
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
    ICORatings,
} from './sections';
import {
    AmbassadorsJoinSection,
} from '../ambassadors';
import {Landing} from '../../components';

export const Home = () =>
    <Landing>
        <ICOIntro />
        <ICORatings/>
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
    </Landing>;
