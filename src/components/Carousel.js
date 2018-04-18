//@flow
/* eslint no-magic-numbers: off */
import React from 'react';
import Slider from 'react-slick';
//$FlowFixMe los css funcionan correctamente
import "slick-carousel/slick/slick.css";
//$FlowFixMe los css funcionan correctamente
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

import {styles} from '../styles';

import {
    PageSection,
    LazyImage,
} from '.';

export const Carousel = styled(Slider).attrs({
    slidesToShow: 4,
    responsive: [
        {breakpoint: 480, settings: {slidesToShow: 1}},
        {breakpoint: 768, settings: {slidesToShow: 2}},
        {breakpoint: 1140, settings: {slidesToShow: 3}},
    ],
})`
    & .slick-slide {
        padding: 0 .5em;
        height: auto;
        & > div {
            width: 100%;
            height: 100%;
            & > * {
                width: 100%;
                height: 100%;
            }
        }
    }
    & .slick-track {
        display: flex;
        align-items: stretch;
    }
    & .slick-next {
        right: -12px;
        &:before {
            content: '>';
        }

        @media ${ styles.media.laptop } {
            right: -25px;
        }
    }
    & .slick-prev {
        left: -12px;
        &:before {
            content: '<';
        }

        @media ${ styles.media.laptop } {
            left: -25px;
        }
    }
    & .slick-next,
    & .slick-prev {
        &:before {
            color: ${ styles.colors.lightblue };
            display: block;
            font-family: inherit;
            transform: scale(2,6);
        }
    }

    ${ PageSection } & {
        padding-top: 1.5em;
    }
`;

const MOBILE_MAX_WIDTH = 480;
const image_carousel_config = {
    slidesToShow: 2,
    responsive: [{breakpoint: MOBILE_MAX_WIDTH, settings: {slidesToShow: 1}}],
};
/*::
type Props = {|
    className?: string,
    images: Array<string>,
    slidesToShow?: number,
|}
*/
export const ImageCarousel = (props/*:Props*/) =>
    <Carousel { ...image_carousel_config } { ...props }>{
        props.images.map((image_url, key) =>
            <LazyImage key={ key } src={ image_url } alt="" />
        )
    }</Carousel>;
