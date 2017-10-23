//@flow
// $FlowFixMe: usamos moment/moment para que funcione el transpilado (se podría hacer con webpack)
import moment from 'moment/moment';
import React, {Component} from 'react';
import {injectGlobal} from 'styled-components';
import {I18n} from 'react-i18next';
import i18n from './i18n';

import {
    MainHeader,
    MainLogo,
    MainMenu,
    PageBanner,
    PageSubtitle,
    SectionImage,
    Text,
    PageSection,
    Row,
    Col,
    SectionTitle,
    SectionSideImage,
    CTAButton,
    Features,
    Feature,
    Quote,
    TeamMember,
    CenteredImage,
    CrowdsaleTable,
    Roadmap,
    Milestone,
    FAQ,
    CenteredBlock,
} from './components';
import styles from './styles';


class App extends Component/*::<{}>*/ {
    componentDidMount() {
        injectGlobal`${ styles.global }`;
    }
    render() {
        return (
            <I18n i18n={ i18n }>{ (t, {i18n}) =>
                <div>
                    <MainHeader>
                        <MainLogo />
                        <MainMenu onLanguage={ lang => i18n.changeLanguage(lang) } />
                    </MainHeader>
                    <main>
                        <PageBanner title={ t("page_title") } image="https://www.tutellus.com/dist/images/home/header/home7.jpg">
                            <PageSubtitle dangerouslySetInnerHTML={{ __html: t('page_subtitle') }} />
                            <SectionImage src="https://placehold.it/800x600" />
                            <Text>{ t('main_claim') }</Text>
                        </PageBanner>
                        <PageSection>
                            <Row>
                                <Col size={ 2 / 5 }>
                                    <SectionTitle>{ t('the_pain_title') }</SectionTitle>
                                    <Text>{ t('the_pain') }</Text>
                                </Col>
                                <Col size={ 3 / 5 }>
                                    <SectionSideImage src="/images/thepain.png" />
                                </Col>
                            </Row>
                        </PageSection>
                        <PageSection>
                            <Row>
                                <Col size={ 3 / 5 }>
                                    <SectionSideImage src="/images/tokens.png" />
                                </Col>
                                <Col size={ 2 / 5 }>
                                    <SectionTitle>{ t('the_solution_title') }</SectionTitle>
                                    <Text>{ t('the_solution') }</Text>
                                    <ul>
                                        <li>{ t('the_solution_for_students') }</li>
                                        <li>{ t('the_solution_for_teachers') }</li>
                                        <li>{ t('the_solution_for_business') }</li>
                                    </ul>
                                </Col>
                            </Row>
                        </PageSection>
                        <PageSection title={ t('how_it_works_title') } image="/images/HTTW.png">
                            <Text>{ t('how_it_works') }</Text>
                            <CenteredBlock>
                                <CTAButton primary>{ t('download_whitepaper') }</CTAButton>
                            </CenteredBlock>
                        </PageSection>
                        <PageSection title={ t('platform_title') } image="https://www.tutellus.com/bower_components/tutellus.css/images/home/desktop-computer.jpg">
                            <Features>
                                <Feature title="1.000.000" image="https://www.tutellus.com/bower_components/tutellus.css/images/landings/titulos-universitarios/icon-yellow-title.svg">
                                    { t('students') }
                                </Feature>
                                <Feature title="+2.000.000" image="http://placehold.it/50x50">
                                    { t('transactions') }
                                </Feature>
                                <Feature title="+1b min" image="https://www.tutellus.com/bower_components/tutellus.css/images/landings/titulos-universitarios/icon-green-content.svg">
                                    { t('learning') }
                                </Feature>
                                <Feature title="$10m" image="https://www.tutellus.com/bower_components/tutellus.css/images/landings/unlimited-corporate/icon-orange-cash.svg">
                                    { t('transactioned') }
                                </Feature>
                            </Features>
                            <Quote href="https://elpais.com/economia/2015/07/10/actualidad/1436521761_125197.html" cite="El Pais, 2016">
                                { t('the_leading_platform_quote') }
                            </Quote>
                            <CenteredBlock>
                                <CTAButton secondary>{ t('goto_tutellus') }</CTAButton>
                            </CenteredBlock>
                        </PageSection>
                        <PageSection title={ t('team_title') }>
                            <Row>
                                <Col size={ 1 / 5 }>
                                    <TeamMember name="Miguel Caballero" title="CEO" photo="https://www.tutellus.com/bower_components/tutellus.css/images/team/Miguel.jpg">
                                        { t('mcaballero_bio') }
                                    </TeamMember>
                                </Col>
                                <Col size={ 1 / 5 }>
                                    <TeamMember name="Javier Ortiz" title="CTO" photo="https://www.tutellus.com/bower_components/tutellus.css/images/team/JaviSok.jpg">
                                        { t('jortiz_bio') }
                                    </TeamMember>
                                </Col>
                                <Col size={ 1 / 5 }>
                                    <TeamMember name="Carlos López" title="Engineer" photo="https://www.tutellus.com/bower_components/tutellus.css/images/team/Carlos.jpg">
                                        { t('clopez_bio') }
                                    </TeamMember>
                                </Col>
                                <Col size={ 1 / 5 }>
                                    <TeamMember name="Javier Calvo" title="Data Scientist" photo="https://www.tutellus.com/bower_components/tutellus.css/images/team/JaviMat.jpg">
                                        { t('jcalvo_bio') }
                                    </TeamMember>
                                </Col>
                                <Col size={ 1 / 5 }>
                                    <TeamMember name="Karol Szymanczak" title="Designer" photo="https://www.tutellus.com/bower_components/tutellus.css/images/team/Karol.jpg">
                                        { t('karol_bio') }
                                    </TeamMember>
                                </Col>
                            </Row>
                        </PageSection>
                        <PageSection title={ t('crowdsale_title') }>
                            <Row>
                                <Col size={ 1 / 2 }>
                                    <CenteredImage src="https://placehold.it/800x600" />
                                </Col>
                                <Col size={ 1 / 2 }>
                                    <CenteredImage src="https://placehold.it/800x600" />
                                </Col>
                            </Row>
                            <CrowdsaleTable>
                                <tbody>
                                    <tr>
                                        <td>{ t('token_name') }</td><td>TUT</td>
                                    </tr>
                                    <tr>
                                        <td>{ t('preico_date') }</td><td>{ t('preico_date_value') }</td>
                                    </tr>
                                    <tr>
                                        <td>{ t('ico_date') }</td><td>{ t('ico_date_value') }</td>
                                    </tr>
                                    <tr>
                                        <td>{ t('total_supply') }</td><td>{ t('total_supply_value') }</td>
                                    </tr>
                                    <tr>
                                        <td>{ t('amount_for_sale') }</td><td>{ t('amount_for_sale_value') }</td>
                                    </tr>
                                    <tr>
                                        <td>{ t('soft_cap') }</td><td>{ t('soft_cap_value') }</td>
                                    </tr>
                                    <tr>
                                        <td>{ t('accepted_currencies') }</td><td>ETH</td>
                                    </tr>
                                </tbody>
                            </CrowdsaleTable>
                            <CenteredBlock>
                                <CTAButton secondary>{ t('register_for_the_crowdsale') }</CTAButton>
                            </CenteredBlock>
                        </PageSection>
                        <PageSection title="Roadmap">
                            <Roadmap>
                                <Milestone title="MVP" date={ moment('2014-01') }>
                                    <ul>
                                        <li>&gt;100k users</li>
                                        <li>&gt;20k videocourses</li>
                                    </ul>
                                </Milestone>
                                <Milestone title="New Platform" date={ moment('2015-05') }>
                                    <ul>
                                        <li>&gt;300k users</li>
                                        <li>&gt;40k videcourses</li>
                                    </ul>
                                </Milestone>
                                <Milestone title="New Platform" date={ moment('2015-05') }>
                                    <ul>
                                        <li>&gt;300k users</li>
                                        <li>&gt;40k videcourses</li>
                                    </ul>
                                </Milestone>
                                <Milestone title="New Platform" date={ moment('2015-05') }>
                                    <ul>
                                        <li>&gt;300k users</li>
                                        <li>&gt;40k videcourses</li>
                                    </ul>
                                </Milestone>
                                <Milestone title="New Platform" date={ moment('2015-05') }>
                                    <ul>
                                        <li>&gt;300k users</li>
                                        <li>&gt;40k videcourses</li>
                                    </ul>
                                </Milestone>
                                <Milestone title="New Platform" date={ moment('2015-05') }>
                                    <ul>
                                        <li>&gt;300k users</li>
                                        <li>&gt;40k videcourses</li>
                                    </ul>
                                </Milestone>
                                <Milestone title="New Platform" date={ moment('2015-05') }>
                                    <ul>
                                        <li>&gt;300k users</li>
                                        <li>&gt;40k videcourses</li>
                                    </ul>
                                </Milestone>
                                <Milestone title="New Platform" date={ moment('2015-05') }>
                                    <ul>
                                        <li>&gt;300k users</li>
                                        <li>&gt;40k videcourses</li>
                                    </ul>
                                </Milestone>
                                <Milestone title="New Platform" date={ moment('2015-05') }>
                                    <ul>
                                        <li>&gt;300k users</li>
                                        <li>&gt;40k videcourses</li>
                                    </ul>
                                </Milestone>
                                <Milestone title="New Platform" date={ moment('2015-05') }>
                                    <ul>
                                        <li>&gt;300k users</li>
                                        <li>&gt;40k videcourses</li>
                                    </ul>
                                </Milestone>
                            </Roadmap>
                        </PageSection>
                        <PageSection title="Partners" />
                        <PageSection title={ t("FAQs") }>
                            <FAQ title={ t("are_there_restrictions") }>{ t('are_there_restrictions_answer') }</FAQ>

                            <FAQ title={ t("how_to_purchase") }>{ t('how_to_purchase_answer') }</FAQ>

                            <FAQ title={ t("nothing_happens") }>
                                <p>{ t('nothing_happens_window_dissapears') }</p>
                                <p>{ t('nothing_happens_check_connection') }</p>
                            </FAQ>

                            <FAQ title={ t("sent_twice") }>{ t('sent_twice_answer') }</FAQ>

                            <FAQ title="can_buy_from_exchanges">{ t('can_buy_from_exchanges_answer') }</FAQ>

                            <FAQ title={ t("is_erc20") }>{ t('is_erc20_answer') }</FAQ>

                            <FAQ title={ t("cant_find_in_exchanges") }>{ t('cant_find_in_exchanges_answer') }</FAQ>

                            <FAQ title={ t("marked_as_pending") }>
                                <ol>
                                    <li>{ t('check_steps') }</li>
                                    <li>{ t('check_txhash') }</li>
                                    <li>{ t('wait_a_few_hours') }</li>
                                    <li>{ t('contact_support') }</li>
                                </ol>
                            </FAQ>
                            <FAQ title={ t("why_its_promising") }>
                                <ol>
                                    <li>{ t('running_since_2013') }</li>
                                    <li>{ t('big_ecosystem') }</li>
                                    <li>{ t('proved_how_to_create_value') }</li>
                                    <li>{ t('already_many_contributors') }</li>
                                    <li>{ t('great_team') }</li>
                                </ol>
                            </FAQ>

                            <FAQ title={ t("what_is_tutellus") }>{ t('what_is_tutellus_answer') }</FAQ>

                            <FAQ title={ t("why_the_ico") }>{ t('why_the_ico_answer') }</FAQ>

                            <FAQ title={ t("benefits_for_tokenholders") }>{ t('benefits_for_tokenholders_answer') }</FAQ>

                            <FAQ title={ t( "advantages_vs_other_projects" ) }>
                                <p>{ t('big_community') }</p>
                                <p>{ t('solves_problems_for_all_players') }</p>
                                <p>{ t('natural_way_to_evolve') }</p>
                                <p>{ t('leading_in_latin_countries') }</p>
                            </FAQ>

                            <FAQ title={ t("is_tutellus_safe") }>
                                <p>{ t('never_been_hacked') }</p>
                                <p>{ t('secure_infrastructure') }</p>
                            </FAQ>
                        </PageSection>
                    </main>
                    {/* TODO: Falta el footer */}
                    <footer>Footer</footer>
                </div>
            }</I18n>
        );
    }
}

export default App;
