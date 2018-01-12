//@flow
import React from 'react';
import {negate, isEmpty, has, omit} from 'lodash';
import styled from 'styled-components';
import {Input, Label, Field} from './styled';

const nonEmpty = negate(isEmpty);

/*::
type TextFieldProps = {|
    field: {
        name: string,
    },
    form: {
        errors: Object,
    },
    className: string,
    label?: {
        value: string,
    }
|}
*/
export const TextField = styled((props/*:TextFieldProps*/) => {
    const {
        field,
        form,
        className = '',
        label = {},
    } = props;
    const rest = omit(props, ['field', 'form', 'className']);
    const has_error = has(form, `errors.${ field.name }`) && has(form, `touched.${ field.name }`);
    return (
        <Field className={ `${ className } ${ has_error ? 'error' : '' }` }>
            { nonEmpty(label) &&
            <Label className="mbxs" {...label} >{ label.value }</Label>
            }
            <Input {...field} {...rest} />
            {
                has_error &&
                <div className='error_placeholder'>
                    <div className='error-msg'>{form.errors[field.name]}</div>
                </div>
            }
        </Field>
    );
})``;

export const ViewField = styled(props => {
    const {
        value,
        className,
        label = {},
    } = props;
    return (
        <div className={ className }>
            { nonEmpty(label) &&
                <Label {...label} >{ label.value }</Label>
            }
            <div >{value}</div>
        </div>
    );
})`
    margin-bottom: ${ props => (props.no_margin ? '' : '1.5em') };
    & > div {
        display: block;
        padding: 0.6em 0.9em;
        border: 1px solid #CED3D9;
        border-radius: 3px;
        background-color: #FFFFFF;
        font-weight: 200;
        font-size: 1em;
    }
`;

export const ErrorField = props => {
    const {
        field,
        form,
        className = '',
    } = props;
    const has_error = has(form, `errors.${ field.name }`) && has(form, `touched.${ field.name }`);
    return (
        <Field className={ `${ className } ${ has_error ? 'error' : '' }` }>
            {
                has_error &&
                <div className='error_placeholder'>
                    <div className='error-msg'>{form.errors[field.name]}</div>
                </div>
            }
        </Field>
    );
};
