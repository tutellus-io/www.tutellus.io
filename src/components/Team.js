//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';
import styles from '../styles';

const childrenAsColumns = props => {
    const children_count = React.Children.count(props.children);
    return `repeat(${ children_count }, ${ 100 / children_count }%)`;
};

const TeamIcon = styled.li`
    width: 18%;
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
    margin-bottom: 1em;
    border-radius: 50%;
`;

const TeamMemberName = styled.span`
    display: block;
    color: ${ styles.colors.darkblack };
    font-weight: bold;
    margin-bottom: 1.25em;
`;

const TeamMemberTitle = styled.i`
    color: ${ styles.colors.lightblue };
    display: inline-block;
    margin-bottom: .2em;
`;
/*::
type TeamMemberProps = {|
    className?: string,
    name: string,
    photo: string,
    title: string,
    children: React.Node,
    socialProfiles?: Object,
|}
*/
export const TeamMember/*:ComponentType<TeamMemberProps>*/= styled((props/*:TeamMemberProps*/) =>
    <div className={ props.className }>
        <TeamMemberAvatar src={ props.photo } />
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
)`
    padding: 1em;
    padding-top: 1.5em;
    border-radius: ${ styles.border.radius.small };
    background-color: ${ styles.colors.grey };
    text-align: left;
    display: grid;
    grid: "avatar name"
          "avatar title"
          "avatar bio"
          ". social-icons" / 40% 60%;
    & > ${ TeamMemberAvatar } {
        grid-area: avatar;
    }
    & > ${ TeamMemberName } {
        grid-area: name;
    }
    & > ${ TeamMemberTitle } {
        grid-area: title;
    }
    & > p {
        margin-top: .25em;
        grid-area: bio;
    }
    & > ${ TeamIcons } {
        grid-area: social-icons;
    }

    & p {
        font-size: 0.8em;
        line-height: 1.5em;
        font-style: italic;
    }
    & ${ TeamIcons } {
        display: flex;
        flex-flow: row nowrap;
        justify-content: start;
        & > ${ TeamIcon } {
            color: ${ styles.colors.darkblack };
        }
    }
    @media ${ styles.media.tablet } {
        font-size: 1.5em;
    }
    @media ${ styles.media.laptop } {
        display: block;
        text-align: center;
        & > ${ TeamMemberAvatar } {
            width: 7em;
        }
        & > ${ TeamIcons } {
            margin-top: 1em;
            justify-content: center;
        }
    }
    @media ${ styles.media.desktop } {
        font-size: 2em;
    }
`;
export const Team = styled.div`
    margin: 1em;
    & ${ TeamMember } {
        margin-bottom: 1em;
    }
    @media ${ styles.media.laptop } {
        display: grid;
        grid-column-gap: .5em;
        grid-auto-flow: column;
        font-size: .5em;
        grid-template-columns: ${ childrenAsColumns };
    }
`;
