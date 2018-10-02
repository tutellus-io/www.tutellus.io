import React from 'react';
import styled from 'styled-components';

export const ResponsiveIFrame = styled(({className, video}) =>
    <div className={className}>
        <iframe src={ video }
            frameBorder="0"
            allowFullScreen="allowfullscreen" />
    </div>
)`
    margin: 0 auto;
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    width: 100%;
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
