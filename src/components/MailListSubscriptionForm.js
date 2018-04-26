//@flow
/* global fetch: false */
import React from 'react';
/*:: import type {ComponentType} from 'react' */
import PropTypes from 'prop-types';
import {translate} from 'react-i18next';
import styled from 'styled-components';
import Yup from 'yup';
import {Form, Field, Formik} from 'formik';
import styles from '../styles';
import {
    TextField,
    Field as myField,
    Button,
    Input,
} from './';

import {cfg} from '../config';
import {observer, inject} from 'mobx-react';

export const subscribeTo = async(list_id/*:string*/, form_data/*:Object*/)/*:Promise<void>*/=> {
    const params = ((Object.entries(form_data)/*:any*/)/*:Array<[string, string]>*/)
    .map(([field_name, field_value]) =>
        `${ field_name }=${ encodeURIComponent(field_value) }`
    );
    const subscribe_url = `${ cfg.MAILCHIMP_URL }&id=${ list_id }&${ params.join('&') }`;
    await fetch(subscribe_url, {mode: 'no-cors'});
};

/*::
type FormProps = {|
    config: any,
    className?: string,
    t: string => string,
|}
*/
const SubscriptionFormComponent/*:ComponentType<*>*/ = inject('config')(observer(({t, config, className}/*:FormProps*/) => {
    const validationSchema = Yup.object().shape({
        EMAIL: Yup.string().required(t('email_required_err'))
        .email(t('email_email_err')),
    });
    const subscribe = async(form_data = {}, {setSubmitting, setErrors, setStatus, resetForm}) => {
        const form_reset_timeout = 4000;
        const general_mail_list = config.MAILLIST_GENERAL;
        try {
            await subscribeTo(((general_mail_list/*:any*/)/*:string*/), form_data);
            setStatus({done: t('subscription_successful')});
            setTimeout(() => {
                resetForm();
                setSubmitting(false);
            }, form_reset_timeout);
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
                //necesario para mailchimp
                //eslint-disable-next-line id-length
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
}));
SubscriptionFormComponent.propTypes = {
    className: PropTypes.string,
};

export const SubscriptionForm/*:ComponentType<*>*/ = translate('mailinglist')(SubscriptionFormComponent);

export const MailListSubscriptionForm/*:ComponentType<*>*/ = styled(SubscriptionForm)`
    @media ${ styles.media.tablet } {
        display: block;
        margin: 0 auto;
        width: 80%;
        & ${ myField } {
            display: inline-block;
            width: 60%;
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
            width: calc(40% - 1em);
            vertical-align: top;
        }
    }
    @media ${ styles.media.laptop } {
        width: 75%;
        & ${ myField } {
            width: 70%;
        }
        & ${ Button } {
            width: calc(30% - 1em);
        }
    }
`;
