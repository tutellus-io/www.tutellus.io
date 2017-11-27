//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageBanner,
    PageTitle,
    PageSubtitle,
    PlayButton,
} from '../../../components';
import {S3} from '../../../config';

export const ICOIntro = translate('intro')(({t, id}) =>
    <PageBanner id={ id } dark backgroundVideo={ `${ S3 }/video/background.mp4` }>
        <PageTitle dangerouslySetInnerHTML={ {__html: t("title")} } />
        <PageSubtitle center dangerouslySetInnerHTML={ {__html: t('subtitle')} } />
        <PlayButton video={ t('video_url') } />
    </PageBanner>
);
