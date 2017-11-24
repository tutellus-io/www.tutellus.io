//@flow
import React from 'react';
import styled from 'styled-components';
import styles from '../styles';

const bullets = `
    content: '';
    display: inline-block;
    border: solid .5em transparent;
    border-left: solid .5em ${ styles.colors.lightblue };
    position: relative;
    top: .125em;
`;
export const CrowdsaleSummary = styled.table`
    width: 100%;
    margin-bottom: 2em;
    & tr {
        color: black;
        line-height: 2.5em;
        &.secondary td:nth-child(1):before {
            ${ bullets }
            margin-left: .5em;
        }
        &:nth-child(odd) {
            background-color: ${ styles.colors.athens };
        }
        &:nth-child(even) {
            background-color: white;
        }
        & td:first-child {
            padding-left: .25em;
        }
        & td:last-child {
            font-weight: bold;
        }
    }
/*
    width: 100%;
    margin: 0 15px;
    padding: 0 15px;
    margin-bottom: 40px;

    & tr {
        color: black;
        line-height: 2.5em;
        &.secondary td:nth-child(1):before {
            margin-left: 4em;
        }
        &:nth-child(odd) {
            background-color: ${ styles.colors.athens };
        }
        &:nth-child(even) {
            background-color: white;
        }
    }
    & td:before {
        /*TODO: definir como helper "bullets" (copiado de DistributionTable)*//*
        content: '';
        display: inline-block;
        border: solid .5em transparent;
        border-left: solid .5em ${ styles.colors.lightblue };
        position: relative;
        top: .125em;
        /* esto ya no es bullets *//*
        margin-left: 2em;
        margin-right: .5em;
    }
*/
`;
export const CrowdsalePurpose = styled.div`
/*
    margin-bottom: 1em;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-column-gap: 10%;
*/
`;
const DistributionGraph = styled.img`
    display: block;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 1em;
`
const DistributionTableTitle = styled.h4`
    text-align: center;
    margin-bottom: 1em;
`;
export const DistributionTable = styled(props =>
    <div className={ props.className } >
        <DistributionGraph src={ props.graph } />
        <DistributionTableTitle>{ props.title }</DistributionTableTitle>
        <table>
            <tbody>{ props.stats.map((stat, i) =>
                <tr key={ i }>
                    <td>{ stat.value * 100 }%</td>
                    <td>{ stat.label }</td>
                </tr>
            ) }</tbody>
        </table>
    </div>
)`
    & > table {
        margin-bottom: 2em;
        font-size: .8em;
        & tr {
            line-height: 1.5em;
        }
        & td:nth-child(2):before {
            content: '';
            display: inline-block;
            border: solid .5em transparent;
            border-left: solid .5em ${ styles.colors.lightblue };
            position: relative;
            top: .125em;
            margin-left: .5em;
        }
    }
/*
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-rows: 2em auto;
    grid-template-areas: 'graph table';
    grid-column-gap: 1em;
    justify-items: left;
    font-size: 1.25em;
    margin-bottom: 2em;
    & > img {
        display: inline-block;
        grid-area: graph;
        grid-row-end: span 2;
        justify-self: right;
    }
    & > h4 {
        grid-area: table;
    }
*/
`;

