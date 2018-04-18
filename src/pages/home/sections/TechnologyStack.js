//@flow
import * as React from 'react';
import styled from 'styled-components';
import {translate} from 'react-i18next';
import styles from '../../../styles';
import {
    PageSection,
    Triangle,
    SectionTitle,
    Text,
    ResponsiveGrid,
    Feature,
    Layers,
    Layer,
    TechIcon,
} from '../../../components';

export const LayerSection = translate('technology_stack')(({t}) => {
    const loadIcons = key =>
        JSON.parse(t(key)).map((icon, index) =>
            <TechIcon key={ index} src={ icon }/>
        );

    return (
        <PageSection light title={ t('title') }>
            <Text center>{ t('description') }</Text>
            <Layers>
                <Layer>
                    { loadIcons('layer_1') }
                </Layer>
                <Layer>
                    { loadIcons('layer_2') }
                </Layer>
                <Layer>
                    { loadIcons('layer_3') }
                    <span>TUT Token</span>
                </Layer>
                <Layer>
                    { loadIcons('layer_4') }
                    <span>NEM Blockchain</span>
                </Layer>
            </Layers>
        </PageSection>
    );
});

export const NemSection = translate('technology_stack')(styled(({className, t}) =>
    <PageSection className={ className }>
        <SectionTitle dangerouslySetInnerHTML={ {__html: t("powered_nem")} } />
        <Text center>{ t('why_this_blockchain') }</Text>
        <ResponsiveGrid gap="2em 2em">
            {
                JSON.parse(t('features')).map((name, index) =>
                    <Feature key={ index }
                        icon={ t(`${ name }_icon`) }
                        title={ t(`${ name }_title`) }>
                        { t(`${ name }_description`) }
                    </Feature>
                )
            }
        </ResponsiveGrid>
    </PageSection>
)`
    & ${ ResponsiveGrid } {
        @media ${ styles.media.laptop } {
            grid-template-columns: repeat(auto-fit,minmax( 15em,1fr));
        }
    }
`);

export const TechnologyStack = () =>
    <React.Fragment>
        <LayerSection />
        <Triangle color={ styles.colors.athens }/>
        <NemSection/>
    </React.Fragment>;
