//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import R from 'ramda';
import styled from 'styled-components';

import {SectionTitle} from './Titles';
import {SectionContent} from './Layout';
import styles from '../../styles';

const colorSectionBackground = R.cond([
    [R.has('dark'), R.always(styles.colors.darkblue)],
    [R.has('light'), R.always(styles.colors.athens)],
    [R.T, R.always(styles.colors.white)],
]);
const colorSectionForeground = R.cond([
    [R.has('dark'), R.always(styles.colors.athens)],
    [R.T, R.always('inherit')],
]);

export const InterstitialImage = styled.img``;
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
    padding: 1em;
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

