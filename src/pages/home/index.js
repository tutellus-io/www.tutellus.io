//@flow
import React from 'react';
import {injectGlobal} from 'styled-components';

import styles from '../../styles';

import {MainHeader} from './MainHeader';
import {
    ICOIntro,
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

} from './sections';
import {MainFooter} from './MainFooter';
import {FloatingHelp} from '../../components';
import {social_links} from '../../config';

export class Home extends React.Component {
    componentDidMount() {
        injectGlobal`${ styles.global }`;
    }
    render() {
        return (
            <div>
                <MainHeader socialLinks={ social_links } />
                <main>
                    <ICOIntro />
                    <ThePain />
                    <TheSolution />
                    <PlatformBenefits />
                    <HowItWorks id="howitworks" />
                    <ThePlatform id="platform" />
                    <PraiseQuotes />
                    <TheTeam id="team" />
                    <Crowdsale id="crowdsale" />
                    <PlatformRoadmap />
                    <TechnologyStack />
                </main>
                <MainFooter socialLinks={ social_links } />
                <FloatingHelp icon="/images/telegram-logo.svg"/>
            </div>
        );
    }
}
