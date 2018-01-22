import * as React from 'react';
import styled, {keyframes} from 'styled-components';
import styles from '../styles';

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
    background-color: ${ styles.colors.dark };
    width: 10px;
    height: 5px;
    animation-name: ${ moving };
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`;
export const Loading = styled(({className}) =>
    <div className={className}>
        <Step></Step>
        <Step></Step>
        <Step></Step>
        <Step></Step>
        <Step></Step>
        <Step></Step>
    </div>
)`
    display: grid;
    grid-template-columns: repeat(6, 10px);   
    grid-gap: 1px;
    justify-content: center;
    height: 2em;
    padding: 2em 0;
    & ${ Step } {
        &:nth-of-type(2) {
            animation-delay: 0.2s;
        }
        &:nth-of-type(3) {
            animation-delay: 0.4s;
        }
        &:nth-of-type(4) {
            animation-delay: 0.6s;
        }
        &:nth-of-type(5) {
            animation-delay: 0.8s;
        }
        &:nth-of-type(6) {
            animation-delay: 1s;
        }
    }
`;
