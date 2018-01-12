//@flow
import React from 'react';
import {Field, Form, Formik} from 'formik';
import Yup from '../../yup';

import {observer, inject} from 'mobx-react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {translate} from 'react-i18next';
import {
    TextField,
    Button,
    Text,
    ColumnCenter,
    subscribeTo,
} from '../../components';

const SIGNUP_MAIL_LIST = process.env.REACT_APP_MAILLIST_REGISTER;

const SignupFormElement = inject('store')(observer(props => {
    const {
        className,
        store,
        history,
        t,
    } = props;

    const onSubmit = async(values = {}, {
        setSubmitting,
        setErrors,
    }) => {
        try {
            subscribeTo(SIGNUP_MAIL_LIST/*:any*//*:string*/, {
                EMAIL: values.email,
                b_fb6c7232ef9595533c37d1fc0_8a25bf4ebc: "",
            });
            await store.register(values);
            history.push('/dashboard/home');
        } catch (err) {
            setErrors({email: t('signup:signup_email_already_err')});
            setSubmitting(false);
        };
    };
    const initialValues = {
        first_name: '',
        last_name: '',
        email: '',
        passwd: '',
        repasswd: '',
    };

    const MIN_PASSWD_LENGTH = 8;
    const MIN_PASSWD_STRENGTH = 55;

    const validationObj = {
        first_name: Yup.string().required(t('signup:signup_first_name_required_err')),
        last_name: Yup.string().required(t('signup:signup_last_name_required_err')),
        email: Yup.string().required(t('signup:signup_email_required_err'))
        .email(t('signup:signup_email_email_err')),
        passwd: Yup.string()
        .required(t('signup:signup_passwd_required_err'))
        .min(MIN_PASSWD_LENGTH, t('signup:signup_passwd_min_err'))
        .passwdStrength(MIN_PASSWD_STRENGTH, t('signup:signup_passwd_strength_err')),
        repasswd: Yup.string()
        .required(t('signup:signup_repasswd_required_err'))
        .sameAs(Yup.ref('passwd'), t('signup:signup_repasswd_sameas_err')),
    };

    return (
        <div className = {className}>
            <Formik
                validationSchema = {Yup.object().shape(validationObj)}
                onSubmit={onSubmit}
                initialValues={initialValues}
                component={({isSubmitting}) =>
                    <ColumnCenter>
                        <Form >
                            <Field component={TextField} name="first_name" placeholder={t('signup:signup_first_name_placeholder')} label={ {
                                required: "required",
                                value: t('signup:signup_first_name_label'),
                            } }/>
                            <Field component={TextField} name="last_name" placeholder={t('signup:signup_last_name_placeholder')} label={ {
                                required: "required",
                                value: t('signup:signup_last_name_label'),
                            } }/>
                            <Field component={TextField} name="email" placeholder={t('signup:signup_email_placeholder')} label={ {
                                required: "required",
                                value: t('signup:signup_email_label'),
                            } }/>
                            <Field key="passwd" component={TextField} name="passwd" type="password" placeholder={t('signup:signup_passwd_placeholder')} label={ {
                                required: "required",
                                value: t('signup:signup_passwd_label'),
                            } }/>
                            <Field key="repasswd" component={TextField} name="repasswd" type="password" placeholder={t('signup:signup_repasswd_placeholder')} label={ {
                                required: "required",
                                value: t('signup:signup_repasswd_label'),
                            } }/>
                            <Button full type="submit" primary disabled={isSubmitting}>{t('signup:signup_submit_btn')}</Button>
                            <Text center className="login">{t('signup:signup_already_registered')} <Link to='/login'>{t('signup:signup_login_link')}</Link> </Text>
                        </Form>
                    </ColumnCenter>
                }
            />
        </div>
    );
}));

export const SignupForm = styled(translate()(SignupFormElement))``;
