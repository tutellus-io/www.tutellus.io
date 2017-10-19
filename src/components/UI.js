//@flow
import styled from 'styled-components';
import styles from '../styles';
const {margin, colors} = styles;

const colorCTAButton = (props/*: {primary: bool} */) => (
    props.primary ? colors.emerald : colors.lightblue
);
export const CTAButton = styled.button`
    background-color: ${ colorCTAButton };
    color: ${ colors.white };
    display: block;
    border: none;
    margin: ${ margin.small } auto;
    margin-bottom: -${ margin.small };
    border-radius: 3px;
    letter-spacing: .035em;
    padding-top: 22px;
    padding-bottom: 22px;
    font-size: 1.143em;
    padding-left: 80px;
    padding-right: 80px;
    display: inline-block;
    font-weight: 700;
    padding: 13px 30px;
    text-align: center;
    transition: all 0.3s linear;
    cursor: pointer;
    text-transform: uppercase;
`;
