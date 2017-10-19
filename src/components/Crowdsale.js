//@flow
import styled from 'styled-components';
import styles from '../styles';
const {colors} = styles;

export const CrowdsaleTable = styled.table`
    width: 75%;
    margin: 0 auto;
    margin-top: 50px;
    font-size: 1.5em;
    line-height: 2em;

    & td:first-child {
        padding-left: 1em;
        font-weight: bold;
    }
    & td:last-child {
        padding-right: 1em;
        text-align: right;
    }
    & tr {
        border-bottom: solid 1px ${ colors.softblack };
    }
`;
