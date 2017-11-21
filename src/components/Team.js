//@flow
import * as React from 'react';
import styled from 'styled-components';
import {SectionContent} from './PageSection';
import {SocialIcons, SocialIcon} from './Footer';
import styles from '../styles';
const {margin, padding, border, colors} = styles;

const childrenAsColumns = props => {
    const children_count = React.Children.count(props.children);
    return `repeat(${ children_count }, ${ 100 / children_count }%)`;
}
export const Team = styled.div`
    display: grid;
    grid-template-columns: ${ childrenAsColumns };
    grid-column-gap: 10px;
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
        <SocialIcons networks={ props.socialProfiles } />
        }
    </div>
)`
	text-align: center;
	padding: 15px;
	background-color: ${ colors.grey };
	border-radius: ${ border.radius.small };
	margin-bottom: ${ margin.small };
	color: ${ colors.softblack };
    font-size: 1em;
    & ${ TeamMemberName } {
        font-size: 1.2em;
    }
    & ${ TeamMemberTitle } {
        font-size: 1em;
    }
    & p {
        font-size: 0.8em;
        line-height: 1.5em;
        font-style: italic;
    }
    & ${ SocialIcons } {
        font-size: 0.6em;
        margin-top: 1em;
        & > ${ SocialIcon } {
            color: ${ colors.darkblack };
        }
    }
`;
export const TeamMemberAvatar = styled.img`
    width: 80%;
    border-radius: 50%;
    margin-bottom: 15px;
	display: inline-block;
`;
const title_style = `
	text-rendering: optimizelegibility;
	color: ${ colors.darkblack };
    font-weight: bold;
    display: block;
`;
export const TeamMemberName = styled.span`
	${ title_style }
	margin-bottom: ${ margin.small }
`;
export const TeamMemberTitle = styled.i`
	color: ${ colors.lightblue };
	display: inline-block;
	margin-bottom: ${ margin.small };
`;
