//@flow
/* global fetch: false, Headers: false */
import React from 'react';
/*:: import type {ComponentType} from 'react' */
import {translate} from 'react-i18next';
import styled from 'styled-components';
import Yup from 'yup';
import {Form, Field, Formik} from 'formik';
import {
    TextField,
    Field as myField,
    Button,
} from './';

const Text = styled.div`
    margin: 0.5em 0;
    font-weight: 300;
    text-shadow: 0 0 5px rgba(0,0,0,1);
    line-height: 1.3em;
    font-size: 0.65em;
    & a {
        cursor: pointer;
        text-decoration: underline;
    }
`;
/*::
type FormProps = {|
    config: any,
    className?: string,
    t: string => string,
|}
*/
const JoinICOForm/*:ComponentType<*>*/ = styled(({t, className, join_url}/*:FormProps*/) => {
    const joinCryptonomos = async(form_data/*:Object*/)/*:Promise<void>*/=> {
        const json_headers = new Headers();
        json_headers.append('Content-Type', 'application/json');

        return await fetch(join_url, {
            method: 'POST',
            headers: json_headers,
            body: JSON.stringify(form_data),
        })
        .then(res => res.json());
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().required(t('email_required_err'))
        .email(t('email_email_err')),
        name: Yup.string().required(t('name_required_err')),
    });
    const onSubmit = async(form_data = {}, {setSubmitting, setErrors, setStatus, resetForm}) => {
        const form_reset_timeout = 4000;
        try {
            const response_crypto = await joinCryptonomos(form_data);
            let response_msg = t('subscription_successful');
            if (response_crypto.duplicate === 1) {
                response_msg = t('subscription_duplicated');
            }
            setStatus({done: response_msg});
            setTimeout(() => {
                if (response_crypto.duplicate !== 1) {
                    resetForm();
                }
                setSubmitting(false);
            }, form_reset_timeout);
        } catch (error) {
            setErrors({email: t('subscription_failed')});
            setSubmitting(false);
        }
    };

    return (
        <Formik
            validationSchema={ validationSchema }
            onSubmit={ onSubmit }
            initialValues={ {
                email: '',
                name: '',
            } }
            component={ ({isSubmitting, status = {}}) =>
                <Form className = {className}>
                    <Field component={ TextField } name="name" placeholder={ t('name') } />
                    <Field component={ TextField } name="email" placeholder={ t('email') } />
                    <Button full type="submit" primary disabled={ isSubmitting }>{ t('join') }</Button>
                    <Text dangerouslySetInnerHTML={ {__html: t("disclaimer")} } />
                    {
                        status.done &&
                        <div className='done_placeholder'>
                            {status.done}
                        </div>
                    }
                </Form>
            }
        />
    );
})`
    & ${ myField } {
        & .error_placeholder {
            font-size:0.8em;
            font-weight: bold;
            color: #FF0000;
            text-shadow: 0 0 10px rgba(0,0,0,1);
        }
        margin-bottom: 1em;
    }
    & ${ Button } {
        padding: 0.5em 1.2em;
    }
    & .done_placeholder {
        margin-top: 1em;
    }
`;

export const JoinICO/*:ComponentType<*>*/ = translate('join')(JoinICOForm);
JoinICO.displayName = "JoinICO";
