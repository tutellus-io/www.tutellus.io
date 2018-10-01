//@flow
import React from 'react';
import {translate} from 'react-i18next';
import styled from 'styled-components';
import {styles} from '../../../styles';
import {
    PageSection,
    Feature,
    Text,
    SectionImage,
    CrowdsaleCTA,
    ResponsiveGrid,
} from '../../../components';

export const ThePlatform = translate('the_platform')(styled(({className, t, id}) =>
    <PageSection className={ className } id={ id } title={ t('title') }>
        <Text center>{ t('description') }</Text>
        <SectionImage src={ t('background_url') } />
        <ResponsiveGrid minWidth="10em">
            {
                JSON.parse(t('features_order')).map((name, index) =>
                    <Feature landscape key={ index }
                        icon={ t(`${ name }_icon`) }
                        title={ t(`${ name }_title`) }>
                        { t(`${ name }_description`) }
                    </Feature>
                )
            }
        </ResponsiveGrid>
        <CrowdsaleCTA href="https://www.tutellus.com">
            { t('cta_title') }
        </CrowdsaleCTA>
    </PageSection>
)`
    & ${ ResponsiveGrid } {
        margin-bottom: 2em;
        margin-left: 2em;

        @media ${ styles.media.tablet } {
            margin-left: 0;
            font-size: 0.8em;
        }
        @media ${ styles.media.laptop } {
            font-size: 1em;
        }
    }
`);

ThePlatform.displayName = 'ThePlatform';
