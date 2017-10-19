//@flow
// $FlowFixMe: usamos moment/moment para que funcione el transpilado (se podría hacer con webpack)
import moment from 'moment/moment';
import React, {Component} from 'react';
import {injectGlobal} from 'styled-components';

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
            <div>
                <MainHeader>
                    <MainLogo />
                    <MainMenu />
                </MainHeader>;
                <main>
                    <PageBanner title="Reinventing Education through blockchain" image="https://www.tutellus.com/dist/images/home/header/home7.jpg">
                        <PageSubtitle>The EdTech platform which <strong style={ {fontWeight: "bold"} }>pays you</strong> for learning</PageSubtitle>
                        <SectionImage src="https://placehold.it/800x600" />
                        <Text>Tutellus is an EdTech Collaborative Platform running since 2013. Decentralizing our business model and tokenizing assets we realized could change the market forever: rewarding Students for learning, Teachers for the users&rsquo; employability and Companies fo hiring better people in a more efficient way</Text>
                    </PageBanner>;
                    <PageSection>
                        <Row>
                            <Col size={ 2 / 5 }>
                                <SectionTitle>The pain: Studying is hard and is disconnected from employment</SectionTitle>
                                <Text>EdTech platforms hold a very low recurring levels compared with social ones: studying is hard & expensive. And qualified students are not aligned with the real jobs demand: there&rsquo;s a huge gap between Education and Employment.</Text>
                            </Col>
                            <Col size={ 3 / 5 }>
                                <SectionSideImage src="/images/thepain.png" />
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection >
                        <Row>
                            <Col size={ 3 / 5 }>
                                <SectionSideImage src="/images/tokens.png" />
                            </Col>
                            <Col size={ 2 / 5 }>
                                <SectionTitle>The solution: a platform which pays you for learning</SectionTitle>
                                <Text>We generate an own cryptocurrency: the token TUT. The more you learn (or teach), the more money you get. And you also earn money through relationship with companies looking for the best profiles;</Text>
                                <ul>
                                    <li>Students earn money learning</li>
                                    <li>Teachers earn [more] money teaching better</li>
                                    <li>Companies get better candidates to hire</li>
                                </ul>
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection title="How the token works" image="/images/HTTW.png">
                        <Text>We promote an ecosystem where all players get profit: Students, Teachers and Companies. Through the tokens Pool and the Market as inside points, students & teachers can study free, learn more and get money through cryptocurrency flows inside the DAPP.</Text>
                        <CenteredBlock>
                            <CTAButton primary>Download Whitepaper</CTAButton>
                        </CenteredBlock>
                    </PageSection>
                    <PageSection title="Live platform running since 2013" image="https://www.tutellus.com/bower_components/tutellus.css/images/home/desktop-computer.jpg">
                        <Features>
                            <Feature title="1.000.000" image="https://www.tutellus.com/bower_components/tutellus.css/images/landings/titulos-universitarios/icon-yellow-title.svg">
                                students
                            </Feature>
                            <Feature title="+2.000.000" image="http://placehold.it/50x50">
                                transactions
                            </Feature>
                            <Feature title="+1b min" image="https://www.tutellus.com/bower_components/tutellus.css/images/landings/titulos-universitarios/icon-green-content.svg">
                                learning
                            </Feature>
                            <Feature title="$10m" image="https://www.tutellus.com/bower_components/tutellus.css/images/landings/unlimited-corporate/icon-orange-cash.svg">
                                transactioned
                            </Feature>
                        </Features>
                        <Quote href="https://elpais.com/economia/2015/07/10/actualidad/1436521761_125197.html" cite="El Pais, 2016">
                            Tutellus, the leading Educational platform in the spanish spoken world.
                        </Quote>
                        <CenteredBlock>
                            <CTAButton secondary>Visit Tutellus</CTAButton>
                        </CenteredBlock>
                    </PageSection>
                    <PageSection>
                        <SectionTitle>Team</SectionTitle>
                        <Row>
                            <Col size={ 1 / 5 }>
                                <TeamMember name="Miguel Caballero" title="CEO" photo="https://www.tutellus.com/bower_components/tutellus.css/images/team/Miguel.jpg">
                                    Engineer & MBA. 20 years in tech industry
                                </TeamMember>
                            </Col>
                            <Col size={ 1 / 5 }>
                                <TeamMember name="Javier Ortiz" title="CTO" photo="https://www.tutellus.com/bower_components/tutellus.css/images/team/JaviSok.jpg">
                                    Fullstack Engineer, 20 years making DevTeams
                                </TeamMember>
                            </Col>
                            <Col size={ 1 / 5 }>
                                <TeamMember name="Carlos López" title="Engineer" photo="https://www.tutellus.com/bower_components/tutellus.css/images/team/Carlos.jpg">
                                    Engineer, Backend & Blockchain Developer
                                </TeamMember>
                            </Col>
                            <Col size={ 1 / 5 }>
                                <TeamMember name="Javier Calvo" title="Data Scientist" photo="https://www.tutellus.com/bower_components/tutellus.css/images/team/JaviMat.jpg">
                                    Engineer, Mathematician and Tokenomics
                                </TeamMember>
                            </Col>
                            <Col size={ 1 / 5 }>
                                <TeamMember name="Karol Szymanczak" title="Designer" photo="https://www.tutellus.com/bower_components/tutellus.css/images/team/Karol.jpg">
                                    UX & Designer. She makes everything pretty
                                </TeamMember>
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection title="Crowdsale">
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
                                    <td>Token name</td><td>TUT</td>
                                </tr>
                                <tr>
                                    <td>Pre ICO date</td><td>very soon</td>
                                </tr>
                                <tr>
                                    <td>Token Sale date</td><td>To be announced</td>
                                </tr>
                                <tr>
                                    <td>Total supply</td><td>1.000.000.000 TUT</td>
                                </tr>
                                <tr>
                                    <td>For Sale</td><td>600.000.000 TUT</td>
                                </tr>
                                <tr>
                                    <td>Soft Cap</td><td>$8.000.000</td>
                                </tr>
                                <tr>
                                    <td>Accepted Currencies</td><td>ETH</td>
                                </tr>
                            </tbody>
                        </CrowdsaleTable>
                        <CenteredBlock>
                            <CTAButton secondary>Register for the Crowdsale</CTAButton>
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
                    <PageSection title="FAQs">
                        <FAQ title="Are there any restrictions for purchasing TUT?">
                            Offering of TUT is currently halted for the citizens and residents of USA and China.
                        </FAQ>

                        <FAQ title="How can I purchase TUT?">
                    For the detailed instructions for TUT purchase please read the manual here or watch the video.
                        </FAQ>

                        <FAQ title="When I log in to TUT wallet nothing happens... What should I do?">
                            <p>
                    Login window disappears in 5-30 seconds after you&rsquo;re successfully authorized.
                            </p>
                            <p>
                    If nothing happens – check your Internet connection; refresh the page (Ctrl+F5 or Cmd+Shift+R for Mac) and try again.
                            </p>
                        </FAQ>

                        <FAQ title="I’ve sent my ETH twice with the same DATA, what shall I do?">
                    It is ok, but one of the transactions will be executed later (2-3 days)
                        </FAQ>

                        <FAQ title="Can I buy TUT tokens by transferring ETH from exchanges?">
                    No, you need to transfer from your ETH wallet using transaction DATA.
                        </FAQ>

                        <FAQ title="Is TUT an ERC20 token?">Yes, it is.</FAQ>

                        <FAQ title="I can’t find TUT on exchanges, why?">
                    Will are in the process of listing on several exchanges including the top ones.
                        </FAQ>

                        <FAQ title="After making a contribution in ETH, I see only &ldquo;pending&rdquo; status in my TUT wallet… Is it ok?">
                            <ol>
                                <li>
                        Double check all steps in &ldquo;How can I buy TUT?&rdquo; question (see above).
                                </li>
                                <li>
                    Make sure you’ve made a transfer from ETH wallet to your token wallet (using transaction DATA) via https://etherscan.io/ (check txhash).
                                </li>
                                <li>
                        Wait at least several hours after contributing. ETH transactions sometimes have delays.
                                </li>
                                <li>
                    In other cases please contact Support Team directly: @xxx in Telegram or @xxx in Slack.
                                </li>
                            </ol> </FAQ>

                        <FAQ title="Explain why TUT token is a promising project.">
                            <ol>
                                <li>
                        TUT token platform is already running since 2013.
                                </li>
                                <li>
                    We already have a big Ecosystem in movement: 1 million students, 120.000 videocourses and 3.000 teachers.
                                </li>
                                <li>
                        We have proved we know to make money and to create value.
                                </li>
                                <li>
                    We already have 3.000+ contributors (by xxxx 2017).
                                </li>
                                <li>
                        Tutellus has a world class team & advisors, including:  xxx
                                </li>
                            </ol>
                        </FAQ>

                        <FAQ title="What is Tutellus?">
                    Tutellus is the leading Collaborative EdTech platform in the spanish spoken world. We are in the market since 2013 han have now a community of 1 million students, 120.000 videocourses and 3.000 teachers in 160 countries.
                        </FAQ>

                        <FAQ title="Why is Tutellus decentralizing and tokenizing their business?">
                    We are sure that we can change the education forever. Transforming Tutellus from a collaborative plataform through a decentralized APP, we can solve main market problems: poor motivation and recurring of students and teachers and more proximity between the Employment and Learning worlds.
                        </FAQ>

                        <FAQ title="What are the benefits for token holders?">
                        For ICO holders Tutellus will provide these tokens in best conditions ever: with a discount between 15-30% and in a very low price. Putting the token in movement through our comunity, their usage will increase and the value added in all ecosystem will continue a positive tendence.
                        </FAQ>

                        <FAQ title="What are the advantages of Tutellus compared to other related projects?">
                            <p>
                    We start with a big comunity of people willing to use the token: they are not users of other services, they are students and teachers of videocourses.
                            </p>
                            <p>
                        We solve problems for all kind of players wich participate in the ecosystem: students, teachers and companies.
                            </p>
                            <p>
                    Our token is a natural consecuence of the business: it is the natural way to evolve.
                            </p>
                            <p>
                        We hold a leading position in all latin countries, so the branding we&rsquo;ve built in the EdTech and startup ecosystem is other positive asset to power up with.
                            </p>
                        </FAQ>

                        <FAQ title="Is Tutellus a safe platform?">
                            <p>We&rsquo;ve been running since 2013 and never have been hacked.</p>
                            <p>We built a solid infrastructure developed over Docker based on microservices over an API based on NodeJS. All Tutellus is under SSL protocols.</p>
                        </FAQ>
                    </PageSection>
                </main>
                {/* TODO: Falta el footer */}
                <footer>Footer</footer>
            </div>
        );
    }
}

export default App;
