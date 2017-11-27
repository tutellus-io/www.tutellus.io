//@flow
/* global fetch: false, Headers: false */
import React from 'react';
import {translate} from 'react-i18next';
import Yup from '../yup';
import {Form, Field, Formik} from 'formik';
import {
    TextField,
    Button,
} from './';

const SUBSCRIBE_URL = "https://tutellus.us17.list-manage.com/subscribe/post-json?u=ffe45494a6104522759bbdcb4&id=3275465a01&c=?";
export const MailListSubscriptionForm = translate('mailinglist')(({t}) => {
    const validationSchema = Yup.object().shape({
        EMAIL: Yup.string().required(t('signup:maillist_email_required_err'))
               .email(t('signup:maillist_email_email_err')),
    });

    const subscribe = async (form_data = {}, {setSubmitting, setErrors, resetForm}) => {
        try {
            const params = Object.entries(form_data).map(x => x.join('='));
            const subscribe_url = `${ SUBSCRIBE_URL }&${ params.join('&') }`;
            const response = await fetch(subscribe_url, {mode: 'no-cors'});
            if (!response.ok) {
                throw new Error();
            }
        } catch (error) {
            setErrors({EMAIL: t('subscription_failed')});
        } finally {
            setSubmitting(false);
            resetForm();
        }
    };

    return (
        <div id="mc_embed_signup">
            <Formik
                validationSchema={ validationSchema }
                onSubmit={ subscribe }
                initialValues={ {
                    EMAIL: '',
                    b_ffe45494a6104522759bbdcb4_3275465a01: "",
                } }
                component={ ({isSubmitting}) =>
            		<Form >
                        <div id="mc_embed_signup_scroll">
                            <Field component={ TextField } name="EMAIL" placeholder={ t('email_address') } />
                            <div style={ {position: "absolute", left: "-5000px"} } aria-hidden="true">
                                <Field component={ TextField } name="b_ffe45494a6104522759bbdcb4_3275465a01" tabIndex="-1" value="foobar" />
                            </div>
                            <Button full type="submit" primary disabled={ isSubmitting }>{ t('subscribe') }</Button>
                        </div>
                    </Form>
                }
            />
        </div>
    );
});
