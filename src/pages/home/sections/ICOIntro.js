//@flow
import React from 'react';
import PropTypes from 'prop-types';
import {translate} from 'react-i18next';
import {observer, inject} from 'mobx-react';
import {
    PageBanner,
    PageTitle,
    PageSubtitle,
    PlayButton,
} from '../../../components';

const IntroComponent = inject('config')(observer(({t, config, id}) =>
    <PageBanner id={ id } dark backgroundVideo={ `${ config.S3 }/video/background.mp4` }>
        <PageTitle dangerouslySetInnerHTML={ {__html: t("title")} } />
        <PageSubtitle center dangerouslySetInnerHTML={ {__html: t('subtitle')} } />
        <PlayButton video={ t('video_url') } />
    </PageBanner>
));

IntroComponent.propTypes = {
    t: PropTypes.func,
    id: PropTypes.string,
};
export const ICOIntro = translate('intro')(IntroComponent);
