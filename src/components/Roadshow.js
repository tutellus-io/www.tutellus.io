//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';

import styles from '../styles';

/*::
type RoadShowEvent = {|
    title: string,
    date: string,
    description: string,
    place: string,
    address: string,
    url: string,
    end_date: number,
|}
*/
const selectNextScheduled = (date, events) =>
    events.reduce((next_scheduled, event) => (
        event.end_date > date &&
        event.end_date < next_scheduled.end_date ? event
                                                 : next_scheduled
    ), (({...events[0], end_date: Infinity}/*:any*/)/*:RoadShowEvent*/));

const RoadShowEvents = styled(props =>
    <ol className={ props.className }>{
        props.events.map((event, key) =>
            <li className='icon-map'
                key={ key }
                onClick={ () => props.onSelect(event) }
                data-selected={ event === props.selected }>
                { event.title }
            </li>
        )
    }</ol>
)`
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr;

    & > li {

        cursor: pointer;
        line-height: 2em;
        &:before {
            color: ${ styles.colors.lightblue };
            margin-right: .5em;
        }

        text-transform: uppercase;

        &[data-selected="true"] {
            color: ${ styles.colors.lightblue };
            font-weight: bold;
        }

        /*two-column layout */
        grid-column: 1;
        &:nth-child(n + ${ props => Math.ceil(props.events.length / 2) + 1 }) {
            grid-column: 2;
        }
    }
`;

const EventDetails = styled(props =>
    <div className={ props.className }>
        <h1>
            <strong>{ props.event.title }</strong> &mdash; { props.event.date }
        </h1>
        <em>{ props.event.description }</em>
        <strong>{ props.event.place }</strong>
        { props.event.address }
        <a href={ props.event.url } target="_blank">{ props.event.url }</a>
    </div>
)`
    background: ${ styles.colors.modify(styles.colors.midgrey)
                                .alpha(1)
                                .fade(0.7)//eslint-disable-line no-magic-numbers
                                .string() };
    border-radius: 2px;
    padding: 2em;
    line-height: 1.5em;
    border-left: solid 5px ${ styles.colors.lightblue };

    & > em {
        font-style: italic;
        margin: 1em 0;
    }
    & > strong {
        display: block;
        margin-top: 1em;
    }
    & > a {
        display: block;
        margin: 1em 0;
        color: ${ styles.colors.lightblue };
    }
    @media ${ styles.media.tablet } {
        min-height: 10em;
    }
`;

/*::
type Props = {|
    events: Array<RoadShowEvent>,
    className?: string,
|}
type State = {|
    event: RoadShowEvent,
|}
*/
export const Roadshow = styled(class extends React.Component/*::<Props, State>*/ {
    constructor(props) {
        super(props);
        this.state = {event: selectNextScheduled(Date.now(), this.props.events)};
    }
    showDetails(event) {
        this.setState({event});
    }
    render() {
        return (
        <div className={ this.props.className }>
            <RoadShowEvents events={ this.props.events }
                            selected={ this.state.event }
                            onSelect={ event => this.showDetails(event) } />
            { this.state.event &&
            <EventDetails event={ this.state.event } />
            }
        </div>
        );
    }
})`
    & > ${ EventDetails } {
        margin-top: 1em;
    }
    @media ${ styles.media.tablet } {
        display: grid;
        grid: "list details" / 1fr 1fr;
        align-items: start;
        margin-top 3em;

        & > ${ RoadShowEvents } {
            grid-area: list;
        }
        & > ${ EventDetails } {
            grid-area: details;
            margin-top: 0;
        }
    }
`;

