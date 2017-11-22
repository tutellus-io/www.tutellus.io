//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    Text,
    Layers,
    Layer,
    TechIcon,
} from '../../../components';
import {CrowdsaleCTA} from './Crowdsale';

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
                ERC20
            </Layer>
            <Layer>
                <TechIcon src="/images/technologies/ether.svg" />
                Ethereum
            </Layer>
        </Layers>
        <CrowdsaleCTA href="/signup">{ t('crowdsale:register_for_the_crowdsale') }</CrowdsaleCTA>
    </PageSection>
);
