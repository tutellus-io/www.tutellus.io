//@flow
import React from 'react';
import {translate} from 'react-i18next';
import styled from 'styled-components';
import {styles} from '../../../styles';
import {
    PageSection,
    SvgFitted,
    Text,
    ResponsiveGrid,
} from '../../../components';

export const Investors = translate('investors')(styled(({className, t}) =>
    <PageSection className={className} light
        title={ t('title') }>
        <Text center>{ t('description') }</Text>
        <ResponsiveGrid>
            {
                JSON.parse(t('investors')).map((name, index) =>
                    <SvgFitted key={ index }
                        height={ t(`${ name }_height`) }
                        name={ t(`${ name }_name`) }
                        src={ t(`${ name }_logo`) } />
                )
            }
        </ResponsiveGrid>
    </PageSection>
)`
    & ${ ResponsiveGrid } {
        grid-gap: 2em 1em;
        @media ${ styles.media.tablet } {
            grid-template-columns: repeat(auto-fit, minmax( 15em,1fr));
        }

        @media ${ styles.media.laptop } {
            grid-template-columns: repeat(auto-fit, minmax( 11em,1fr));
        }
    }
`);
Investors.displayName = 'Investors';
