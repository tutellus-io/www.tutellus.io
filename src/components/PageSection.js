//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import R from 'ramda';
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
/*::
type BackgroundVideoProps = {|
    className?: string,
    src: string,
|}
*/
const BackgroundVideo /*:ComponentType<BackgroundVideoProps>*/= styled((props/*:BackgroundVideoProps*/) =>
    <video className={ props.className } preload="true" mute="true" autoPlay="true" loop="true" playsInline="true" poster={ `${ props.src }.jpg` }>
        <source src={ props.src } />
    </video>
)`
`;
/*::
type PageBannerProps = {|
    id: string,
    className?: string,
    dark: bool,
    backgroundVideo: string,
    children?: React.Node,
|}
*/
export const PageBanner/*:ComponentType<PageBannerProps>*/ = styled((props/*:PageBannerProps*/) =>
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
    background: url(${ props => `${ props.backgroundVideo }.jpg` }) no-repeat;
    background-size: cover;
    color: white;

    & > ${ SectionContent } {
        padding: 3em;
    }
    & ${ BackgroundVideo } {
        display: none;
    }

    @media ${ styles.media.tablet } {
        padding: 0;
        margin: 0;
        width: 100%;
        position: relative;
        max-height: 500px;
        overflow: hidden;
        & > div {
            width: 100%;
            height: 100%;
            max-height: 28em;
            display: flex;
            justify-content: center;
            align-items: center;
            color: ${ styles.colors.white };
            & ${ BackgroundVideo } {
                display: block;
                width: 100%;
            }
            & > ${ SectionContent } {
                padding-top: ${ TOP_HEADER_HEIGHT.BIG }px;
                width: 100%;
                height: 100%;
                position: absolute;
            }
        }
    }
`;

export const InterstitialImage = styled.img``;

const colorSectionForeground = R.cond([
    [R.has('dark'), R.always(styles.colors.athens)],
    [R.T, R.always('inherit')],
]);

const TITLE_UNDERLINE_WIDTH = 5;//em
/*:: type SectionTitleProps = {simple?: bool} */
export const SectionTitle /*:ComponentType<SectionTitleProps>*/= styled.h2`
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
/*::
type PageSectionProps = {|
    id?: string,
    className?: string,
    title?: string,
    image?: string,
    interstitialImage?: string,
    dark?: bool,
    light?: bool,
    children?: React.Node,
|}
*/
export const PageSection/*:ComponentType<PageSectionProps>*/ = styled((props/*:PageSectionProps*/) =>
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
        max-width: 50%;
        margin: 0 auto;
        margin-top: -2.5em;
        margin-bottom: 1.5em;
        @media ${ styles.media.tablet } {
            margin-top: -3.5em;
            width: 20em;
            max-width: 100%;
        }
    }
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
export const PageTitle /*:ComponentType<SectionTitleProps>*/= (SectionTitle/*:any*/).withComponent('h1');
export const PageSubtitle = styled(Text)`
    text-shadow: 1px 1px 1px black;
`;
