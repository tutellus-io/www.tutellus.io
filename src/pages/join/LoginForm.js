//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import {Field, Form, Formik} from 'formik';
import Yup from '../../yup';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {
    TextField,
    Button,
    ColumnCenter,
} from '../../components';

/*::
type LoginFormProps = {|
    className?: string,
    db: any,
    history: any,
    t: (string => string),
    onSubmit: (string, string) => Promise<void>,
|}
*/
export const LoginForm/*:ComponentType<LoginFormProps>*/ = styled((props/*:LoginFormProps*/) => {
    const {
        className,
        history,
        t,
    } = props;

    const onSubmit = (values = {}, {
        setSubmitting,
        setErrors,
    }) => {
        const {
            email,
            passwd,
        } = values;

        props.onSubmit(email, passwd)
        .then(() => {
            history.push('/dashboard/home');
        })
        .catch(() => {
            setSubmitting(false);
            setErrors({passwd: t('login_err')});
        });
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email(t('login_email_email_err'))
        .required(t('login_email_required_err')),
        passwd: Yup.string()
        .required(t('login_passwd_required_err')),
    });

    return (
        <div className = {className}>
            <Formik
                validationSchema = {validationSchema}
                onSubmit={onSubmit}
                initialValues={{
                    email: '',
                    passwd: '',
                }}
                component={({isSubmitting}) =>
                    <ColumnCenter>
                        <Form >
                            <Field component={TextField} name="email" placeholder={t('login_email_placeholder')} label={ {
                                required: "required",
                                value: t('login_email_label'),
                            } }/>
                            <Field key="passwd" component={TextField} name="passwd" type="password" placeholder={t('login_passwd_placeholder')} label={ {
                                required: "required",
                                value: t('login_passwd_required_err'),
                            } }/>
                            <Button full type="submit" primary disabled={isSubmitting}>{t('login_submit_btn')}</Button>
                            <div className="login">{t('login_not_registered')} <Link to='/signup'>{t('login_signup_link')}</Link> </div>
                        </Form>
                    </ColumnCenter>
                }
            />
        </div>
    );
})``;
