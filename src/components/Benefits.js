//@flow
import * as React from 'react';
/*:: import type {ComponentType as Component} from 'react' */
import styled from 'styled-components';

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
        { props.children }
    </div>
)`
    & > h4 {
        font-size: 1em;
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

    & > * {
        font-size: 0.9em;
    }
`;
