//@flow
import React from 'react';
import styled from 'styled-components';
import styles from '../styles';
export const Benefits = styled.div`
    @media ${ styles.media.tablet } {
        display:grid;
        grid-template-columns: repeat(2, 50%);
    }
`;
export const UserGroup = styled(props =>
    <div className={ props.className }>
        <h4>{ props.name }</h4>
        <div>{ props.children }</div>
    </div>
)`
    & > h4 {
        margin: 1em 0;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;

        &:before {
            content: '';
            background: url(${ props => props.icon }) center center no-repeat;
            padding: 4em;
            display: block;
            margin-bottom: 1em;
            margin-right: -1em;
        }
    }
    @media ${ styles.media.laptop } {
        display: grid;
        grid-column-gap: 1em;
        grid-template-columns: 33% 67%;
        align-items: center;
    }
`;
export const BulletList = styled.ul``;
export const BulletPoint = styled.li`
    line-height: 2em;
    &:before {
        content: '';
        display: inline-block;
        border: solid 5px transparent;
        border-left-color: ${ styles.colors.lightblue };
        border-right: none;
        margin: 0 10px;
    }
`;
