//@flow
// $FlowFixMe: usamos moment/moment para que funcione el transpilado (se podría hacer con webpack)
import moment from 'moment/moment';
import React, {Component} from 'react';
import {injectGlobal} from 'styled-components';
import {translate} from 'react-i18next';

import styled from 'styled-components';
import {
    MainHeader,
    MAIN_HEADER_HEIGHT,
    MainMenu,
    PageBanner,
    PageTitle,
    SectionImage,
    Text,
    PageSection,
    Row,
    Col,
    SectionTitle,
    PlayButton,
    CTAButton,
    Features,
    Feature,
    Quote,
    Team,
    TeamMember,
    CenteredImage,
    CrowdsaleTable,
    Roadmap,
    Milestone,
    FAQ,
    CenteredBlock,
    PageFooter,
    FooterBranding,
    FooterNav,
    NavLink,
    NavCategory,
} from '../../components';
import styles from '../../styles';

const Benefits = styled.div`
    display:grid;
    grid-template-columns: repeat(2, 50%);
`;
const UserGroup = styled(props =>
    <div className={ props.className }>
        <h4>{ props.name }</h4>
        <div>{ props.children }</div>
    </div>
)`
    display: grid;
    grid-column-gap: 10px;
    grid-template-columns: 33% 67%;
    align-items: center;

    & > h4 {
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;

        &:before {
            content: '';
            background: url(${ props => props.icon }) center center no-repeat;
            padding: 2em;
            display: block;
            margin-bottom: 1em;
        }
    }
`;
const BulletList = styled.ul``;
const BulletPoint = styled.li`
    line-height: 2em;
    &:before {
        content: '';
        display: inline-block;
        border: solid 5px transparent;
        border-left-color: ${ styles.colors.lightblue };
        border-right: none;
        margin: 0 10px;
    }
`;

const SOCIAL_LINKS = {
    facebook: '//fb.me/tutellus',
    twitter: '//twitter.com/tutellus',
    linkedin: '//linkedin.com/tutellus',
};
class WindowScroll extends React.Component {
    constructor() {
        super();
        this.state = {x: 0, y: 0};
    }
    componentDidMount() {
        window.addEventListener('scroll', evt => {
            this.setState({x: window.scrollX, y: window.scrollY});
        });
    }
    render() {
        return this.props.children(this.state);
    }
};

