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
    AButton,
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

const CheckMark = styled(({className}) =>
    <svg className={ className } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle cx="26" cy="26" r="25" fill="none"/>
        <path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
    </svg>
)`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: block;
    stroke-width: 2;
    stroke: #fff;
    stroke-miterlimit: 10;
    margin: 0% auto;
    box-shadow: inset 0px 0px 0px #7ac142;
    animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;

    & circle {
        stroke-dasharray: 166;
        stroke-dashoffset: 166;
        stroke-width: 2;
        stroke-miterlimit: 10;
        stroke: #7ac142;
        fill: none;
        animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
    }
    & path {
        transform-origin: 50% 50%;
        stroke-dasharray: 48;
        stroke-dashoffset: 48;
        animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
    }

    @keyframes stroke {
    100% {
        stroke-dashoffset: 0;
    }
    }
    @keyframes scale {
    0%, 100% {
        transform: none;
    }
    50% {
        transform: scale3d(1.1, 1.1, 1);
    }
    }
    @keyframes fill {
    100% {
        box-shadow: inset 0px 0px 0px 30px #7ac142;
    }
    }
`;

const SuccessJoin = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    width: calc(100% + 1em);
    display: grid;
    grid-row-gap: 1.5em;
    background: rgba(0, 0, 0, 0.9);
    justify-content: center;
    align-content: center;
    margin: -0.5em;
    padding: 0 0.5em 2em;
    line-height: 1.4em;
    text-align: center;
`;
SuccessJoin.displayName = 'SuccessJoin';
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
        const form_reset_timeout = 20000;
        try {
            const response_crypto = await joinCryptonomos(form_data);
            if (response_crypto.duplicate === 1) {
                setErrors({email: t('subscription_duplicated')});
            } else {
                setStatus({done: t('subscription_successful')});
            }
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
                <Form className={ className }>

                    <Field component={ TextField } name="name" placeholder={ t('name') } />
                    <Field component={ TextField } name="email" placeholder={ t('email') } />
                    <Text dangerouslySetInnerHTML={ {__html: t("disclaimer_countries")} } />
                    <Button full type="submit" primary disabled={ isSubmitting }>{ t('join') }</Button>
                    <Text dangerouslySetInnerHTML={ {__html: t("disclaimer")} } />
                    {
                        status.done &&
                        <SuccessJoin><CheckMark/>{status.done}</SuccessJoin>
                    }
                </Form>
            }
        />
    );
})`
    position: relative;
    max-width: 20em;
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
`;

export const JoinICO/*:ComponentType<*>*/ = translate('join')(JoinICOForm);
JoinICO.displayName = "JoinICO";


export const BuyICO = translate('join')(styled(({t, className}) =>
    <AButton className={ className }
        href={ t('buy_url') }
        primary>
        { t('buy') }
    </AButton>
)`
    justify-self: center;
    align-self: center;
    padding: 0.6em 1.5em;
    font-size: 1em;
`);
