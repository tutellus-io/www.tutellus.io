//@flow
import React from 'react';
import {translate} from 'react-i18next';
import styled from 'styled-components';
import styles from '../../../styles';
import {
    PageSection,
    SectionContent,
} from '../../../components';

export const ResponsiveIFrame = styled.div`
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    & iframe {
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;
ResponsiveIFrame.displayName = "ResponsiveIFrame";

export const VideoFrame = translate('intro')(styled(({className, t}) =>
    <PageSection className={className} darker>
        <ResponsiveIFrame>
            <iframe src={ `${ t('video_url') }` }
                frameBorder="0"
                allowFullScreen="allowfullscreen" />
        </ResponsiveIFrame>
    </PageSection>
)`
    padding: 1em;

    & ${ SectionContent } {
        margin: 0 auto;
        @media ${ styles.media.tablet } {
            width: 80%;
        }
        @media ${ styles.media.laptop } {
            width: 50%;
        }
    }
`);
VideoFrame.displayName = 'VideoFrame';
