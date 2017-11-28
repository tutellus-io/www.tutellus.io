//@flow
/* global fetch: false, Headers: false */
import React from 'react';
import {translate} from 'react-i18next';
import Yup from '../yup';
import styled from 'styled-components';
import {Form, Field, Formik} from 'formik';
import {
    TextField,
    Field as myField,
    Button,
    Input,
} from './';

const SUBSCRIBE_URL = "https://tutellus.us14.list-manage.com/subscribe/post-json?u=fb6c7232ef9595533c37d1fc0&id=fa6bf30be0&c=?";
export const SubscriptionForm = translate('mailinglist')(({t, className}) => {
    const validationSchema = Yup.object().shape({
        EMAIL: Yup.string().required(t('email_required_err'))
        .email(t('email_email_err')),
    });

    const SHOW_MS = 4000;
    const subscribe = async(form_data = {}, {setSubmitting, setErrors, setStatus, resetForm}) => {
        try {
            const params = Object.entries(form_data).map(x =>
                `${ x[0] }=${ encodeURIComponent(x[1]) }`
            );
            const subscribe_url = `${ SUBSCRIBE_URL }&${ params.join('&') }`;
            await fetch(subscribe_url, {mode: 'no-cors'});
            setStatus({done: t('subscription_successful')});
            setTimeout(() => {
                resetForm();
                setSubmitting(false);
            }, SHOW_MS);
        } catch (error) {
            setErrors({EMAIL: t('subscription_failed')});
            setSubmitting(false);
        }
    };

    return (
        <Formik
            validationSchema={ validationSchema }
            onSubmit={ subscribe }
            initialValues={ {
                EMAIL: '',
                b_fb6c7232ef9595533c37d1fc0_fa6bf30be0: "",
            } }
            component={ ({isSubmitting, status = {}}) =>
                <Form className = {className}>
                    <Field component={ TextField } name="EMAIL" placeholder={ t('email_address') } />
                    <Button full type="submit" primary disabled={ isSubmitting }>{ t('subscribe') }</Button>
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
});

export const MailListSubscriptionForm = styled(SubscriptionForm)`
    display: block;
    margin: 0 auto;
    width: 75%;
    & ${ myField } {
        display: inline-block;
        width: 70%;
        ${ Input } {
            padding: 0.8em;
        }
        & .error_placeholder {
            font-weight: bold;
        }
    }
    & ${ Button } {
        display: inline-block;
        margin-left: 1em;
        width: calc(30% - 1em);
        vertical-align: top;
    }
`
;
