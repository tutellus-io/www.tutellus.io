import React from 'react';
import {Button, FileUpload, PageTitle, Text} from '../../components';
import {Form, Field, Formik} from 'formik';
import _ from 'lodash';
import Yup from 'yup';

const IdentityForm = (props) => {
    const {
        className,
        user,
        updateUser,
        nextStep,
    } = props;

    const onFinish = (setFieldValue, prop, values) => {
        console.log('onFinish', values);
        updateUser({
            [prop]: [values],
            [`${ prop }_uploaded`]: true,
        });
        setFieldValue(`${ prop }_uploaded`, true);
    };

    const validationSchema = Yup.object().shape({
        identity_uploaded: Yup.boolean().oneOf([true], 'Sube el documento de identificación'),
        residency_uploaded: Yup.boolean().oneOf([true], 'Sube el documento de residencia'),
    });

    const onSubmit = (values) => {
        console.log('onSubmit', values);
        updateUser({
            ...values,
            identity_ok: true,
        });
        nextStep();
    };

    const initialValues = _.defaults(_.pick(user, [
        'identity_uploaded',
        'selfie_uploaded',
        'residency_uploaded',
    ]), {
        identity_uploaded: false,
        selfie_uploaded: false,
        residency_uploaded: false,
    });

    const allowed_types = [
        'image/gif',
        'image/jpeg',
        'image/png',
        'application/pdf',
    ];

    const max_size = 5 * 1024 * 1024; //5Mb;

    return (
        <div className = {className}>
            <PageTitle>Verifica tu Identidad</PageTitle>
            <Text>Necesitamos comprobar que eres quien dices ser, con 3 sencillos documentos</Text>
            <Formik
                validationSchema = {validationSchema}
                onSubmit={onSubmit}
                initialValues={initialValues}
                component={({setFieldValue, values}) =>
                    <Form>
                        <h3>Prueba de Identidad</h3>
                        <div>DNI, Pasaporte, Cédula de Identificación, CURP o Permiso de conducir. Tanto anverso como reverso</div>
                        <FileUpload images_uploaded= {user.identity} max_size = {max_size}
                            allowed_types = {allowed_types}
                            path={`/backers/${ user.uid }/identity`}
                            onFinish={(file_uploaded) => onFinish(setFieldValue, 'identity', file_uploaded)}/>

                        <h3>Selfie</h3>
                        <div>Hazte un selfie con el documento anterior</div>
                        <FileUpload images_uploaded= {user.selfie} max_size = {max_size}
                            allowed_types = {allowed_types}
                            path={`/backers/${ user.uid }/selfie`}
                            onFinish={(file_uploaded) => onFinish(setFieldValue, 'selfie', file_uploaded)} />
                        <h3>Prueba de Residencia</h3>
                        <div>Recibo reciente (3 últimos meses) de agua, luz, Internet… que incluya tu dirección postal</div>
                        <FileUpload images_uploaded= {user.residency} max_size = {max_size}
                            allowed_types = {allowed_types}
                            path={`/backers/${ user.uid }/residency`}
                            onFinish={(file_uploaded) => onFinish(setFieldValue, 'residency', file_uploaded)}/>
                        <Button primary type="submit">VERIFICAR IDENTIDAD</Button>
                    </Form>
                }
            />
        </div>
    );
};

export default IdentityForm;
