//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    Team,
    TeamMember,
} from '../../../components';

export const Advisors = translate('advisors')(({t}) =>
    <PageSection title={ t('title') }>
        <Team>
            <TeamMember name="Miguel Solana"
                        photo="/images/advisors/miguel_solana.jpg">
                { t('solana') }
            </TeamMember>
            <TeamMember name="Jesús Pérez"
                        photo="/images/advisors/jesus_perez.jpg">
                { t('jesus_perez') }
            </TeamMember>
            <TeamMember name="Rodrigo de la Cruz"
                        photo="/images/advisors/rodrigo_de_la_cruz.jpg">
                { t('delacruz') }
            </TeamMember>
            <TeamMember name="Dani Cellero"
                        photo="/images/advisors/dani_cellero.jpg">
                { t('cellero') }
            </TeamMember>
        </Team>
    </PageSection>
);
