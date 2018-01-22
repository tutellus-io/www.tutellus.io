//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {inject, observer} from 'mobx-react';
import {
    PageSection,
    Team,
    TeamMember,
    Loading,
} from '../../../components';

const Advisor = translate('advisors')(({t, name, photo, description_i18n}) =>
    <TeamMember name={name}
                photo={photo}>
        { t(description_i18n) }
    </TeamMember>
);

export const Advisors = translate('advisors')(inject('store')(observer(({t, store}) =>
    <PageSection title={ t('title') }>
        <Team>
            {
                store.config.isStorageLoading()
                    ? <Loading/>
                    : store.config.hasAdvisors() &&
                      store.config.advisors.map((advisor, index) => <Advisor key={index} {...advisor}/>)
                    
            }
        </Team>
    </PageSection>

)));
