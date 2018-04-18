//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    ResponsiveGrid,
    Feature,
    SectionTitle,
    Text,
} from '../../../components';

export const ThePain = translate('the_pain')(({t, id}) =>
    <PageSection id={ id }>
        <SectionTitle dangerouslySetInnerHTML={ {__html: t('title')} } />
        <Text center>{ t('description') }</Text>
        <ResponsiveGrid minWidth="8em">
            {
                JSON.parse(t('problems')).map((name, index) =>
                    <Feature key={ index }
                        icon={ t(`${ name }_icon`) }
                        title={ t(`${ name }_title`) }>
                        { t(`${ name }_description`) }
                    </Feature>
                )
            }
        </ResponsiveGrid>
    </PageSection>
);
