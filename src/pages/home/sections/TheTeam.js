//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    Text,
    Team,
    TeamMember,
} from '../../../components';

export const TheTeam = translate('the_team')(({t, id}) =>
    <PageSection id={ id } title={ t('title') }>
        <Text center>{ t('description') }</Text>
        <Team>
            <TeamMember name="Miguel Caballero" title="CEO" photo="//www.tutellus.com/bower_components/tutellus.css/images/team/Miguel.jpg" socialProfiles={ {
                linkedin: '//www.linkedin.com/in/micaballero/',
                twitter: '//twitter.com/mcaballero',
            } }>
                { t('mcaballero') }
            </TeamMember>
            <TeamMember name="Javier Ortiz" title="CTO" photo="//www.tutellus.com/bower_components/tutellus.css/images/team/JaviSok.jpg" socialProfiles={ {
                linkedin: '//www.linkedin.com/in/sokardys/',
                github: '//github.com/sokardys',
                twitter: '//twitter.com/sokardys',
            } }>
                { t('jortiz') }
            </TeamMember>
            <TeamMember name="Carlos López" title="Engineer" photo="//www.tutellus.com/bower_components/tutellus.css/images/team/Carlos.jpg" socialProfiles={ {
                linkedin: '//www.linkedin.com/in/carlos-lópez-46314962/',
                github: '//github.com/carlos-lopez',
                twitter: '//twitter.com/clpz84',
            } }>
                { t('clopez') }
            </TeamMember>
            <TeamMember name="Javier Calvo" title="Data Scientist" photo="//www.tutellus.com/bower_components/tutellus.css/images/team/JaviMat.jpg" socialProfiles={ {
                linkedin: '//www.linkedin.com/in/jcalvo92/',
            } }>
                { t('jcalvo') }
            </TeamMember>
            <TeamMember name="Karol Szymanczak" title="Designer" photo="//www.tutellus.com/bower_components/tutellus.css/images/team/Karol.jpg" socialProfiles={ {
                linkedin: '//www.linkedin.com/in/karolina-szymańczak-18206838/',
            } }>
                { t('karol') }
            </TeamMember>
        </Team>
    </PageSection>
);
