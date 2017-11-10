//@flow
import styled from 'styled-components';
import styles from '../styles';
const {margin, colors} = styles;

export const PlayButton = styled.button`
    display: block;
    width: 100px;
    height: 100px;
    border: none;
    margin: 0 auto;
    padding: 0;
    background: url(https://www.tutellus.com/dist/images/play-button-overlay.svg);
    cursor: pointer;
    transition: all 0.2s linear;

    &:hover {
        opacity: .5;
    }
`;
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
    padding: 13px 30px;
    text-align: center;
    transition: all 0.3s linear;
    cursor: pointer;
    text-transform: uppercase;

    ${ props => props.icon && `
        padding-left: 3em;
        position: relative;

        &:before {
            content: '';
            display: inline-block;
            width: 2em;
            height: 100%;
            position: absolute;
            left: 1em;
            top: 0;
            background: ${ `url(${ props.icon })` } center center no-repeat;
        }
    ` }
`;
