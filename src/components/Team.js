//@flow
import * as React from 'react';
import styled from 'styled-components';
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
	padding: ${ padding.large };
	background-color: ${ colors.grey };
	border-radius: ${ border.radius.small };
	margin-bottom: ${ margin.small };
	color: ${ colors.softblack };
`;
export const TeamMemberAvatar = styled.img`
    max-width: 100%;
    border-radius: 50%;
    margin-bottom: 25px;
	display: inline-block;
`;
const title_style = `
	text-rendering: optimizelegibility;
	color: ${ colors.darkblack };
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
