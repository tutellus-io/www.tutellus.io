//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageBanner,
    PageTitle,
    Text,
    PlayButton,
} from '../../../components';

export const ICOIntro = translate()(({t}) =>
    <PageBanner dark backgroundVideo="/images/bgvideo.mp4">
        <PageTitle dangerouslySetInnerHTML={{ __html: t("page_title") }} />
        <Text center dangerouslySetInnerHTML={{ __html: t('page_subtitle') }} />
        <PlayButton video="/images/bgvideo.mp4" />
    </PageBanner>
);
