//@flow
import React from 'react';
/*:: import type {ComponentType} from 'react' */
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
import {NotifyBar} from '../../components';
import {observer, inject} from 'mobx-react';

const MAX_SOCIAL_LINKS_IN_HEADER = 3;
const pickMostRelevant = social_links =>
    R.pick(R.take(MAX_SOCIAL_LINKS_IN_HEADER, R.keys(social_links)), social_links);

/*::
type Props = {|
    config: {social_links: any},
    history: any,
|}
*/
export const Home/*:ComponentType<Props>*/= inject('config')(observer(class extends React.Component/*::<Props>*/ {
    componentDidMount() {
        injectGlobal`${ styles.global }`;
    }
    render() {
        const social_links = this.props.config.social_links;
        return (
            <div>
                <MainHeader socialLinks={ pickMostRelevant(social_links) }
                            history={ this.props.history } />
                <NotifyBar />
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
}));
