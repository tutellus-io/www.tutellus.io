//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';
import styles from '../styles';

import {LazyImage} from './LazyImage';

const TeamIcon = styled.li`
    width: 1.6em;
    height: 1.6em;
`;

const TeamIcons = styled(props =>
    <ul className={ props.className }>
        {
            Object.entries(props.networks).map(([network, link]) => {
                if (((link/*:any*/)/*:string*/).startsWith('http')) {
                    return (
                        <TeamIcon key={ network }>
                            <a className={ `icon-${ network }` }
                                href={ link }
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={ (event) => event.stopPropagation() }
                            />
                        </TeamIcon>
                    );
                }
                return null;
            })
        }
    </ul>
)`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 0.5em 0.5em;
    justify-items: center;
    align-items: center;
`;

const TeamMemberAvatar = styled(LazyImage)`
    display: block;
    width: 100%;
`;

const TeamMemberName = styled.span`
    display: block;
    color: ${ styles.colors.darkblack };
    font-weight: bold;
    text-transform: uppercase;
    line-height: 1.3em;
    font-size: 0.8em;
`;

const TeamMemberTitle = styled.i`
    color: ${ styles.colors.lightblue };
    display: inline-block;
    margin-bottom: .5em;
    font-style: italic;
`;

const FrontSide = styled.div`
    z-index: 900;
    font-size: 1em;
    background-color: ${ styles.colors.modify(styles.colors.athens)
                                      .lighten(0.05)//eslint-disable-line no-magic-numbers
                                      .hex() };
    text-align: left;
    display: grid;
    grid-template-columns: 3fr 7fr;
    grid-gap: 0.5em 0.5em;
    align-content: start;
    transform: rotateY(0deg);
	backface-visibility: hidden;
	transition: all .4s ease-in-out;

    &:after {
        display: inline-block;
        font-family: 'socialIcons';
        content: '\\004b';
        position: absolute;
        top: 0;
        right: 0;
        font-size: 1.25em;
        padding: .5em;
        color: ${ styles.colors.lightblue };
        cursor: pointer;
    }

    @media ${ styles.media.tablet } {
        grid-template-columns: 1fr;
        grid-gap: 0.3em 1em;
        text-align: center;
    }
`;
FrontSide.displayName = 'FrontSide';

const BackSide = styled.div`
    font-size: 1em;
    padding: 0.8em;
    display: grid;
    grid-gap: 0.5em 0.5em;
    justify-items: center;
    transition: all .4s ease-in-out;
    @media ${ styles.media.tablet } {
        height: inherit;
        position: absolute;
        top: 0;
        z-index: 1000;
        transform: rotateY(-180deg);
        backface-visibility: hidden;
    }
`;
BackSide.displayName = 'BackSide';

/*::
type TeamMemberProps = {|
    className?: string,
    name: string,
    photo: string,
    title?: string,
    children: React.Node,
    socialProfiles?: Object,
    onClick: Event => void,
|}
*/
export const TeamMember/*:ComponentType<TeamMemberProps>*/= styled((props/*:TeamMemberProps*/) =>
    <div className={ props.className } onClick={props.onClick}>
        <FrontSide>
            <TeamMemberAvatar src={ props.photo } />
            <div>
                <TeamMemberName>{ props.name }</TeamMemberName>
                <TeamMemberTitle>{ props.title }</TeamMemberTitle>
            </div>
        </FrontSide>
        <BackSide>
            <p>
                { props.children }
            </p>
            <TeamIcons networks={ props.socialProfiles } />
        </BackSide>
    </div>
)`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    transform-style: preserve-3d;
    transition: all 0.4s linear;
    border-radius: 2px;

    &.flip ${ BackSide } {
        display: grid;
    }

    @media ${ styles.media.tablet } {
        &.flip ${ FrontSide } {
            z-index: 900;
            transform: rotateY(180deg);
        }
        &.flip ${ BackSide } {
            z-index: 1000;
            transform: rotateX(0deg) rotateY(0deg);
        }
    }

    & > ${ FrontSide } {
        & > div {
            display: grid;
            padding: 1.2em 0.1em 0.8em;
            grid-gap: 0.3em 0.5em;
            align-items: center;
        }

        & ${ TeamMemberTitle } {
            font-size: 0.9em;
        }

        @media ${ styles.media.tablet } {
            & > div {
                padding: 0.6em 0.1em;
            }
            & ${ TeamIcons } {
                justify-content: center;
            }
        }
    }

    & > ${ BackSide }{
        display: none;
        grid-template-rows: auto 2em;
        background-color: ${ styles.colors.dark };
        color: ${ styles.colors.athens };

        & p {
            font-size: 0.8em;
            line-height: 1.4em;
            text-align: center;
        }

        & ${ TeamIcons } {
            & > ${ TeamIcon } {
                color: ${ styles.colors.lightblue };
            }
        }

        @media ${ styles.media.tablet } {
            display: grid;
        }
    }
`;
