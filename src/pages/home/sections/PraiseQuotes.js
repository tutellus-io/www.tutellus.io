//@flow
import React from 'react';
import {translate} from 'react-i18next';

import {
    PageSection,
    Carousel,
    Text,
    Praise,
} from '../../../components';


export const PraiseQuotes = translate('praises')(({id, t}) =>
    <PageSection id={ id } darker title={ t('title') }>
        <Text center>{ t('description') }</Text>
        <Carousel>{
            JSON.parse(t('praises')).map((praise, key) =>
                <Praise key={ key }
                        id={ praise }
                        name={ t(`${ praise }_name`) }
                        logo={ t(`${ praise }_logo`) }
                        href={ t(`${ praise }_url`) }>
                    { t(`${ praise }_headline`) }
                </Praise>
            )
        }</Carousel>
    </PageSection>
);
