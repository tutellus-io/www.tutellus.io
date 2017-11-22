//@flow
import React from 'react';
import styled from 'styled-components';
import styles from '../styles';
const {margin, colors} = styles;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,.8);
    z-index: 998;
    & * {
        z-index: 999;
        opacity: 1;
    }
`
export const PlayButton = styled(class extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.play = this.play.bind(this);
        this.stop = this.stop.bind(this);
    }
    stop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.setState({playing: false});
    }
    play(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.setState({playing: true});
    }
    render() {
        const props = this.props;
        return (
        <div className={ props.className }>
        { this.state.playing ?
            <Overlay onClick={ this.stop }>
    -            <iframe src={ `${ props.video }?autoplay=1&loop=1` } frameBorder="0" allowFullScreen="allowfullscreen" />
            </Overlay>
            :
            <button onClick={ this.play } />
        }
        </div>
        );
    }
})`
    position: absolute;
    top: -128px;
    left: 0;
    width: 100%;
    height: 100%;
    & > button {
        display: block;
        width: 100px;
        height: 100px;
        border: none;
        margin: 0 auto;
        padding: 0;
        position: relative;
        top: 32em;
        /*TODO: s3*/
        background: url(https://www.tutellus.com/dist/images/play-button-overlay.svg);
        cursor: pointer;
        transition: all 0.2s linear;

        &:hover {
            opacity: .5;
        }
        @media ${ styles.media.tablet } {
            top: 28em;
        }
    }
    & iframe {
        position:fixed;
        top: 25%;
        left: 25%;
        width: 50%;
        height: 50%;
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
