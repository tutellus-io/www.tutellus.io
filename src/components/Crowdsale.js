//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';
import styles from '../styles';
import {CenteredBlock, AButton, LinkButton} from './';

export const CrowdsaleCTA = ({href = "", children}/*:{href: string, children: React.Node}*/) =>
    <CenteredBlock>
        {
            (href.startsWith("http")
                ? <AButton href={href}
                    target="_blank" primary>
                    { children }
                </AButton>
                : <LinkButton to={href} primary>
                    { children }
                </LinkButton>)
        }
    </CenteredBlock>;

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
    @media ${ styles.media.laptop } {
        & td {
            &:before {
                ${ bullets }
                margin-left: 1em;
            }
            &.secondary:before {
                margin-left: 2em;
            }
            &:first-child {
                width: 60%;
            }
        }
    }
`;
export const CrowdsalePurpose = styled.div`
    @media ${ styles.media.tablet } {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;
const DistributionGraph = styled.img`
    display: block;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 1em;
`;
const DistributionTableTitle = styled.h4`
    text-align: center;
    margin-bottom: 1em;
`;
/*::
type DistributionTableStat = {|
    value: number,
    label: string,
|}
type DistributionTableProps = {|
    className?: string,
    graph: string,
    title: string,
    stats: Array<DistributionTableStat>,
|}
*/
export const DistributionTable/*:ComponentType<DistributionTableProps>*/= styled((props/*:DistributionTableProps*/)=>
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
    @media ${ styles.media.laptop } {
        display: grid;
        grid: "graph title"
              "graph table" / 30% 70%;
        grid-column-gap: 1em;
        justify-items: left;
        font-size: 1.25em;
        margin-bottom: 2em;

        & > ${ DistributionGraph } {
            display: inline-block;
            grid-area: graph;
        }
        & > ${ DistributionTableTitle } {
            grid-area: title;
        }
        & > table {
            grid-area: table;
        }
    }
    @media ${ styles.media.desktop } {
        grid: "graph title"
              "graph table" / 40% 60%;
    }
`;

