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
    Documents,
    WhyICO,
    Investors,
} from './sections';
import {
    AmbassadorsJoinSection,
} from '../ambassadors';
import {Landing} from '../../components';

export const Home = () =>
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
        <Advisors />
        <Investors/>
        <TheRoadshow id="roadshow"/>
        <AmbassadorsJoinSection link="/ambassadors" />
        <TechnologyStack />
        <PlatformRoadmap />
        <Crowdsale id="crowdsale" />
        <Documents id="documents" />
    </Landing>;
