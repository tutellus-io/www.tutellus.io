//@flow
import R from 'ramda';
import * as React from 'react';
import styled from 'styled-components';

import {CenteredImage} from './Images';
import {MAX_CONTENT_WIDTH, Text} from './Layout';
import {TOP_HEADER_HEIGHT} from './TopHeader';

import styles from '../styles';
const {margin, colors} = styles;

export const PageContent = styled.div`
/*
    margin-top: 84px;
*/
`;

export const ColumnCenter = styled.div`
/*
    width: 450px;
    margin: 0 auto;
    */
`;

export const SectionContent = styled.div`
    @media ${ styles.media.desktop } {
        width: 80%;
        max-width: ${ MAX_CONTENT_WIDTH }px;
        margin: 0 auto;
    }
`;

const colorSectionBackground = R.cond([
    [R.has('dark'), R.always(colors.darkblue)],
    [R.has('light'), R.always(colors.athens)],
    [R.T, R.always(colors.white)],
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
            <BackgroundVideo src={ props.BackgroundVideo } />
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
    padding-top: 1em;
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
/*
    /*https://www.imi21.com/background-video.php*//*
    width: 100%;
    position: relative;
    max-height: 500px;
    overflow: hidden;
    & > div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${ colors.white };
        & video {
            width: 100%;
        }
        & > ${ SectionContent } {
            width: 100%;
            height:100%;
            position: absolute;
            top: ${ TOP_HEADER_HEIGHT }px;
        }
    }
*/
`;

export const InterstitialImage = styled.img``;

const colorSectionForeground = R.cond([
    [R.has('dark'), R.always(colors.athens)],
    [R.T, R.always('inherit')],
]);

/*:: type pixels = number */
export const centeredObject = width => `
    left: 50%;
    display: block;
    position: relative;
    margin-left: -${ width / 2 }px;
    width: ${ width }px;
`;
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
                display: block;
                position: relative;
                top: .5em;
                height: 1em;
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
export const SectionImage = styled(CenteredImage)`
/*
    margin-bottom: ${ margin.medium };
*/
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
        max-width: 100%;
    }

    @media ${ styles.media.laptop } {
        padding: 3em;
        & ${ InterstitialImage } {
            margin-top: -5.5em;
        }
    }
`;
export const PageTitle = SectionTitle.withComponent('h1');
export const PageSubtitle = styled(Text)`
    text-shadow: 1px 1px 1px black;
`
