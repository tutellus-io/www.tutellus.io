//@flow
import R from 'ramda';
import * as React from 'react';
import styled from 'styled-components';

import {MAX_CONTENT_WIDTH, Text} from './Layout';
import {TOP_HEADER_HEIGHT} from './TopHeader';

import styles from '../styles';

export const PageContent = styled.div``;

export const ColumnCenter = styled.div``;

export const SectionContent = styled.div`
    @media ${ styles.media.desktop } {
        width: 80%;
        max-width: ${ MAX_CONTENT_WIDTH }px;
        margin: 0 auto;
    }
`;

const colorSectionBackground = R.cond([
    [R.has('dark'), R.always(styles.colors.darkblue)],
    [R.has('light'), R.always(styles.colors.athens)],
    [R.T, R.always(styles.colors.white)],
]);
const section_styles = `
    padding: 1em;
`;
const BackgroundVideo = styled(props =>
    <video preload="true" mute="true" autoPlay="true" loop="true" playsInline="true" poster={ `${ props.src }.jpg` }>
        <source src={ props.src } />
    </video>
)`
`;
export const PageBanner = styled(props =>
    <section id={ props.id } className={ props.className }>
        <div>
            <BackgroundVideo src={ props.backgroundVideo } />
            <SectionContent>
                { props.title &&
                <PageTitle>{ props.title }</PageTitle>
                }
                { props.children }
            </SectionContent>
        </div>
    </section>
)`
    ${ section_styles }
    margin-top: ${ TOP_HEADER_HEIGHT.SMALL }px;
    padding: 3em 0;
    background: url(${ props => `${ props.backgroundVideo }.jpg` }) no-repeat;
    background-size: cover;
    color: white;

    & > div > video {
        display: none;
    }
    @media ${ styles.media.tablet } {
        margin-top: 0;
        padding-top: calc(${ TOP_HEADER_HEIGHT.BIG }px + 1em);
    }
`;

export const InterstitialImage = styled.img``;

const colorSectionForeground = R.cond([
    [R.has('dark'), R.always(styles.colors.athens)],
    [R.T, R.always('inherit')],
]);

const TITLE_UNDERLINE_WIDTH = 5;//em
export const SectionTitle = styled.h2`
    margin-bottom: 1em;
    font-size: 1.5em;
    line-height: 1.25em;
    text-align: center;
    text-transform: uppercase;

    & em {
        display: block;
        font-size: 1.2em;
    }

    ${ props =>
        props.simple || `
            &:after {
                content: "";
                background: url('/images/underlined.svg') no-repeat;
                background-size: 100% 100%;
                display: block;
                position: relative;
                top: .5em;
                height: 0.5em;
                width: ${ TITLE_UNDERLINE_WIDTH }em;
                left: calc(50% - ${ TITLE_UNDERLINE_WIDTH / 2 }em);
            }`
}

    @media ${ styles.media.tablet } {
        font-size: 2em;
    }
    @media ${ styles.media.laptop } {
        font-size: 2.3em;
    }

`;
export const SectionImage = styled.img`
    display: block;
    max-width: 100%;
    margin: 0 auto;
`;
export const PageSection = styled(props =>
    <section id={ props.id } className={ props.className }>
        { props.interstitialImage &&
            <InterstitialImage src={ props.interstitialImage } />
        }
        <SectionContent>
            { props.title &&
            <SectionTitle>{ props.title }</SectionTitle>
            }
            { props.image &&
            <SectionImage src={ props.image } />
            }
            { props.children }
        </SectionContent>
    </section>
)`
    ${ section_styles }
    background: ${ colorSectionBackground };
    color: ${ colorSectionForeground };

    & ${ InterstitialImage } {
        display: block;
        width: 20em;
        max-width: 100%;
        margin: 0 auto;
        margin-top: -3.5em;
        margin-bottom: 1.5em;
    }
    ${ props => props.interstitialImage && `
        /* make room for the image */
        margin-top: 2em;
    ` }

    & ${ SectionImage } {
        display: block;
        max-width: 100%;
        margin: 1.5em auto;
    }

    @media ${ styles.media.laptop } {
        padding: 3em;
        & ${ InterstitialImage } {
            margin-top: -5.5em;
        }
        & ${ SectionImage } {
            width: 70%;
            margin: 3em auto;
        }
    }
`;
export const PageTitle = SectionTitle.withComponent('h1');
export const PageSubtitle = styled(Text)`
    text-shadow: 1px 1px 1px black;
`;
