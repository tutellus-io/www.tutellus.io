//@flow
import React from 'react';
import R from 'ramda';
import {inject, observer} from 'mobx-react';
import {translate} from 'react-i18next';
import {
    PageSection,
    SectionTitle,
    Subsection,
    Text,
    Layers,
    Layer,
    TechIcon,
    Traits,
    Trait,
} from '../../../components';
import {withLoading} from '../../../hoc';

const map = R.addIndex(R.map);

const DeferredTraits = withLoading(Traits);

const TechnologyCriteria = translate('technology_stack')(inject('store')(observer(({t, store}) =>
    <DeferredTraits loading={ store.config.isStorageLoading() }
                    columns="3">
    { map((criteria, i) =>
        <Trait key={ i }
               title={ t(`${ criteria.i18n }_title`) }
               icon={ criteria.icon }>
            { t(`${ criteria.i18n }_description`) }
        </Trait>
    , store.config.technologies) }
    </DeferredTraits>
)));


export const TechnologyStack = translate('technology_stack')(({t, id}) =>
    <PageSection id={ id } light title={ t('title') }>
        <Text center>{ t('description') }</Text>
        <Layers>
            <Layer>
                <TechIcon src="/images/technologies/react.svg" />
                <TechIcon src="/images/technologies/ios.svg" />
                <TechIcon src="/images/technologies/graphql.svg" />
                <TechIcon src="/images/technologies/android.svg" />
                <TechIcon src="/images/technologies/html5.svg" />
            </Layer>
            <Layer>
                <TechIcon src="/images/technologies/mongodb.svg" />
                <TechIcon src="/images/technologies/docker.svg" />
                <TechIcon src="/images/technologies/tensorflow.svg" />
                <TechIcon src="/images/technologies/r.svg" />
                <TechIcon src="/images/technologies/redis.svg" />
                <TechIcon src="/images/technologies/nodejs.svg" />
            </Layer>
            <Layer>
                <TechIcon src="/images/technologies/erc20.svg" />
                <span>TUT Token</span>
            </Layer>
            <Layer>
                <TechIcon src="/images/technologies/nem.svg" />
                <span>NEM Blockchain</span>
            </Layer>
        </Layers>
        <Subsection>
            <SectionTitle>
                Powered by <strong>NEM</strong><img src="/images/technologies/nem.svg" alt="NEM Logo"/>
            </SectionTitle>
            <Text center>{ t('why_this_blockchain') }</Text>
            <TechnologyCriteria />
        </Subsection>
    </PageSection>
);
