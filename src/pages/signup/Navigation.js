import React from 'react';
import styled from 'styled-components';

const Navigation = (props) => {
    const {
        active_step,
        steps,
        keyDone,
        jumpToStep,
        className = '',
    } = props;

    const getClassName = (step, i) => `
        ${ (active_step === i ? 'active' : '') } 
        ${ (keyDone(step.key) ? 'valid' : '') }
        dot
    `.trim();

    return (
        <div className={className}>
            <ol>
                {steps.map((step, i)=>
                    <li className={getClassName(step, i)}
                        onClick={() => jumpToStep(i)} key={i} value={i}>
                        <em>{i + 1}</em>
                        <span>{step.name}</span>
                    </li>
                )}
            </ol>
        </div>
    );
};

const NavigationStyled = styled(Navigation)`
    & ol {
        list-style-type: none;
        padding: 0;
        margin-bottom: 3rem;
        & li {
            display: inline-block;
            text-align: center;
            line-height: 4.5rem;
            & span {
                padding: 0 2.5rem;
            }
            &.dot {
                color: silver;
                border-bottom: 3px solid silver;
                &:before {
                    content: "\\039F"; 
                    color: silver;
                    background-color: white;
                    width: 1.2em;
                    line-height: 1.4em;
                }
                &:hover:before {
                    color: #ff4500;
                }
            }
            &.active {
                color: black;
                border-bottom: 3px solid silver;
                &:before {
                    content: "\\2022";
                    color: white;
                    background-color: #CCCCCC;
                    width: 1em;
                    line-height: 1.2em;
                    border-radius: 1.2em;
                }
                &:hover:before {
                    color: #ff4500;
                }
            }
            &.valid {
                color: black;
                border-bottom: 3px solid #5cb85c;
                &:before {
                    content: "\\2713";
                    color: white;
                    background-color: #5cb85c;
                    width: 1.2em;
                    line-height: 1.2em;
                    border-radius: 1.2em;
                }
                &:hover:before {
                    color: #333333;
                }
            }
            &:after {
                content: "\\00a0\\00a0";
            }
            &:before {
                position: relative;
                bottom: -4.05rem;
                float: left;
                left: 50%;
            }
        }
    }
    & em {
        display: none;
        font-weight: 700;
        padding-left: 1rem;
    }
`;

export default NavigationStyled;
