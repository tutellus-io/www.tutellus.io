import React from 'react';
import styled from 'styled-components';
import {Button, PageTitle, Text} from '../../components';
import {Form, Field, Formik} from 'formik';
import _ from 'lodash';
import Yup from 'yup';
import {translate} from 'react-i18next';

const EmailFormElement = (props) => {
    console.log('EmailForm', props);
    const {
        db,
        showAlert,
        nextStep,
        updateUser,
        className,
        user,
        t,
    } = props;

    const sendVerificationEmail = (setFieldValue) => {
        const user = db.auth().currentUser;
        if (user) {
            return user.sendEmailVerification()
            .then(() => {
                showAlert({text: t('signup:emailform_send_email_sent')});
                setFieldValue('verification_email_sended', true);
            })
            .catch((error) => {
                showAlert({text: t('signup:emailform_send_email_sent_err', {error: error.message})});
            });
        }
        showAlert({text: 'Sin user'});
    };

    const validationSchema = Yup.object().shape({
        verification_email_sended: Yup.boolean().oneOf([true], t('signup:emailform_send_email_oneof_err')),
    });

    const onSubmit = (values) => {
        console.log('onSubmit', values);
        updateUser(values);
        nextStep();
    };

    const initialValues = _.defaults(_.pick(user, [
        'verification_email_sended',
    ]), {
        verification_email_sended: false,
    });

    return (
        <div className={className}>
            <PageTitle>{t('signup:emailform_title')}</PageTitle>
            <Text>{t('signup:emailform_review_your_inbox')}</Text>
            <Formik
                validationSchema = {validationSchema}
                onSubmit={onSubmit}
                initialValues={initialValues}
                component={({setFieldValue}) =>
                    <Form>
                        <Text>{t('signup:emailform_recieve_newsletter')}</Text>
                        <Button primary onClick={() => sendVerificationEmail(setFieldValue)}>{t('signup:emailform_send_email_btn')}</Button>
                        <Field type="hidden" name="verification_email_sended" />
                        <Text>{t('signup:emailform_continue_signup')}</Text>
                        <Button type="submit" primary>{t('signup:emailform_continue_btn')}</Button>
                    </Form>
                }
            />
        </div>
    );
};

const EmailForm = styled(translate()(EmailFormElement))`
`;

export default EmailForm;
