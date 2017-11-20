//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    Team,
    TeamMember,
} from '../../../components';

export const TheTeam = translate()(({t}) =>
    <PageSection title={ t('team_title') }>
        <Team>
            <TeamMember name="Miguel Caballero" title="CEO" photo="https://www.tutellus.com/bower_components/tutellus.css/images/team/Miguel.jpg">
                { t('mcaballero_bio') }
            </TeamMember>
            <TeamMember name="Javier Ortiz" title="CTO" photo="https://www.tutellus.com/bower_components/tutellus.css/images/team/JaviSok.jpg">
                { t('jortiz_bio') }
            </TeamMember>
            <TeamMember name="Carlos López" title="Engineer" photo="https://www.tutellus.com/bower_components/tutellus.css/images/team/Carlos.jpg" socialProfiles={ {
                github: '//github.com/carlos-lopez',
                twitter: '//twitter.com/clpz84',
            } }>
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
);
