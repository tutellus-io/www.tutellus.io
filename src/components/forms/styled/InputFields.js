//@flow
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';

import {colors} from '../../../styles';

export const Input = styled.input`
    display: block;
    padding: 0.6em 0.9em;
    width: 100%;
    border: 1px solid ${ colors.bluegrey };
    border-radius: 3px;
    background-color: ${ colors.white };
    font-weight: 200;
    font-size: 1em;
    &[disabled] {
        background-color: ${ colors.grey };
    }
`;
/*::
type LabelProps = {
    inline?: bool,
}
*/
export const Label/*:ComponentType<LabelProps>*/ = styled.label`
    margin-bottom: ;
    display: ${ props => (props.inline ? 'inline' : 'block') };
    font-weight: bold;
    font-size: 1em;
    margin: 0.5em 0
`;

/*:: type FieldProps = {no_margin: bool} */
export const Field = styled.div`
    margin-bottom: ${ (props/*:FieldProps*/) => (props.no_margin ? '' : '1.5em') };
    &.error {
        input,
        textarea {
            border-color: ${ colors.googleplus };
        }

        > .error_placeholder {
            margin-top: 0.5em;
            color: ${ colors.googleplus };
        }
    }
`;
