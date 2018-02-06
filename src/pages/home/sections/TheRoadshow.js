//@flow
/* eslint no-magic-numbers: off */
import React from 'react';
import {translate} from 'react-i18next';
import {inject, observer} from 'mobx-react';
import {
    PageSection,
    Text,
    Roadshow,
    RoadshowEvent,
} from '../../../components';

import {
    withLoading,
} from '../../../hoc';

const LoadingRoadshow = withLoading(translate('roadshow')(({t, className, events}) =>
    <Roadshow className={ className }>
        {
            events.map(({photo, description_i18n, done}, index) =>
                <RoadshowEvent key={ index }
                    photo={ photo }
                    title={ t(`${ description_i18n }_title`) }
                    date={ t(`${ description_i18n }_date`) }
                    done={ done }/>
            )
        }
    </Roadshow>
));

export const TheRoadshow = translate('roadshow')(inject('store')(observer(({t, store}) =>
    <PageSection dark title={ t('title') }>
        <Text center>{ t('description') }</Text>
        {
            <LoadingRoadshow loading={ store.config.isStorageLoading() }
                events={ store.config.shows}
            />
        }
    </PageSection>
)));
