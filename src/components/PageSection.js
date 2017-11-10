//@flow
import R from 'ramda';
import * as React from 'react';
import styled from 'styled-components';

import {CenteredImage} from './Images';
import {MAX_CONTENT_WIDTH} from './Layout';
import {MAIN_HEADER_HEIGHT} from './MainHeader';

import styles from '../styles';
const {margin, colors} = styles;

export const SectionContent = styled.div`
    max-width: ${ MAX_CONTENT_WIDTH }px;
    width: 80%;
    margin: 0 auto;
`;
/*::
type url = string;
type PageBannerAttrs = {
    className: string,
    image: url,
    title?: string,
    children?: React.Node,
}
*/
const PAGE_SECTION_VERTICAL_PADDING = 40;
export const PageBanner = styled((props/*: PageBannerAttrs */) =>
    <section className={ props.className }>
        <SectionContent>
            { props.title &&
            <PageTitle>{ props.title }</PageTitle>
            }
            { props.children }
        </SectionContent>
    </section>
)`
    background: ${ colors.darkblue };
    padding: ${ PAGE_SECTION_VERTICAL_PADDING }px 0;
	color: ${ colors.white };
    padding-top: ${ MAIN_HEADER_HEIGHT + PAGE_SECTION_VERTICAL_PADDING }px;
/*::
type PageSectionAttrs = {
    className: string,
    title?: string,
    image?: url,
    children?: React.Node,
}
*/
`;
export const InterstitialImage = styled.img`
    display: block;
    margin: 0 auto;
    margin-top: -${ 4 * PAGE_SECTION_VERTICAL_PADDING }px;
    height: ${ 3 * PAGE_SECTION_VERTICAL_PADDING }px;
`;
const colorSectionBackground = R.cond([
    [R.has('dark'), R.always(colors.darkblue)],
    [R.has('light'), R.always(colors.athens)],
    [R.T, R.always(colors.white)],
]);
const colorSectionForeground = R.cond([
    [R.has('dark'), R.always(colors.athens)],
    [R.T, R.always('inherit')],
]);
export const PageSection = styled((props) =>
    <section className={ props.className }>
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
export const centeredObject = (width/*: pixels */) => `
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

    &:after {
        background: url('/images/underlined.svg') no-repeat;
        content: "";
        width: ${ TITLE_UNDERLINE_WIDTH }px;
        display: block;
        height: 15px;
        position: relative;
        top: 20px;
        left: calc(50% - ${ TITLE_UNDERLINE_WIDTH / 2 }px);
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
