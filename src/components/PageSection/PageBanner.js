//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';

import {TOP_HEADER_HEIGHT} from '../TopHeader';

import {SectionContent} from './Layout';
import {PageTitle} from './Titles';
import styles from '../../styles';

const background = "https://dev-res.thumbr.io/ico/images/background2.jpg";
const responsive_background = "https://dev-res.thumbr.io/ico/images/background2.jpg";
const responsive = image =>
    `${ image }?size=${ window.outerWidth }s`;

/*::
type PageBannerProps = {|
    className?: string,
    children: React.Node,
    title?: string,
|}
*/

export const PageBanner/*:ComponentType<PageBannerProps>*/ = styled((props/*:PageBannerProps*/) =>
    <section className={ props.className }>
        <SectionContent>
            { props.title &&
            <PageTitle>{ props.title }</PageTitle>
            }
            { props.children }
        </SectionContent>
    </section>
)`
    padding: 1em;
    padding-top: calc(${ TOP_HEADER_HEIGHT.SMALL }px + 3em);
    background: url(${ responsive(responsive_background) }) no-repeat 50%;
    background-size: cover;
    color: white;

    & ${ SectionContent } {
        display: grid;
        justify-items: center;
        grid-row-gap: 1.5em;
    }

    @media ${ styles.media.tablet } {
        padding-left: 3em;
        padding-right: 3em;
        padding-bottom: 2em;
    }
    @media ${ styles.media.laptop } {
        background: url(${ background }) no-repeat 50%;
        background-color: black;
        background-size: cover;
    }
`;
