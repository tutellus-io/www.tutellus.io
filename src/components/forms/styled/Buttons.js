//@flow
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {colors} from '../../../styles';

/*::
type ButtonProps = {|
    full?: bool,
    type?: string,
    primary?: bool,
    disabled?: bool,
    children: any,
    onClick?: (void => void),
|}
*/
export const Button/*:ComponentType<ButtonProps>*/ = styled.button`
    color: ${ colors.white };
    display: block;
    border: none;
    padding: 0.8em 1.2em;
    border-radius: 3px;
    font-size: 1.1em;
    cursor: pointer;
    letter-spacing: .035em;
    text-align: center;
    background-color: ${ props=> (props.primary
        ? colors.lightblue
        : colors.midgrey)
};
    ${ props => (props.full ? 'width: 100%' : '') };
    transition: all 0.3s ease-in;
    text-align: center;
    text-transform: uppercase;
    line-height: 1.4em;
    &:hover {
        background-color: ${ props =>
            colors.modify(props.primary ? colors.lightblue
                                        : colors.midgrey)
                  .darken(0.2)//eslint-disable-line no-magic-numbers
                  .hex() }
    }
`;

export const LinkButton = (Button/*:any*/).withComponent(Link);
export const AButton = (Button/*:any*/).withComponent('a');

