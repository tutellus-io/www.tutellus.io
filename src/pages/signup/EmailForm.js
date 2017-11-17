import React from 'react';
import {Button, PageTitle, Text} from '../../components';
import {Form, Field, Formik} from 'formik';
import _ from 'lodash';
import Yup from 'yup';

const EmailForm = (props) => {
    console.log('EmailForm', props);
    const {
        db,
        showAlert,
        nextStep,
        updateUser,
        className,
        user,
    } = props;

    const sendVerificationEmail = (setFieldValue) => {
        const user = db.auth().currentUser;
        if (user) {
            return user.sendEmailVerification()
            .then(() => {
                showAlert({text: 'Email enviado'});
                setFieldValue('verification_email_sended', true);
            })
            .catch((error) => {
                showAlert({text: `Problemas al enviar el email: ${ error.message }`});
            });
        }
        showAlert({text: 'Sin user'});
    };

    const validationSchema = Yup.object().shape({
        verification_email_sended: Yup.boolean().oneOf([true], 'Envíate el email de comprobación'),
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
            <PageTitle>Verifica tu email</PageTitle>
            <Text>Revisa tu bandeja de entrada (o comercial / spam… si no lo encuentras)</Text>
            <Formik
                validationSchema = {validationSchema}
                onSubmit={onSubmit}
                initialValues={initialValues}
                component={({setFieldValue}) =>
                    <Form>
                        <div>
                            No queremos que te pierdas ninguna comunicación importante de la ICO, por lo que necesitamos que verifiques tu email y te sugerimos que añadas en tu cliente de correo favorito el dominio: tutellus.io a tu lista de dominios confiables para evitar los mensajes de SPAM.
                        </div>
                        <Button primary onClick={() => sendVerificationEmail(setFieldValue)}>ENVIAR EMAIL</Button>
                        <Field type="hidden" name="verification_email_sended" />
                        <div> Puedes seguir con el proceso mientras te llega el email de verificación</div>
                        <Button type="submit" primary>CONTINUAR</Button>
                    </Form>
                }
            />
        </div>
    );
};

export default EmailForm;
