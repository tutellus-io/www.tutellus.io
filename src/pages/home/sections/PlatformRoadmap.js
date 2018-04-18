//@flow
import React from 'react';
import R from 'ramda';
import {translate} from 'react-i18next';

import {
    PageSection,
    Roadmap,
    Milestone,
    Text,
} from '../../../components';

const RoadmapMilestone = t => (name, index) => {
    const goals = parseInt(t(`${ name }_goals`));
    const done = t(`${ name }_done`) === "true";
    return (
        <Milestone key={ index }
            done={ done }
            title={ t(name) }
            date={ name }>
            { goals > 0 &&
                <ul>
                    {
                        R.range(0, goals).map(goal =>
                            <li key={ goal }>{ t(`${ name }_goal_${ goal }`) }</li>
                        )
                    }
                </ul>
            }
        </Milestone>
    );
};

export const PlatformRoadmap = translate('the_roadmap')(({t, id}) =>
    <PageSection id={ id } dark
        title={ t("title") }>
        <Text center>{ t("description") }</Text>
        <Roadmap>
            {
                JSON.parse(t('milestones')).map(RoadmapMilestone(t))
            }
        </Roadmap>
    </PageSection>
);
PlatformRoadmap.displayName = 'PlatformRoadmap';
