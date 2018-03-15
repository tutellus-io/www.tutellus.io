//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';
import styles from '../styles';

const TeamIcon = styled.li`
    width: 35px;
    margin: 0.15em;
`;

const TeamIcons = styled(props =>
    <ul className={ props.className }>
        {
            Object.entries(props.networks).map(([network, link]) =>
                <TeamIcon key={ network }>
                    <a href={ link }>
                        <img src={`/images/icons/${ network }.svg`} alt=""/>
                    </a>
                </TeamIcon>
            )
        }
    </ul>
)``;

const TeamMemberAvatar = styled.img`
    display: block;
    max-width: 80%;
    margin: 0 auto;
    border-radius: 50%;
    align-self: center;
`;

const TeamMemberName = styled.span`
    display: block;
    color: ${ styles.colors.darkblack };
    font-weight: bold;
    margin-bottom: 1em;
`;

const TeamMemberTitle = styled.i`
    color: ${ styles.colors.lightblue };
    display: inline-block;
    margin-bottom: .5em;
`;
/*::
type TeamMemberProps = {|
    className?: string,
    name: string,
    photo: string,
    title?: string,
    children: React.Node,
    socialProfiles?: Object,
|}
*/
export const TeamMember/*:ComponentType<TeamMemberProps>*/= styled((props/*:TeamMemberProps*/) =>
    <div className={ props.className }>
        <TeamMemberAvatar src={ props.photo } />
        <div>
            <TeamMemberName>{ props.name }</TeamMemberName>
            { props.title &&
                <TeamMemberTitle>{ props.title }</TeamMemberTitle>
            }
            <p>
                { props.children }
            </p>
            { props.socialProfiles &&
                <TeamIcons networks={ props.socialProfiles } />
            }
        </div>
    </div>
)`
    padding: 0.5em;
    font-size: 0.9em;
    border-radius: ${ styles.border.radius.small };
    background-color: ${ styles.colors.grey };
    text-align: left;
    display: grid;
    grid-template-columns: 3fr 7fr;
    grid-gap: 0.5em 0.5em;
    align-content: start;
    
    & > div {
        display: grid;
    }
    & > p {
        margin-top: .25em;
    }

    & p {
        font-size: 0.9em;
        line-height: 1.5em;
        font-style: italic;
    }
    
    & ${ TeamMemberTitle } {
        font-size: 0.9em;
    }
    
    & ${ TeamIcons } {
        margin-top: .5em;
        display: flex;
        flex-flow: row nowrap;
        justify-content: start;
        & > ${ TeamIcon } {
            color: ${ styles.colors.darkblack };
        }
    }
    @media ${ styles.media.tablet } {
        padding: 1em;
        grid-template-columns: 1fr;
        grid-gap: 1em 1em;
        text-align: center;
        & ${ TeamMemberAvatar } {
            width: 7em;
        }
        & ${ TeamIcons } {
            justify-content: center;
        }
    }
`;
export const Team = styled.div`
    display: grid;
    grid-gap: 1em 1em;
    font-size: 1em;
    grid-template-columns: repeat(auto-fit, minmax(11em, 1fr));
`;
