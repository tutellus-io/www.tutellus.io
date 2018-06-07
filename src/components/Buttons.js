//@flow
import React from 'react';
/*:: import type {ComponentType} from 'react' */
import styled, {keyframes} from 'styled-components';
import styles from '../styles';
import {bounceIn} from 'react-animations';
import {ButtonTracker} from '../withTracker';

const animation = keyframes`${ bounceIn }`;

const Overlay = styled.div`
    @media ${ styles.media.tablet } {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(0,0,0,.8);
        z-index: 998;
        & * {
            z-index: 999;
        }
    }
`;
/*::
type Props = {|
    video: string,
    className?: string,
|}
type State = {|
    playing?: bool,
|}
*/
export const PlayButton/*:ComponentType<Props>*/= styled(class extends React.Component/*::<Props, State>*/ {
    constructor() {
        super();
        this.state = (({}/*:any*/)/*:State*/);
        this.play = this.play.bind(this);
        this.stop = this.stop.bind(this);
    }
    /*:: stop: (void => void) */
    stop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.setState({playing: false});
    }
    /*:: play: (void => void) */
    play(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.setState({playing: true});
    }
    render() {
        const props = this.props;
        return (
            <div className={ props.className }>
                { this.state.playing
                    ? <Overlay onClick={ this.stop }>
                        <iframe src={ `${ props.video }?autoplay=1&loop=1` }
                                frameBorder="0"
                                allowFullScreen="allowfullscreen" />
                      </Overlay>
                    : <ButtonTracker onClick={ this.play }
                            event= {{
                                category: "video",
                                action: "play",
                            }}
                        />
                }
            </div>
        );
    }
})`
    & > button {
        display: block;
        width: 100px;
        height: 100px;
        border: none;
        margin: 0 auto;
        padding: 0;
        background: url(https://www.tutellus.com/dist/images/play-button-overlay.svg);
        cursor: pointer;
        transition: all 0.2s linear;
        animation: 3s ${ animation } 0s infinite;
        animation-direction: alternate;

        &:hover {
            opacity: .5;
        }
        @media ${ styles.media.tablet } {
            top: 28em;
        }
    }
    & iframe {
        display: block;
        margin: 0 auto;
    }
    @media ${ styles.media.tablet } {
        & iframe {
            position:fixed;
            top: 25%;
            left: 25%;
            width: 50%;
            height: 50%;
        }
    }
`;
