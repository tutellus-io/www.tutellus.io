//@flow
import * as React from 'react';
/*:: import type {ComponentType as Component} from 'react' */
import styled from 'styled-components';

import styles from '../styles';

export const Benefits = styled.div`
    @media ${ styles.media.tablet } {
        display:grid;
        grid-template-columns: repeat(2, 50%);
    }
`;
/*::
type UserGroupProps = {|
    className?: string,
    name: string,
    icon: string,
    children: React.Node,
|}
*/
export const UserGroup/*:Component<UserGroupProps>*/= styled(props =>
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
