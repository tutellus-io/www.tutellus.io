import React from 'react';
import {has} from 'lodash';

import {Label, Field} from './styled';

export const Radio = (props) =>
    <ItemField {...props} type='radio'/>;
;

export const Checkbox = (props) =>
    <ItemField {...props} value={true} type='checkbox'/>;
;

const ItemField = ({className, field, form, label, value, type}) => {
    const uid = `${ field.name }-${ value }`;
    return (
        <div className={className}>
            <input
                type={type}
                id={uid}
                name={field.name}
                value={value}
                onChange={(e) => {
                    console.log('onChange', type, field.name);
                    form.handleBlur(e);
                    form.handleChange(e);
                }}
                onBlur={(e) => {
                    console.log('onBlur', type, field.name);
                    form.handleBlur(e);
                }}
            />
            <Label htmlFor={uid}>{ label }</Label>
        </div>
    );
};

export const GroupField = (props) => {
    const {
        field,
        form,
        label,
        children,
        className = '',
    } = props;
    const has_error = has(form, `errors.${ field.name }`) && has(form, `touched.${ field.name }`);
    console.log('GroupField', has_error, field.name);
    return (
        <Field className={ `${ className } ${ has_error ? 'error' : '' }` } >
            <Label className="mbxs" {...label} >{ label.value }</Label>
            {children}
            {
                has_error &&
                <div className='error_placeholder'>
                    <div className='error-msg'>{form.errors[field.name]}</div>
                </div>
            }
        </Field>
    );
};

export const OneCheckbox = (props) => {
    const {
        field,
        form,
        className = '',
    } = props;
    const has_error = has(form, `errors.${ field.name }`) && has(form, `touched.${ field.name }`);
    return (
        <Field className={ `${ className } ${ has_error ? 'error' : '' }` } >
            <ItemField {...props} value={true} type='checkbox'/>
            {
                has_error &&
                <div className='error_placeholder'>
                    <div className='error-msg'>{form.errors[field.name]}</div>
                </div>
            }
        </Field>
    );
};

