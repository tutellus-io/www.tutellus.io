//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';

import {TOP_HEADER_HEIGHT} from '../TopHeader';

import {SectionContent} from './Layout';
import {PageTitle} from './Titles';
import styles from '../../styles';

/*::
type BackgroundVideoProps = {|
    className?: string,
    src: string,
|}
*/
const BackgroundVideo /*:ComponentType<BackgroundVideoProps>*/= styled((props/*:BackgroundVideoProps*/) =>
    <video className={ props.className }
           preload="true"
           mute="true"
           autoPlay="true"
           loop="true"
           playsInline="true"
           poster={ `${ props.src }.jpg` }>
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
    padding: 1em;
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
