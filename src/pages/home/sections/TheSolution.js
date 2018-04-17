//@flow
import * as React from 'react';
import {translate} from 'react-i18next';
import styled from 'styled-components';
import {
    PageSection,
    ResponsiveGrid,
    Feature,
    SectionTitle,
    Text,
    Triangle,
} from '../../../components';

const Solution = translate('the_solution')(styled(({className, t}) =>
    <PageSection className={ className }
                 dark
                 backgroundImage={ t('background_url') }>
        <SectionTitle dangerouslySetInnerHTML={ {__html: t('title')} } />
        <Text center>{ t('description') }</Text>
        <ResponsiveGrid minWidth="8em">
            {
                JSON.parse(t('solutions')).map((name, index) =>
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
    margin-top: -2em;
    padding-top: 4em;
`);

export const TheSolution = () =>
    <React.Fragment>
        <Triangle color={ 'white' }/>
        <Solution />
    </React.Fragment>;
