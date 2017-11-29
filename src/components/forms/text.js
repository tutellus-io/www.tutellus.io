//@flow
import React from 'react';
import {negate, isEmpty, has, omit} from 'lodash';

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
export const TextField = (props/*:TextFieldProps*/) => {
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
};
