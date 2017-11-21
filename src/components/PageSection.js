//@flow
import R from 'ramda';
import * as React from 'react';
import styled from 'styled-components';

import {CenteredImage} from './Images';
import {MAX_CONTENT_WIDTH} from './Layout';
import {TOP_HEADER_HEIGHT} from './TopHeader';

import styles from '../styles';
const {margin, colors} = styles;

export const PageContent = styled.div`
    margin-top: 84px;
`;

export const SectionContent = styled.div`
    max-width: ${ MAX_CONTENT_WIDTH }px;
    width: 80%;
    margin: 0 auto;
`;

const PAGE_SECTION_VERTICAL_PADDING = 40;
//TODO: el video necesita un poster
export const PageBanner = styled(props =>
    <section id={ props.id } className={ props.className }>
        <div>
            <video preload="true" mute="true" autoPlay="true" loop="true" playsInline="true">
                <source src={ props.backgroundVideo } />
            </video>
            <SectionContent>
                { props.title &&
                <PageTitle>{ props.title }</PageTitle>
                }
                { props.children }
            </SectionContent>
        </div>
    </section>
)`
    /*https://www.imi21.com/background-video.php*/
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
`;

const colorSectionBackground = R.cond([
    [R.has('dark'), R.always(colors.darkblue)],
    [R.has('light'), R.always(colors.athens)],
    [R.T, R.always(colors.white)],
]);
export const InterstitialImage = styled.img`
    display: block;
    margin: 0 auto;
    margin-top: -${ 4 * PAGE_SECTION_VERTICAL_PADDING }px;
    height: ${ 3 * PAGE_SECTION_VERTICAL_PADDING }px;
`;
const colorSectionForeground = R.cond([
    [R.has('dark'), R.always(colors.athens)],
    [R.T, R.always('inherit')],
]);
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
    background: ${ colorSectionBackground };
    color: ${ colorSectionForeground };
    padding: ${ PAGE_SECTION_VERTICAL_PADDING }px 0;
    ${ props => props.interstitialImage && `
        padding-top: ${ 3 * PAGE_SECTION_VERTICAL_PADDING }px;
    ` }
`;

/*:: type pixels = number */
export const centeredObject = width => `
    left: 50%;
    display: block;
    position: relative;
    margin-left: -${ width / 2 }px;
    width: ${ width }px;
`;
const TITLE_UNDERLINE_WIDTH = 100;
export const SectionTitle = styled.h2`
    ${ styles.text.huge }
    text-transform: uppercase;
    font-weight: 300;
    margin-bottom: 40px;
    text-align: center;

    ${ props =>
        props.simple || `
            &:after {
                background: url('/images/underlined.svg') no-repeat;
                content: "";
                width: ${ TITLE_UNDERLINE_WIDTH }px;
                display: block;
                height: 15px;
                position: relative;
                top: 20px;
                left: calc(50% - ${ TITLE_UNDERLINE_WIDTH / 2 }px);
            }`
}

    & em {
        display: block;
        font-size: 1.2em;
    }
`;

export const PageTitle = SectionTitle.withComponent('h1');
export const SectionImage = styled(CenteredImage)`
    margin-bottom: ${ margin.medium };
`;
