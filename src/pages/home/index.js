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

//TODO: están por definir
const SOCIAL_LINKS = {
    telegram: 'telegram',
    medium: 'medium',
    github: 'github',
    slack: 'slack',
    twitter: '//twitter.com/tutellus',
};

export class Home extends React.Component {
    componentDidMount() {
        injectGlobal`${ styles.global }`;
    }
    render() {
        return (
            <div>
                <MainHeader socialLinks={ SOCIAL_LINKS } />
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
                <MainFooter socialLinks={ SOCIAL_LINKS } />
                <FloatingHelp icon="/images/telegram-logo.svg"/>
            </div>
        );
    }
}
