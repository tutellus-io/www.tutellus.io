//@flow
/*:: import type {ComponentType} from 'react' */
import * as React from 'react';
import R from 'ramda';
import styled, {keyframes} from 'styled-components';
import styles from '../styles';

const DEFAULT_STEP_COUNT = 6;
const DEFAULT_ANIMATION_DURATION = 0.2;
const DEFAULT_ANIMATION_SLEEP = 0.4;

const moving = keyframes`
    0%, 50%, 100% {
        height: 5px;
        transform: translkateY(0);
    }
    25% {
        height: 30px;
        background-color: ${ styles.colors.lightblue };
        transform: translateY(-50%)
    }
`;

const Step = styled.span`
    width: 10px;
    height: 5px;
`;
/*::
type LoadingProps = {|
    className?: string,
    steps?: number,
|}
*/
export const Loading/*:ComponentType<LoadingProps>*/ = styled(({className, steps = DEFAULT_STEP_COUNT}) =>
    <div className={className}>
        { R.range(0, steps).map(i => <Step key={i}/>)}
    </div>
).attrs({
    steps: props => props.steps || DEFAULT_STEP_COUNT,
    duration: DEFAULT_ANIMATION_DURATION,
    sleep: DEFAULT_ANIMATION_SLEEP,
})`
    display: grid;
    grid-template-columns: ${ ({steps}) => `repeat(${ steps }, 10px)` };
    grid-gap: 1px;
    justify-content: center;
    height: 2em;
    padding: 2em 0;
    & ${ Step } {
        animation-name: ${ moving };
        animation-duration: ${ ({steps, duration, sleep}) => (duration * steps) + sleep }s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        ${
            ({steps, duration}) => R.range(2, steps + 1).map(i => `&:nth-of-type(${ i }) {
                animation-delay: ${ duration * (i - 1) }s;
            }`).join('')
        }
    }
`;
