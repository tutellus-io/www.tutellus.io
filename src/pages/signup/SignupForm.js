import React from 'react';
import {TextField, Button, PageTitle, Text} from '../../components';
import {Field, Form, Formik} from 'formik';
import Yup from 'yup';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {translate} from 'react-i18next';

import passwordMeter from 'passwordmeter';

Yup.addMethod(Yup.string, 'passwdStrength', function(level, message) {
    return this.test('passwdStrength', message, (value) => {
        const result = passwordMeter.checkPass(value);
        return result >= level;
    });
});

Yup.addMethod(Yup.mixed, 'sameAs', function(ref, message) {
    return this.test('sameAs', message, function(value) {
        if (value) {
            const other = this.resolve(ref);
            return !other || value === other;
        }
        return !value;
    });
});

const SignupFormElement = (props) => {
    console.log('SignupForm', props);
    const {
        db,
        syncUser,
        updateUser,
        showAlert,
        nextStep,
        className,
        user,
        t,
    } = props;

    const onSubmit = (values = {}) => {
        const {
            email,
            passwd,
            first_name,
            last_name,
            uid = null,
        } = values;

        let p_auth = Promise.resolve({uid});
        if (!uid) {
            p_auth = db.auth().createUserWithEmailAndPassword(email, passwd);
        }

        p_auth.then(({uid}) => {
            syncUser(uid);
            updateUser({
                uid,
                first_name,
                last_name,
                email,
                signup_ok: true,
            });
            nextStep();
        })
        .catch((error) => {
            showAlert({text: `Upps ${ error.message }`});
        });
    };
    const initialValues = _.defaults(_.pick(user, [
        'first_name',
        'last_name',
        'email',
        'passwd',
        'uid',
    ]), {
        first_name: '',
        last_name: '',
        email: '',
        passwd: '',
    });

    const validationObj = {
        first_name: Yup.string().required('Escribe tu nombre'),
        last_name: Yup.string().required('Escribe tus apellidos'),
        email: Yup.string().email('No parece un email válido')
        .required('Escribe tu email'),
    };

    if (!initialValues.uid) {
        validationObj.passwd = Yup.string()
        .required('Escribe tu contraseña')
        .min(8, 'Escribe al menos 8 caracteres')
        .passwdStrength(60, 'La password es demasido débil');
        validationObj.repasswd = Yup.string().sameAs(Yup.ref('passwd'), "Passwords don't match");
    }

    return (
        <div className = {className}>
            <PageTitle>{t('signup:signup_title')}</PageTitle>
            <Text>{t('signup:signup_kyc_process')}</Text>
            <Formik
                validationSchema = {Yup.object().shape(validationObj)}
                onSubmit={onSubmit}
                initialValues={initialValues}
                component={({values}) =>
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
                        { !values.uid && [
                            <Field key="passwd" component={TextField} name="passwd" type="password" placeholder={t('signup:signup_passwd_placeholder')} label={ {
                                required: "required",
                                value: t('signup:signup_passwd_label'),
                            } }/>,
                            <Field key="repasswd" component={TextField} name="repasswd" type="password" placeholder={t('signup:signup_repasswd_placeholder')} label={ {
                                required: "required",
                                value: t('signup:signup_repasswd_label'),
                            } }/>]
                        }
                        <Button type="submit" primary>{t('signup:signup_submit_btn')}</Button>
                        <div className="login">{t('signup:signup_already_registered')} <Link to='/login'>{t('signup:signup_login_link')}</Link> </div>
                    </Form>
                }
            />
        </div>
    );
};

const SignupForm = styled(translate()(SignupFormElement))`
    & .login {
        margin-top: 10px;
        font-weight: 200;
    }
`;

export default SignupForm;
