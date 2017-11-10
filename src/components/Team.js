//@flow
import * as React from 'react';
import styled from 'styled-components';
import {SectionContent} from './PageSection';
import styles from '../styles';
const {margin, padding, border, colors} = styles;

/*::
type url = string;
type TeamMemberAttrs = {
    className: string,
    photo: url,
    name: string,
    title: string,
    children?: React.Node,
}
*/
const childrenAsColumns = props => {
    const children_count = React.Children.count(props.children);
    return `repeat(${ children_count }, ${ 100 / children_count }%)`;
}
export const Team = styled.div`
    display: grid;
    grid-template-columns: ${ childrenAsColumns };
    grid-column-gap: 10px;
`;
export const TeamMember = styled((props/*: TeamMemberAttrs */) =>
    <div className={ props.className }>
        <TeamMemberAvatar src={ props.photo } />
        <TeamMemberName>{ props.name }</TeamMemberName>
        <TeamMemberTitle>{ props.title }</TeamMemberTitle>
        <p>
            { props.children }
        </p>
    </div>
)`
	text-align: center;
	padding: 15px;
	background-color: ${ colors.grey };
	border-radius: ${ border.radius.small };
	margin-bottom: ${ margin.small };
	color: ${ colors.softblack };
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
	${ styles.text.large }
`;
export const TeamMemberTitle = styled.i`
	${ styles.text.medium }
	color: ${ colors.lightblue };
	display: inline-block;
	margin-bottom: ${ margin.small };
`;
