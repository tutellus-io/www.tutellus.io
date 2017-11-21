//@flow
import React from 'react';
import styled from 'styled-components';
import styles from '../styles';
const {margin, colors} = styles;

export const PlayButton = styled(class extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    play() {
        this.setState({playing: true});
        this.video.play();
    }
    render() {
        const props = this.props;
        return (
        <div className={ props.className }>
            <button onClick={ () => this.play() }/>
            <video className={ this.state.playing ? 'playing' : 'paused' } ref={ video => this.video = video } controls preload="preload" playsInline>
                <source src={ props.video } />
            </video>
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
        /*TODO: s3*/
        background: url(https://www.tutellus.com/dist/images/play-button-overlay.svg);
        cursor: pointer;
        transition: all 0.2s linear;

        &:hover {
            opacity: .5;
        }
    }
    & > video {
        display: inline-block;
        position: absolute;
        opacity: 0;
        z-index: -1;
        top: 0;
        /*TODO: no puede hacerse import de las constantes porque serían referencias circulares */
        max-height: ${ 500 - 128 }px;
        &.playing {
            z-index: 1;
            opacity: 1;
            transition: opacity .5s linear;
        }
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
