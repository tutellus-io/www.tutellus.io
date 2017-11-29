//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    SectionTitle,
    Text,
    SectionImage,
} from '../../../components';
import {Responsive} from '../../../hoc';
import styles from '../../../styles';

export const TheSolution = translate('the_solution')(({t, id}) =>
    <PageSection id={ id } light interstitialImage="/images/tokens.png">
        <SectionTitle dangerouslySetInnerHTML={ {__html: t('title')} } />
        <Text center>{ t('description') }</Text>
        <Responsive queries={ {tablet: styles.media.tablet} }>
            { device =>
                <SectionImage src={ device.tablet ? "/images/thesolution.svg" : "/images/thesolution.mobile.svg" }/>
            }
        </Responsive>
    </PageSection>
);
