import React from 'react';
import styled from 'styled-components';
import {Button, FileUpload, PageTitle, Text} from '../../components';
import {Form, Field, Formik} from 'formik';
import _ from 'lodash';
import Yup from 'yup';
import {translate} from 'react-i18next';

const IdentityFormElement = (props) => {
    const {
        className,
        user,
        updateUser,
        nextStep,
        t,
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
        identity_uploaded: Yup.boolean().oneOf([true], t('signup:identity_identity_uploaded_oneof_err')),
        selfie_uploaded: Yup.boolean().oneOf([true], t('signup:identity_selfie_uploaded_oneof_err')),
        residency_uploaded: Yup.boolean().oneOf([true], t('signup:identity_residency_uploaded_oneof_err')),
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
            <PageTitle>{t('signup:identity_title')}</PageTitle>
            <Text>{t('signup:identity_we_need_check')}</Text>
            <Formik
                validationSchema = {validationSchema}
                onSubmit={onSubmit}
                initialValues={initialValues}
                component={({setFieldValue, values}) =>
                    <Form>
                        <h3>{t('signup:identity_proof_identity_title')}</h3>
                        <div>{t('signup:identity_proof_identity_requirements')}</div>
                        <FileUpload images_uploaded= {user.identity} max_size = {max_size}
                            allowed_types = {allowed_types}
                            path={`/backers/${ user.uid }/identity`}
                            onFinish={(file_uploaded) => onFinish(setFieldValue, 'identity', file_uploaded)}/>

                        <h3>{t('signup:identity_proof_selfie_title')}</h3>
                        <div>{t('signup:identity_proof_selfie_requirements')}</div>
                        <FileUpload images_uploaded= {user.selfie} max_size = {max_size}
                            allowed_types = {allowed_types}
                            path={`/backers/${ user.uid }/selfie`}
                            onFinish={(file_uploaded) => onFinish(setFieldValue, 'selfie', file_uploaded)} />
                        <h3>{t('signup:identity_proof_residency_title')}</h3>
                        <div>{t('signup:identity_proof_residency_requirements')}</div>
                        <FileUpload images_uploaded= {user.residency} max_size = {max_size}
                            allowed_types = {allowed_types}
                            path={`/backers/${ user.uid }/residency`}
                            onFinish={(file_uploaded) => onFinish(setFieldValue, 'residency', file_uploaded)}/>
                        <Button primary type="submit">{t('signup:identity_verify_btn')}</Button>
                    </Form>
                }
            />
        </div>
    );
};

const IdentityForm = styled(translate()(IdentityFormElement))`
`;

export default IdentityForm;
