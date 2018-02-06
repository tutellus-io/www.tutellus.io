//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';

import {TOP_HEADER_HEIGHT} from '../TopHeader';

import {SectionContent} from './Layout';
import {PageTitle} from './Titles';
import styles from '../../styles';

const background = "https://dev-res.thumbr.io/ico/images/background.jpg";
const responsive_background = "https://dev-res.thumbr.io/ico/images/background_mobile.jpg";
const responsive = image =>
    `${ image }?size=${ window.outerWidth }s`;

/*::
type PageBannerProps = {|
    className?: string,
    children: React.Node,
|}
*/

export const PageBanner/*:ComponentType<PageBannerProps>*/ = styled((props/*:PageBannerProps*/) =>
    <section className={ props.className }>
        <SectionContent>
            <div>
                { props.title &&
                <PageTitle>{ props.title }</PageTitle>
                }
                { props.children }
            </div>
        </SectionContent>
    </section>
)`
    padding: 3em;
    padding-top: calc(${ TOP_HEADER_HEIGHT.SMALL }px + 3em);
    background: url(${ responsive(responsive_background) }) no-repeat 50%;
    background-size: cover;
    color: white;

    @media ${ styles.media.laptop } {
        background: url(${ background }) no-repeat 50%;
        background-color: black;

        & > ${ SectionContent } > div {
            width: 50%;
            margin-left: 3em;
        }
    }
`;
