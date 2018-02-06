//@flow
import React from 'react';
import PropTypes from 'prop-types';
import {translate} from 'react-i18next';
import {
    PageBanner,
    PageTitle,
    PageSubtitle,
    PlayButton,
} from '../../../components';

const IntroComponent = ({t}) =>
    <PageBanner>
        <PageTitle dangerouslySetInnerHTML={ {__html: t("title")} } />
        <PageSubtitle center dangerouslySetInnerHTML={ {__html: t('subtitle')} } />
        <PlayButton video={ t('video_url') } />
    </PageBanner>
;

IntroComponent.propTypes = {
    t: PropTypes.func,
    id: PropTypes.string,
};
export const ICOIntro = translate('intro')(IntroComponent);
