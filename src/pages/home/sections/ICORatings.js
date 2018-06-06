//@flow
import React from 'react';
import {translate} from 'react-i18next';
import styled from 'styled-components';
import {styles} from '../../../styles';
import {
    PageSection,
    Carousel,
} from '../../../components';

const SplitGradient = styled(({className}) =>
    <div className={ className }>
        <div></div>
    </div>
)`
    height: 100%;
    width: 100%;
    padding: 0 5px;
    & > div {
        height: 100%;
        background-image: linear-gradient(#33596a, #15c1ce);
    }
`;

const Rating = styled(({className, url, icon, name, rate}) =>
    <div className={ className }>
        <a href={ url } target="_blank">
            <img offset={ 500 } src={ icon } alt={name}/>
            <SplitGradient/>
            <div>{ rate }</div>
        </a>
    </div>
)`
    background-color: white;
    padding: 0.5em;
    height: 5em;
    & a {
        display: grid;
        grid-template-columns: 7fr 11px 3fr;
        font-size: 1em;
        align-items: center;
        justify-items: center;
        cursor: pointer;
        height: 100%;
    }
    & img {
        max-width: 100%;
        min-width: 100%;
    }
    & div {
        font-weight: 700;
        font-size: 1.2em;
    }
`;
Rating.displayName = 'Rating';

const carousel_settings = {
    slidesToShow: 6,
    slidesToScroll: 2,
    lazyLoad: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
        {breakpoint: 480, settings: {slidesToShow: 2, slidesToScroll: 1}},
        {breakpoint: 768, settings: {slidesToShow: 4}},
        {breakpoint: 1140, settings: {slidesToShow: 5}},
    ],
};

export const ICORatings = translate('ratings')(styled(({t, className}) =>
    <PageSection className={ className } light>
        <Carousel { ...carousel_settings }>
            {
                JSON.parse(t('order')).map((name, index) =>
                    <Rating key={ index }
                        name={ name }
                        url={ t(`${ name }_url`) }
                        icon={ t(`${ name }_icon`) }
                        rate={ t(`${ name }_rate`) }
                    />
                )
            }
        </Carousel>
    </PageSection>
)`
    padding-top: 1em;
    padding-bottom: 1em;
    & ${ Carousel } {
        padding: 0;
        @media ${ styles.media.desktop } {
            grid-template-columns: repeat(auto-fit, minmax(13em, 1fr));
        }
        & .slick-next,
        & .slick-prev {
            &:before {
                font-size: 14px;
            }
        }
    }
    & ${ Rating } {
        padding: 0.5em;
        font-size: 0.8em;
        height: 5em;
        @media ${ styles.media.tablet } {
            font-size: 0.9em;
            height: 4.5em;
        }
        @media ${ styles.media.laptop } {
            font-size: 1em;
            height: 4em;
        }
    }
`);
