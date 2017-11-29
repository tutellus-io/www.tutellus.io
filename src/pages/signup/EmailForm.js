//@flow
import React from 'react';
import styled from 'styled-components';
import {Button, PageTitle, Text, ColumnCenter, Hr} from '../../components';
import {Form, Field, Formik} from 'formik';
import _ from 'lodash';
import Yup from '../../yup';
import {translate} from 'react-i18next';

/*::
type EmailFormProps = {|
    className?: string,
    //$FlowFixMe
    db: any,
    user: void,
    showAlert: (({|text: string|}) => void),
    nextStep: (void => void),
    updateUser: (void => void),
    t: ((string, ?Object) => string),
|}
*/
const EmailFormElement = (props/*:EmailFormProps*/) => {
    const {
        db,
        showAlert,
        nextStep,
        updateUser,
        className,
        user,
        t,
    } = props;

    const sendVerification = setFieldValue => {
        const current_user = db.auth().currentUser;
        if (current_user) {
            return current_user.sendEmailVerification()
            .then(() => {
                showAlert({text: t('signup:emailform_send_email_sent')});
                setFieldValue('verification_email_sended', true);
            })
            .catch(error => {
                showAlert({text: t('signup:emailform_send_email_sent_err', {error: error.message})});
            });
        }
        showAlert({text: 'Sin user'});
    };

    const validationSchema = Yup.object().shape({
        verification_email_sended: Yup.boolean().oneOf([true], t('signup:emailform_send_email_oneof_err')),
    });

    const onSubmit = values => {
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
            <Text center>{t('signup:emailform_review_your_inbox')}</Text>
            <Formik
                validationSchema = {validationSchema}
                onSubmit={onSubmit}
                initialValues={initialValues}
                component={({setFieldValue}) =>
                    <ColumnCenter>
                        <Form>
                            <Text>{t('signup:emailform_recieve_newsletter')}</Text>
                            <Button full primary
                                onClick={() => sendVerification(setFieldValue)}>
                                {t('signup:emailform_send_email_btn')}
                            </Button>
                            <Field type="hidden"
                                name="verification_email_sended"
                            />
                            <Hr/>
                            <Text>{t('signup:emailform_continue_signup')}</Text>
                            <Button full type="submit">
                                {t('signup:emailform_continue_btn')}
                            </Button>
                        </Form>
                    </ColumnCenter>
                }
            />
        </div>
    );
};

//$FlowFixMe
const EmailForm /*:ComponentType<EmailFormProps>*/= styled(translate()(EmailFormElement))`
`;

export default EmailForm;
