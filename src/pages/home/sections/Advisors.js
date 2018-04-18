//@flow
/*eslint no-magic-numbers: off*/
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    Advisor,
    Text,
    Carousel,
} from '../../../components';

const carousel_settings = {
    slidesToShow: 5,
    infinite: false,
    responsive: [
        {breakpoint: 480, settings: {slidesToShow: 1}},
        {breakpoint: 768, settings: {slidesToShow: 2}},
        {breakpoint: 1140, settings: {slidesToShow: 3}},
    ],
};

export const Advisors = translate('advisors')(({t}) =>
    <PageSection title={ t('title') }>
        <Text center>{ t('description') }</Text>
        <Carousel { ...carousel_settings }>{
            JSON.parse(t('advisors')).map((member, index) =>
                <Advisor key={index}
                    name={ t(`${ member }_name`) }
                    photo={ t(`${ member }_photo`) }>
                    { t(`${ member }_bio`) }
                </Advisor>
            )
        }</Carousel>
    </PageSection>
);
