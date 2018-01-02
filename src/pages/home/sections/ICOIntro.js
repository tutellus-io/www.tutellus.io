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

const IntroComponent = ({t, id}, {S3}) =>
    <PageBanner id={ id } dark backgroundVideo={ `${ S3 }/video/background.mp4` }>
        <PageTitle dangerouslySetInnerHTML={ {__html: t("title")} } />
        <PageSubtitle center dangerouslySetInnerHTML={ {__html: t('subtitle')} } />
        <PlayButton video={ t('video_url') } />
    </PageBanner>;

IntroComponent.propTypes = {
    t: PropTypes.func,
    id: PropTypes.string,
};
IntroComponent.contextTypes = {
    S3: PropTypes.string,
};

export const ICOIntro = translate('intro')(IntroComponent);
