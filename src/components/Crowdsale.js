//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';
import styles from '../styles';
import {CenteredBlock, AButton, LinkButton} from './';
import {bullet_styles} from './BulletList';

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

export const CrowdsaleSummary = styled.table`
    width: 100%;
    margin-bottom: 2em;
    & tr {
        color: black;
        line-height: 2.5em;
        & td {
            display: block;
            width: 100%;
            text-align: center;
            @media ${ styles.media.tablet } {
                display: table-cell;
                width: 50%;
                text-align: left;
                padding: 0 1em;
            }
        }
        &.secondary {
            & td {
                display: inline-block;
                width: 50%;
                &:nth-child(1) {
                    text-align: left;
                    &:before {
                        ${ bullet_styles }
                        margin-left: .5em;
                    }
                }
                &:nth-child(2) {
                    text-align: right;
                    padding-right: 1em;
                }
                @media ${ styles.media.tablet } {
                    display: table-cell;
                    &:nth-child(2) {
                        text-align: left;
                    }
                }
            }
        }
        &:nth-child(odd) {
            background-color: ${ styles.colors.athens };
            & + .secondary {
                background-color: ${ styles.colors.athens };
                & + .secondary {
                    background-color: ${ styles.colors.athens };
                }
                & td {
                    padding: 0 .5em;
                    @media ${ styles.media.tablet } {
                        padding: 0 1em;
                    }
                }
            }
        }
        &:nth-child(even) {
            background-color: white;
            & + .secondary {
                background-color: white;
                & + .secondary {
                    background-color: white;
                }
                & td {
                    padding: 0 .5em;
                    @media ${ styles.media.tablet } {
                        padding: 0 1em;
                    }
                }
            }
        }
        & td:last-child {
            font-weight: bold;
            padding-bottom: .5em;
        }
        & td:first-child {
            padding-top: .5em;
        }
    }
    @media ${ styles.media.laptop } {
        & td {
            &:before {
                ${ bullet_styles }
            }
            &.secondary:before {
                margin-left: 2em;
            }
            &:first-child {
                width: 50%;
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
        <div>
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
    </div>
)`
    margin-bottom: 1em;
    display: grid;
    grid: "graph table" / 40%   60%;
    justify-items: start;
    align-items: start;

    & > ${ DistributionGraph } {
        display: inline-block;
        grid-area: graph;
        align-self: center;
    }
    & > div > table {
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
        grid-column-gap: 1em;
        font-size: 1.25em;
        margin-bottom: 2em;
    }
`;
