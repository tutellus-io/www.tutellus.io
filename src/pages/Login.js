import React, {Component} from 'react';
import {PageContent, TextField, Button, ColumnCenter} from '../components';
import {Field, Form, Formik} from 'formik';
import Yup from 'yup';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import styles from '../styles';
import {translate} from 'react-i18next';

const LoginFormElement = props => {
    const {
        db,
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

        db.auth().signInWithEmailAndPassword(email, passwd)
        .then(() => {
            history.push('/dashboard');
        })
        .catch(() => {
            setSubmitting(false);
            setErrors({passwd: t('login_err')});
        });
    };

    const validationObj = {
        email: Yup.string().email(t('login_email_email_err'))
        .required(t('login_email_required_err')),
        passwd: Yup.string()
        .required(t('login_passwd_required_err')),
    };

    return (
        <div className = {className}>
            <Formik
                validationSchema = {Yup.object().shape(validationObj)}
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
                            <Button type="submit" primary disabled={isSubmitting}>{t('login_submit_btn')}</Button>
                            <div className="login">{t('login_not_registered')} <Link to='/signup'>{t('login_signup_link')}</Link> </div>
                        </Form>
                    </ColumnCenter>
                }
            />
        </div>
    );
};

class LoginElement extends Component {
    componentWillMount() {
        const {
            db,
            history,
        } = this.props;

        const user = localStorage.getItem(`firebase:authUser:${ db.options.apiKey }:[DEFAULT]`);
        if (user) {
            history.push('/dashboard');
        }
    }
    render() {
        const {
            className,
        } = this.props;
        return (
            <PageContent className = {className}>
                <LoginFormElement {...this.props}/>
            </PageContent>
        );
    }
}


export const Login = styled(translate('signup')(LoginElement))`
    > {LoginFormElement} {
        margin-top: 10em;
    }
    & .login {
        margin-top: 10px;
        font-weight: 200;
        > a {
            color : ${ styles.colors.emerald };
            &:hover {
                text-decoration: underline
            }
        }
    }
`;
