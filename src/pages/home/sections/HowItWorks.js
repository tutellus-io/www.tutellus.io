//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    Text,
    SectionImage,
} from '../../../components';
import {Responsive} from '../../../hoc';
import styles from '../../../styles';

export const HowItWorks = translate('how_it_works')(({t, id}) =>
    <PageSection id={ id } darker title={ t('title') } >
        <Text center>{ t('description') }</Text>
        <Responsive queries={ {tablet: styles.media.tablet} }>{ device =>
            <SectionImage src={ device.tablet ? "/images/howitworks.svg" : "/images/howitworks.mobile.svg" }
                          style={ {marginBottom: 0} } />
        }</Responsive>
    </PageSection>
);
