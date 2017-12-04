//@flow
import React from 'react';
import {Field, Form, Formik} from 'formik';
import Yup from '../../yup';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {translate} from 'react-i18next';
import {
    TextField,
    Button,
    PageTitle,
    Text,
    ColumnCenter,
    subscribeTo,
} from '../../components';
import styles from '../../styles';

const SIGNUP_MAIL_LIST = process.env.REACT_APP_MAILLIST_REGISTER;

const SignupFormElement = props => {
    const {
        db,
        syncUser,
        updateUser,
        nextStep,
        className,
        user,
        t,
    } = props;

    const onSubmit = (values = {}, {
        setSubmitting,
        setErrors,
    }) => {
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

        p_auth.then(({uid: user_id}) => {
            syncUser(user_id);
            updateUser({
                user_id,
                first_name,
                last_name,
                email,
                signup_ok: true,
            });
            subscribeTo(SIGNUP_MAIL_LIST, {
                EMAIL: email,
                b_fb6c7232ef9595533c37d1fc0_8a25bf4ebc: "",
            });
            nextStep();
        })
        .catch(() => {
            setErrors({email: t('signup:signup_email_already_err')});
            setSubmitting(false);
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
        first_name: Yup.string().required(t('signup:signup_first_name_required_err')),
        last_name: Yup.string().required(t('signup:signup_last_name_required_err')),
        email: Yup.string().required(t('signup:signup_email_required_err'))
        .email(t('signup:signup_email_email_err')),
    };

    if (!initialValues.uid) {
        const MIN_PASSWD_LENGTH = 8;
        const MIN_PASSWD_STRENGTH = 55;
        //$FlowFixMe
        validationObj.passwd = Yup.string()
        .required(t('signup:signup_passwd_required_err'))
        .min(MIN_PASSWD_LENGTH, t('signup:signup_passwd_min_err'))
        .passwdStrength(MIN_PASSWD_STRENGTH, t('signup:signup_passwd_strength_err'));
        //$FlowFixMe
        validationObj.repasswd = Yup.string()
        .required(t('signup:signup_repasswd_required_err'))
        .sameAs(Yup.ref('passwd'), t('signup:signup_repasswd_sameas_err'));
    }

    return (
        <div className = {className}>
            <PageTitle>{t('signup:signup_title')}</PageTitle>
            <Text center>{t('signup:signup_kyc_process')}</Text>
            <Formik
                validationSchema = {Yup.object().shape(validationObj)}
                onSubmit={onSubmit}
                initialValues={initialValues}
                component={({values, isSubmitting}) =>
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
                            <Button full type="submit" primary disabled={isSubmitting}>{t('signup:signup_submit_btn')}</Button>
                            <Text center className="login">{t('signup:signup_already_registered')} <Link to='/login'>{t('signup:signup_login_link')}</Link> </Text>
                        </Form>
                    </ColumnCenter>
                }
            />
        </div>
    );
};

const SignupForm = styled(translate()(SignupFormElement))`
    & .login {
        margin-top: 1em;
        font-weight: 200;

        > a {
            color : ${ styles.colors.emerald };
            &:hover {
                text-decoration: underline
            }
        }
    }
`;

export default SignupForm;
