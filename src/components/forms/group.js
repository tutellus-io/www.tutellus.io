//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react'*/
import R from 'ramda';
import styled from 'styled-components';
import {Label, Field} from './styled';

const hasError = (field, form) =>
    R.path(['errors', field], form) && R.path(['touched', field], form);

export const Radio = (props/*:mixed*/) =>
    <ItemField {...props} type='radio'/>;
;

/*::
type CheckboxProps = {
    field: {
        value: void,
    },
}
*/
export const Checkbox/*:ComponentType<CheckboxProps>*/ = (props/*:CheckboxProps*/) => {
    const {
        field: {
            value,
        },
    } = props;
    return (
        <ItemField {...props} checked={value} type='checkbox'/>
    );
};

const ItemFieldElement = ({className, field, form, label, value, type, checked}) => {
    const uid = `${ field.name }-${ value }`;
    return (
        <div className={className}>
            <input
                type={type}
                id={uid}
                name={field.name}
                value={value}
                onChange={ event => {
                    form.handleBlur(event);
                    form.handleChange(event);
                } }
                onBlur={ event => {
                    form.handleBlur(event);
                } }
                checked={checked}
            />
            <Label inline htmlFor={uid}>{ label }</Label>
        </div>
    );
};
const ItemField = styled(ItemFieldElement)`
    display: inline;
`;

/*::
type GroupFieldProps = {|
    field: {|name: string|},
    form: {|errors: Object|},
    label: {|value: string|},
    children?: React.Node,
    className: string,
|}
*/
export const GroupField = (props/*:GroupFieldProps*/) => {
    const {
        field,
        form,
        label,
        children,
        className = '',
    } = props;
    const has_error = hasError(field.name, form);
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

/*::
type OneCheckboxProps = {|
    field: {
        name: string,
        value: void,
    },
    form: {
        errors: Object,
        values: Object,
    },
    className: string,
|}
*/
export const OneCheckbox = (props/*:OneCheckboxProps*/) => {
    const {
        field,
        form,
        className = '',
    } = props;
    field.value = form.values[field.name];
    const has_error = hasError(field.name, form);
    return (
        <Field no_margin className={ `${ className } ${ has_error ? 'error' : '' }` } >
            <Checkbox { ...props }/>
            {
                has_error &&
                <div className='error_placeholder'>
                    <div className='error-msg'>{form.errors[field.name]}</div>
                </div>
            }
        </Field>
    );
};

