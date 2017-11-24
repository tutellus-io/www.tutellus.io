import React from 'react';
import {has} from 'lodash';
import styled from 'styled-components';
import {Label, Field} from './styled';

export const Radio = props =>
    <ItemField {...props} type='radio'/>;
;

export const Checkbox = props =>
    <ItemField {...props} value={true} type='checkbox'/>;
;

const ItemFieldElement = ({className, field, form, label, value, type}) => {
    const uid = `${ field.name }-${ value }`;
    return (
        <div className={className}>
            <input
                type={type}
                id={uid}
                name={field.name}
                value={value}
                onChange={e => {
                    form.handleBlur(e);
                    form.handleChange(e);
                }}
                onBlur={e => {
                    form.handleBlur(e);
                }}
            />
            <Label inline htmlFor={uid}>{ label }</Label>
        </div>
    );
};
const ItemField = styled(ItemFieldElement)`
    display: inline;
`;

export const GroupField = props => {
    const {
        field,
        form,
        label,
        children,
        className = '',
    } = props;
    const has_error = has(form, `errors.${ field.name }`) && has(form, `touched.${ field.name }`);
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

export const OneCheckbox = props => {
    const {
        field,
        form,
        className = '',
    } = props;
    const has_error = has(form, `errors.${ field.name }`) && has(form, `touched.${ field.name }`);
    return (
        <Field no_margin className={ `${ className } ${ has_error ? 'error' : '' }` } >
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

