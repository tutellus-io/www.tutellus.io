/* eslint-disable no-magic-numbers */
import React from 'react';
import styled, {keyframes} from 'styled-components';
import {colors} from '../styles';

const validateProgress = progress => {
    if (progress < 0) {
        return 0;
    }
    if (progress > 100) {
        return 100;
    }
    return progress;
};

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const flexCenter = `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const buble = (color, amount) => {
    const percentColor = colors.modify(color).darken(0.4);
    const amountPercent = `${ amount }%`;
    return `
        & .progress {
            ${ flexCenter }
            position: relative;
            border-radius: 50%;
            width: 100%;
            height: 100%;
            border: 5px solid ${ color };
            box-shadow: 0 0 20px ${ colors.modify(percentColor).darken(0.25) };
            background-color: #333333;
            transition: all 1s ease;
            & .inner {
                position: absolute;
                overflow: hidden;
                z-index: 2;
                border-radius: 50%;
                width: calc(100% - 10px);
                height: calc(100% - 10px);
                transition: all 1s ease;
                & .water {
                    position: absolute;
                    z-index: 1;
                    width: 200%;
                    height: 200%;
                    left: -50%;
                    border-radius: 40%;
                    animation-iteration-count: infinite;
                    animation-timing-function: linear;
                    animation-duration: 10s;
                    animation-name: ${ spin };
                    top: calc(100% - ${ amountPercent });
                    background: ${ colors.modify(color).alpha(0.5) };
                    transition: all 1s ease;
                    box-shadow: 0 0 20px ${ colors.modify(percentColor).darken(0.05) };
                }

                & .glare {
                    position: absolute;
                    top: -120%;
                    left: -120%;
                    z-index: 5;
                    width: 200%;
                    height: 200%;
                    transform: rotate(45deg);
                    border-radius: 50%;
                    background-color: rgba(255, 255, 255, 0.15);
                    transition: all 1s ease;
                }

                & .percent {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    font-weight: bold;
                    text-align: center;
                    line-height: calc(100% - 10px);
                    font-size: 2.7em;
                    color: ${ colors.modify(percentColor).lighten(0.5) };
                    text-shadow: 0 0 10px ${ colors.modify(percentColor).darken(0.25) };
                    transition: all 1s ease;
                    ${ flexCenter }
                }
            }
        }
    `;
};

export const ProgressLiquidBubble = styled(({
    className,
    progress = 0,
    concept,
}) => {
    const validProgress = validateProgress(progress);
    return (
        <div className={className}>
            <div className="color">
                <div className="progress">
                    <div className="inner">
                        <div className="percent">
                            <div className="number">{ validProgress }%</div>
                            {concept && <div className="concept">{ concept }</div>}
                        </div>
                        <div className="water"></div>
                        <div className="glare"></div>
                    </div>
                </div>
            </div>
        </div>
    );
})`
    display: grid;
    font-family: sans-serif;
    align-items: center;
    justify-content: center;
    & .color {
        height: 8em;
        width: 8em;
        font-size: 1em;
    ${ ({progress = 0}) => {
        const mainColors = ['#A0F12A', '#6CE929', '#25D359', '#23C594', '#24a9bd'];
        const position = parseInt(progress / 20);

        const validProgress = validateProgress(progress);
        return buble(mainColors[position], validProgress);
    } }
    }
    & .percent {
        margin-top: 0.15em;
        & .concept {
            font-size: 0.3em;
            text-transform: uppercase;
        }
    }
`;

ProgressLiquidBubble.displayName = "ProgressLiquidBubble";
