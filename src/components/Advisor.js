//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';
import styles from '../styles';

import {LazyImage} from './LazyImage';

const AdvisorAvatar = styled(LazyImage)`
    display: block;
    max-width: 80%;
    margin: 0 auto;
    border-radius: 50%;
    align-self: center;
`;

const AdvisorName = styled.span`
    display: block;
    color: ${ styles.colors.darkblack };
    font-weight: bold;
    margin-bottom: 1em;
`;

/*::
type AdvisorProps = {|
    className?: string,
    name: string,
    photo: string,
    title?: string,
    children: React.Node,
    socialProfiles?: Object,
|}
*/
export const Advisor/*:ComponentType<AdvisorProps>*/= styled((props/*:AdvisorProps*/) =>
    <div className={ props.className }>
        <AdvisorAvatar src={ props.photo } />
        <div>
            <AdvisorName>{ props.name }</AdvisorName>
            <p>
                { props.children }
            </p>
        </div>
    </div>
)`
    padding: 0.5em;
    font-size: 1em;
    border-radius: ${ styles.border.radius.small };
    background-color: ${ styles.colors.grey };
    text-align: left;
    display: grid;
    grid-template-columns: 3fr 7fr;
    grid-gap: 0.5em 0.5em;
    align-content: start;

    & > div {
        display: grid;
    }

    & p {
        font-size: 0.9em;
        line-height: 1.5em;
        font-style: italic;
    }

    @media ${ styles.media.tablet } {
        padding: 1em;
        grid-template-columns: 1fr;
        grid-gap: 1em 1em;
        text-align: center;
        & ${ AdvisorAvatar } {
            width: 7em;
        }
    }
`;
