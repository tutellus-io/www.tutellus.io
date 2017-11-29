//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    SectionImage,
    SectionTitle,
    Text,
} from '../../../components';
import {Responsive} from '../../../hoc';
import styles from '../../../styles';

export const ThePain = translate('the_pain')(({t, id}) =>
    <PageSection id={ id }>
        <SectionTitle dangerouslySetInnerHTML={ {__html: t('title')} } />
        <Text center>{ t('description') }</Text>
        <Responsive queries={ {tablet: styles.media.tablet} }>
            { device =>
                <SectionImage big src={ device.tablet ? "/images/thepain.svg" : "/images/thepain.mobile.svg" } />
            }
        </Responsive>
    </PageSection>
);
