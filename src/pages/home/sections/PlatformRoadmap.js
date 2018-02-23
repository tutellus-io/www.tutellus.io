//@flow
import React from 'react';
import R from 'ramda';
import {translate} from 'react-i18next';
import {inject, observer} from 'mobx-react';

import {
    PageSection,
    Roadmap,
    Milestone,
    Text,
} from '../../../components';

import {
    withLoading,
} from '../../../hoc';

const RoadmapMilestone = t => (milestone, i) =>
    <Milestone key={ i }
               done={ milestone.done }
               title={ t(`milestone_${ i }`) }
               date={ milestone.date }>
		{ milestone.goal_count > 0 &&
        <ul>{ R.range(0, milestone.goal_count).map(goal =>
            <li key={ goal }>{ t(`milestone_${ i }_goal_${ goal }`) }</li>
        ) }</ul>
		}
    </Milestone>;

const LoadingRoadmap = withLoading(Roadmap);

export const PlatformRoadmap = translate('the_roadmap')(inject('store')(observer(({t, id, store}) =>
    <PageSection id={ id } title={ t("title") }>
        <Text center>{ t("description") }</Text>
        <LoadingRoadmap loading={store.config.isStorageLoading()}>{ store.config.milestones.map(RoadmapMilestone(t)) }</LoadingRoadmap>
    </PageSection>
)));
