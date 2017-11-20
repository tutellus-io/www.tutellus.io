//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageBanner,
    PageTitle,
    Text,
    PlayButton,
} from '../../../components';

export const ICOIntro = translate('intro')(({t, id}) =>
    <PageBanner id={ id } dark backgroundVideo="/images/bgvideo.mp4">
        <PageTitle dangerouslySetInnerHTML={{ __html: t("title") }} />
        <Text center dangerouslySetInnerHTML={{ __html: t('subtitle') }} />
        <PlayButton video="/images/bgvideo.mp4" />
    </PageBanner>
);
