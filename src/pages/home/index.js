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

const SOCIAL_LINKS = {
    facebook: '//fb.me/tutellus',
    twitter: '//twitter.com/tutellus',
    linkedin: '//linkedin.com/tutellus',
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
                    <HowItWorks />
                    <ThePlatform />
                    <PraiseQuotes />
                    <TheTeam />
                    <Crowdsale />
                    <PlatformRoadmap />
                    <TechnologyStack />
                </main>
                <MainFooter socialLinks={ SOCIAL_LINKS } />
            </div>
        );
    }
}
