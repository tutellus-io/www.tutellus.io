//@flow
import R from 'ramda';
import * as React from 'react';
import styled from 'styled-components';

import {CenteredImage} from './Images';
import {MAX_CONTENT_WIDTH} from './Layout';

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
	min-height: 515px;
    background: url(${ R.prop('image') }) bottom center no-repeat #1b2732;
    background-size: 3000px;
    position: relative;
	color: ${ colors.white };
    padding: 50px 0;
`;
/*::
type PageSectionAttrs = {
    className: string,
    title?: string,
    image?: url,
    children?: React.Node,
}
*/
export const PageSection = styled((props) =>
    <section className={ props.className }>
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
    width: 100%;
    padding: 70px 0;

    &:nth-child(3n+1) {
        background-color: ${ colors.white };
    }
    &:nth-child(3n+2) {
        background-color: ${ colors.athens };
    }
    &:nth-child(3n+3) {
        background-color: ${ colors.darkblue };
        color: ${ colors.white };
    }
`;

/*:: type pixels = number */
export const centeredObject = (width/*: pixels */) => `
    left: 50%;
    display: block;
    position: relative;
    margin-left: -${ width / 2 }px;
    width: ${ width }px;
`;
export const SectionTitle = styled.h2`
	${ styles.text.huge }
    font-weight: 300;
    margin-bottom: ${ margin.small };
    text-align: center;

    &:after {
        border-top: 1px solid ${ colors.lightblue };
        content: "";
        margin: ${ margin.medium } 0;
        ${ centeredObject(60) }
    }
`;

export const PageTitle = styled(SectionTitle.withComponent('h1'))`
	padding-top: 10px;
	&:after {
		display:none;
	}
`;
export const PageSubtitle = styled(SectionTitle)`
	${ styles.text.large }
	&:after {
		display: none;
	}
`;
export const SectionImage = styled(CenteredImage)`
    margin-bottom: ${ margin.medium };
`;
export const SectionSideImage = styled(SectionImage)`
    margin: 0;
    width: 100%;
`;
