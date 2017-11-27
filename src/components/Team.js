//@flow
import * as React from 'react';
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
    margin-bottom: 1em;
	color: ${ styles.colors.darkblack };
    font-weight: bold;
`;

const TeamMemberTitle = styled.i`
	color: ${ styles.colors.lightblue };
	display: inline-block;
	margin-bottom: 1em;
`;
export const TeamMember = styled(props =>
    <div className={ props.className }>
        <TeamMemberAvatar src={ props.photo } />
        <TeamMemberName>{ props.name }</TeamMemberName>
        <TeamMemberTitle>{ props.title }</TeamMemberTitle>
        <p>
            { props.children }
        </p>
        { props.socialProfiles &&
            <TeamIcons networks={ props.socialProfiles } />
        }
    </div>
)`
    padding: 1em;
	border-radius: ${ styles.border.radius.small };
	background-color: ${ styles.colors.grey };
	text-align: center;

    & p {
        font-size: 0.8em;
        line-height: 1.5em;
        font-style: italic;
    }
    & ${ TeamIcons } {
        margin-top: 1em;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        & > ${ TeamIcon } {
            color: ${ styles.colors.darkblack };
        }
    }
    @media ${ styles.media.tablet } {
        font-size: 1.5em;
        display: grid;
        grid: "avatar name"
              "avatar title"
              "avatar bio"
              "avatar social-icons"
              / 50% 50%;
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
            grid-area: bio;
        }
        & > ${ TeamIcons } {
            grid-area: social-icons;
        }
    }
    @media ${ styles.media.laptop } {
        display: block;
        & > ${ TeamMemberAvatar } {
            width: 7em;
        }
    }
    @media ${ styles.media.dektop } {
        font-size: 2em;
    }
/*
	padding: 15px;
	background-color: ${ styles.colors.grey };
	border-radius: ${ styles.border.radius.small };
	margin-bottom: ${ styles.margin.small };
	color: ${ styles.colors.softblack };
    font-size: 1em;
    & ${ TeamMemberName } {
        font-size: 1.2em;
    }
    & ${ TeamMemberTitle } {
        font-size: 1em;
    }
    */
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
/*
    display: grid;
    grid-template-columns: ${ childrenAsColumns };
    grid-column-gap: 10px;
    */
`;
