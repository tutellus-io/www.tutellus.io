//@flow
import styled from 'styled-components';
import styles from '../styles';
const {colors} = styles;

export const CrowdsaleTable = styled.table`
    width: 100%;
    margin: 0 15px;
    padding: 0 15px;
    margin-bottom: 40px;
    font-size: 1.5em;
    line-height: 1.5em;

    & tr {
        line-height: 2em;
        color: black;
    }
    & tr:nth-child(odd) {
        background-color: ${ colors.athens };
    }
    & tr:nth-child(even) {
        background-color: white;
    }
    & td:before {
        content: '';
        display: inline-block;
        border: solid 8px transparent;
        border-left-color: ${ colors.lightblue };
        border-right: none;
        margin: 0 10px;
    }
    & td:first-child {
        width: 70%;
    }
    & td:last-child {
        font-weight: bold;
    }
`;
