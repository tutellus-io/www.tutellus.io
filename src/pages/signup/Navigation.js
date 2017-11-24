import React from 'react';
import styled from 'styled-components';
import styles from '../../styles';
import _ from 'lodash';

const Navigation = props => {
    const {
        active_step,
        steps,
        jumpToStep,
        className = '',
        user,
    } = props;

    const keyDone = key => _.get(user, key, false);

    const getClassName = (step, i) => `
        ${ (active_step === i ? 'active' : '') } 
        ${ (keyDone(step.key) ? 'valid' : '') }
        dot
    `.trim();

    const jump = (step, i) => {
        if (active_step === 0) return;
        if (!keyDone(step.key)) {
            jumpToStep(i);
        }
    };

    return (
        <ol className={className}>
            {steps.map((step, i)=>
                <li className={getClassName(step, i)}
                    onClick={() => jump(step, i)} key={i} value={i}>
                    <div>{step.name}</div>
                </li>
            )}
        </ol>
    );
};

const NavigationStyled = styled(Navigation)`
    display: grid;
    grid-template-columns: repeat(5, 20%);
    list-style-type: none;
    padding: 0;
    margin-bottom: 2em;
    & li {
        display: inline-block;
        text-align: center;
        line-height: 2.5em;
        font-size: 1em;
        padding: 0;
        & div {
            width: 100%;
            text-align: center;
            padding-top: 0.3em;
        }
        &.dot {
            color: silver;
            border-bottom: 2px solid ${ styles.colors.lightblue };
            &:after {
                content: ' '; 
                display: block;
                height: 2em;
                width: 2em;
                border-radius: 50%;
                border: solid 2px ${ styles.colors.lightblue };
                background-color: white;
            }
        }
        
        &.active {
            color: black;
            font-weight: bold;
        }

        &.valid {
            color: black;
            &:after {
                background-color: ${ styles.colors.lightblue };
            }
        }
        
        &.not-valid {
            &:after {
                background-color: ${ styles.colors.lightblue };
            }
        }
        &:before {
            content: '';
            position: relative;
            border-right: 2px solid ${ styles.colors.lightblue };
            float: left;
            left: 50%;
            height: 1.5em;
            margin-top: 3em;
        }
        &:after {
            position: relative;
            bottom: -1.3em;
            float: left;
            left: calc(50% - 1.2em);
        }
    }
    & em {
        display: none;
        font-weight: 700;
        padding-left: 1em;
    }
`;

export default NavigationStyled;