class HomeElement extends Component/*::<{}>*/ {
    componentDidMount() {
        injectGlobal`${ styles.global }`;
    }
    render() {
        const {i18n, t} = this.props;
        return (
            <div>
                <WindowScroll>{ scroll =>
                    <MainHeader small={ scroll.y > MAIN_HEADER_HEIGHT } logo="/images/white-logo.svg">
                        <MainMenu onLanguage={ lang => i18n.changeLanguage(lang) } socialLinks={ SOCIAL_LINKS } locale={ i18n.language } />
                    </MainHeader>
                }</WindowScroll>
                <main>
                    <PageBanner dark backgroundVideo="/images/bgvideo.mp4">
                        <PageTitle dangerouslySetInnerHTML={{ __html: t("page_title") }} />
                        <Text center dangerouslySetInnerHTML={{ __html: t('page_subtitle') }} />
                        <PlayButton video="/images/bgvideo.mp4" />
                    </PageBanner>
                    <PageSection>
                        <SectionTitle dangerouslySetInnerHTML={{ __html: t('the_pain_title') }} />
                        <Text center>{ t('the_pain') }</Text>
                        <Row>
                            <Col size={ 1 / 2}>
                                <SectionImage src="/images/edtech.svg" />
                            </Col>
                            <Col size={ 1 / 2}>
                                <SectionImage src="/images/itjobs.svg" />
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection light interstitialImage="/images/tokens.png">
                        <SectionTitle dangerouslySetInnerHTML={{ __html: t('the_solution_title') }} />
                        <Text center>{ t('the_solution') }</Text>
                    </PageSection>
                    <PageSection title={ t('benefits_title') }>
                        <Text center>{ t('benefits_description') }</Text>
                        <Benefits>
                            <UserGroup name={ t('students') } icon="/images/students.svg">
                                <BulletList>
                                    <BulletPoint>{ t('benefit_earn_studying') }</BulletPoint>
                                    <BulletPoint>{ t('benefit_learn_more') }</BulletPoint>
                                    <BulletPoint>{ t('benefit_relevance') }</BulletPoint>
                                    <BulletPoint>{ t('benefit_use_crypto') }</BulletPoint>
                                    <BulletPoint>{ t('benefit_wordwide_payments') }</BulletPoint>
                                </BulletList>
                            </UserGroup>
                            <UserGroup name={ t('teachers') } icon="/images/teachers.svg">
                                <BulletList>
                                    <BulletPoint>{ t('benefit_instant_payments') }</BulletPoint>
                                    <BulletPoint>{ t('benefit_earn_via_best_students') }</BulletPoint>
                                    <BulletPoint>{ t('benefit_earn_via_relevance') }</BulletPoint>
                                    <BulletPoint>{ t('benefit_earn_via_subscriptions') }</BulletPoint>
                                    <BulletPoint>{ t('benefit_exclusive_services') }</BulletPoint>
                                </BulletList>
                            </UserGroup>
                        </Benefits>
                    </PageSection>
                    <PageSection dark title={ t('how_it_works_title') } image="/images/HTTW.png">
                        <Text center>{ t('how_it_works') }</Text>
                        <CenteredBlock>
                            <CTAButton icon="http://placehold.it/20x20" primary>{ t('download_whitepaper') }</CTAButton>
                        </CenteredBlock>
                    </PageSection>
                    <PageSection title={ t('platform_title') } image="https://www.tutellus.com/bower_components/tutellus.css/images/home/desktop-computer.jpg">
                        <Features>
                            <Feature title="1.000.000" image="/images/students.svg">
                                { t('students') }
                            </Feature>
                            <Feature title="+2.000.000" image="/images/transactions.svg">
                                { t('transactions') }
                            </Feature>
                            <Feature title="+1b min" image="/images/learning.svg">
                                { t('learning') }
                            </Feature>
                            <Feature title="$10m" image="/images/transactioned.svg">
                                { t('transactioned') }
                            </Feature>
                        </Features>
                    </PageSection>
                    <PageSection light>
                        <Quote href="https://elpais.com/economia/2015/07/10/actualidad/1436521761_125197.html" cite="El Pais, 2016">
                            { t('the_leading_platform_quote') }
                        </Quote>
                        <CenteredBlock>
                            <CTAButton secondary>{ t('goto_tutellus') }</CTAButton>
                        </CenteredBlock>
                    </PageSection>
                    <PageSection title={ t('team_title') }>
                        <Team>
                            <TeamMember name="Miguel Caballero" title="CEO" photo="https://www.tutellus.com/bower_components/tutellus.css/images/team/Miguel.jpg">
                                { t('mcaballero_bio') }
                            </TeamMember>
                            <TeamMember name="Javier Ortiz" title="CTO" photo="https://www.tutellus.com/bower_components/tutellus.css/images/team/JaviSok.jpg">
                                { t('jortiz_bio') }
                            </TeamMember>
                            <TeamMember name="Carlos López" title="Engineer" photo="https://www.tutellus.com/bower_components/tutellus.css/images/team/Carlos.jpg">
                                { t('clopez_bio') }
                            </TeamMember>
                            <TeamMember name="Javier Calvo" title="Data Scientist" photo="https://www.tutellus.com/bower_components/tutellus.css/images/team/JaviMat.jpg">
                                { t('jcalvo_bio') }
                            </TeamMember>
                            <TeamMember name="Karol Szymanczak" title="Designer" photo="https://www.tutellus.com/bower_components/tutellus.css/images/team/Karol.jpg">
                                { t('karol_bio') }
                            </TeamMember>
                        </Team>
                    </PageSection>
                    <PageSection dark title={ t('crowdsale_title') }>
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
                    <PageSection title={ t("roadmap_title") }>
                        <Text center>{ t("roadmap_description") }</Text>
                        <Roadmap>
                            <Milestone done title={ t("mvp") } date={ moment('2014-01') }>
                                <ul>
                                    <li>{ t("usercount_100k") }</li>
                                    <li>{ t("coursecount_20k") }</li>
                                </ul>
                            </Milestone>
                            <Milestone done title={ t("new_platform") } date={ moment('2015-05') }>
                                <ul>
                                    <li>{ t("api_plus_mean_fw") }</li>
                                    <li>{ t("usercount_300k") }</li>
                                    <li>{ t("coursecount_40k") }</li>
                                </ul>
                            </Milestone>
                            <Milestone done title={ t("crowdsale") } date={ moment('2017-11') } />
                            <Milestone title={ t("ico") } date={ moment('2018-01') } />
                            <Milestone title={ t("core_features") } date={ moment('2018-06') }>
                                <ul>
                                    <li>{ t("wallets") }</li>
                                    <li>{ t("token_interop") }</li>
                                </ul>
                            </Milestone>
                            <Milestone title={ t("value_services") } date={ moment('2018-12') }>
                                <ul>
                                    <li>{ t("full_offchain_interop") }</li>
                                </ul>
                            </Milestone>
                            <Milestone title={ t("third_entities") } date={ moment("2019-06") }>
                                <ul>
                                    <li>{ t("entities_design") }</li>
                                    <li>{ t("access_management") }</li>
                                </ul>
                            </Milestone>
                            <Milestone title={ t("value_features") } date={ moment("2019-12") }>
                                <ul>
                                    <li>{ t("product_management") }</li>
                                    <li>{ t("full_integration") }</li>
                                </ul>
                            </Milestone>
                            <Milestone title={ t("api_features") } date={ moment("2020-06") }/>
                        </Roadmap>
                    </PageSection>
                    <PageSection light title={ t('Technology') }>
                        <Text center>{ t('technology_description') }</Text>
                    </PageSection>
                    <PageSection dark title={ t("FAQs") }>
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
                <PageFooter>
                    <FooterBranding logo="/images/color-logo.svg" about={ t('about_tutellus') } socialLinks={ SOCIAL_LINKS } />
                    <FooterNav>
                        <NavCategory title={ t('company') }>
                            <NavLink>Tutellus</NavLink>
                            <NavLink>Platform</NavLink>
                            <NavLink>Roadmap</NavLink>
                            <NavLink>Terms of Use</NavLink>
                        </NavCategory>
                        <NavCategory title={ t('ICO') }>
                            <NavLink>Whitepaper</NavLink>
                            <NavLink>Token Sale</NavLink>
                            <NavLink>Wallet</NavLink>
                            <NavLink>Blog</NavLink>
                            <NavLink>Help</NavLink>
                        </NavCategory>
                        <NavCategory title={ t('CONTACT') }>
                            <NavLink href="mailto:ico@tutellus.com">ico@tutellus.com</NavLink>
                            <NavLink href="//2tel.us/tutellus-address" target="_blank">c/ Henri Dunant, 15. Madrid 28050.</NavLink>
                            <NavLink href="tel://+34910052511">+34 91 00 525 11</NavLink>
                        </NavCategory>
                    </FooterNav>
                </PageFooter>
            </div>
        );
    }
}

export const Home = translate('translation')(HomeElement);
