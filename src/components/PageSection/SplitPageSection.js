//@flow
import * as React from 'react';
import styled from 'styled-components';

import {SectionContent} from './Layout';
import {SectionImage, section_styles} from './PageSection';
import {SectionTitle} from './Titles';
import styles from '../../styles';

/*::
type Props = {|
    className?: string,
    left?: bool,
    right?: bool,
    image: string,
    title: string,
    children: React.Node,
|}
*/
export const SplitPageSection = styled((props/*:Props*/) =>
    <section className={ props.className }>
        <SectionContent>
            { props.right &&
                <SectionImage src={ props.image }/>
            }
            <div>
                <SectionTitle>{ props.title }</SectionTitle>
                { props.children }
            </div>
            { props.left &&
                <SectionImage src={ props.image }/>
            }
        </SectionContent>
    </section>
)`
    ${ section_styles }

    & ${ SectionImage } {
        display: none;
    }

    @media ${ styles.media.tablet } {
        & ${ SectionContent } {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 1em;
            & > div {
                align-self: center;
                justify-self: center;
            }
        }
        & ${ SectionImage } {
            display: block;
            align-self: end;
            margin-bottom: -1em;
        }
        & ${ SectionTitle } {
            ${ props => props.right && `
                text-align: left;
                &:after {
                    left: -.5em;
                }
            ` }
        }
    }

    @media ${ styles.media.laptop } {
        & ${ SectionImage } {
            margin-bottom: -3em;
        }
        & ${ SectionContent } {
            margin-top: -3em;
        }
    }
`;
