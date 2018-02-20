//@flow
import React from 'react';
import styled from 'styled-components';

import {SectionContent} from './Layout';
import {SectionImage, section_styles} from './PageSection';
import {SectionTitle} from './Titles';
import styles from '../../styles';

export const SplitPageSection = styled(props =>
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
            position: relative;
            bottom: -1em;
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
            bottom: -3em;
        }
        & ${ SectionContent } {
            margin-top: -3em;
        }
    }
`;
