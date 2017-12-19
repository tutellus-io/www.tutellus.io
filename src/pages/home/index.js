//@flow
import React from 'react';
import R from 'ramda';
import {injectGlobal} from 'styled-components';

import styles from '../../styles';

import {MainHeader} from './MainHeader';
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
    SubscribeToMailList,
    Documents,
} from './sections';
import {MainFooter} from './MainFooter';
import {social_links} from '../../config';

export class Home extends React.Component/*::<void>*/ {
    componentDidMount() {
        injectGlobal`${ styles.global }`;
    }
    render() {
        return (
            <div>
                <MainHeader socialLinks={ R.pick(R.take(3, R.keys(social_links)), social_links) } />
                <main>
                    <ICOIntro />
                    <ThePain />
                    <TheSolution />
                    <PlatformBenefits />
                    <HowItWorks />
                    <Documents id="documents" />
                    <ThePlatform id="platform" />
                    <PraiseQuotes />
                    <TheTeam id="team" />
                    <Crowdsale id="crowdsale" />
                    <PlatformRoadmap />
                    <TechnologyStack />
                    <Advisors />
                    <Partners />
                    <SubscribeToMailList />
                </main>
                <MainFooter socialLinks={ social_links } />
            </div>
        );
    }
}
