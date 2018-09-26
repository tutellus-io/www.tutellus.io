//@flow
/*eslint no-magic-numbers: off*/
import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import {translate} from 'react-i18next';
import styled from 'styled-components';
import {
    PageBanner,
    PageTitle,
    PlayButton,
    SectionContent,
} from '../../../components';

import styles from '../../../styles';

export const ICOIntro = translate('intro')(observer(styled(({className, t}) =>
    <PageBanner className={ className }>
        <PageTitle margin={false}
            dangerouslySetInnerHTML={ {__html: t("title")} } />
        <PlayButton video={ t('video_url') } />
    </PageBanner>
)`
    @media ${ styles.media.tablet } {
        & > ${ SectionContent } {
            grid-template-columns: 1fr;
            grid-column-gap: 1.5em;
        }
    }
`));

ICOIntro.displayName = 'ICOIntro';
ICOIntro.propTypes = {
    t: PropTypes.func,
};
