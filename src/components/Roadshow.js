//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';
import styles from '../styles';

const Avatar = styled.img`
    display: block;
    border-radius: 50%;
`;

const ShowImage = styled(props =>
    <div className={ props.className }>
        <Avatar src={ props.src } alt={ props.alt }/>
    </div>
)`
    position: relative;
    display: grid;
    justify-items: center;
    margin: 0 auto 1em;
    & ${ Avatar } {
        position: relative;
        max-width: 80%;
    }
    ${ props => (props.done
        ? `&:before {
            display: block;
            position: absolute;
            content: url(/images/tick.svg);
            z-index: 1;
            top: 20%;
            left: 20%;
            width: 60%;
        }`
        : '') }
`;

const ShowName = styled.div`
    color: ${ styles.colors.midgrey };
    text-transform: uppercase;
    margin: 0.25em 0 0.75em;
    text-align: center;
`;

const ShowDate = styled.div`
    font-size: 0.8em;
`;

/*::
type RoadshowEventProps = {|
    className?: string,
    title: string,
    date: string,
    photo: string,
    done: boolean,
|}
*/
export const RoadshowEvent/*:ComponentType<RoadshowEventProps>*/ = styled((props /*:RoadshowEventProps*/) =>
    <div className={ props.className }>
        <ShowImage src={ props.photo }
            alt={ props.title }
            done={ props.done }/>
        <ShowName>{ props.title }</ShowName>
        <ShowDate>{ props.date }</ShowDate>
    </div>
)`
    display: grid;
    justify-items: center;
    padding: 1em;
`;

export const Roadshow = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5em 0.8em;

    @media ${ styles.media.tablet } {
        grid-template-columns: repeat(3, 1fr);
    }
    
    @media ${ styles.media.laptop } {
        grid-template-columns: repeat(5, 1fr);
    }
`;
