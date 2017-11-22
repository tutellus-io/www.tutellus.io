import React from 'react';
import styled from 'styled-components';
import {Button, FileUpload, PageTitle, ColumnCenter, Text, BoxTitle, FlexCenter} from '../../components';
import {Form, Formik} from 'formik';
import _ from 'lodash';
import Yup from 'yup';
import {translate} from 'react-i18next';

const IdentityFormElement = props => {
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
        identity_front_uploaded: Yup.boolean().oneOf([true], t('signup:identity_identity_uploaded_oneof_err')),
        selfie_uploaded: Yup.boolean().oneOf([true], t('signup:identity_selfie_uploaded_oneof_err')),
        residency_uploaded: Yup.boolean().oneOf([true], t('signup:identity_residency_uploaded_oneof_err')),
    });

    const onSubmit = values => {
        console.log('onSubmit', values);
        updateUser({
            ...values,
            identity_ok: true,
        });
        nextStep();
    };

    const initialValues = _.defaults(_.pick(user, [
        'identity_front_uploaded',
        'identity_back_uploaded',
        'selfie_uploaded',
        'residency_uploaded',
    ]), {
        identity_front_uploaded: false,
        identity_back_uploaded: false,
        selfie_uploaded: false,
        residency_uploaded: false,
    });

    const allowed_types = [
        'image/gif',
        'image/jpeg',
        'image/png',
        // 'application/pdf',
    ];

    const max_size = 5 * 1024 * 1024; //5Mb;

    return (
        <div className = {className}>
            <PageTitle>{t('signup:identity_title')}</PageTitle>
            <Text center>{t('signup:identity_we_need_check')}</Text>
            <Formik
                validationSchema = {validationSchema}
                onSubmit={onSubmit}
                initialValues={initialValues}
                component={({setFieldValue, values}) =>
                    <ColumnCenter>
                        <Form>
                            <BoxTitle margin="0 0 0.5em 0">{t('signup:identity_proof_identity_title')}</BoxTitle>
                            <Text>{t('signup:identity_proof_identity_requirements')}</Text>
                            <FlexCenter margin="0 0 0.5em 0">
                                <FileUpload images_uploaded= {user.identity_front} max_size = {max_size}
                                    allowed_types = {allowed_types}
                                    path={`/backers/${ user.uid }/identity_front`}
                                    posterIcon="/images/dni_front.svg"
                                    onFinish={file_uploaded => onFinish(setFieldValue, 'identity_front', file_uploaded)}/>
                                <FileUpload images_uploaded= {user.identity_back} max_size = {max_size}
                                    allowed_types = {allowed_types}
                                    path={`/backers/${ user.uid }/identity_back`}
                                    posterIcon="/images/dni_back.svg"
                                    onFinish={file_uploaded => onFinish(setFieldValue, 'identity_back', file_uploaded)}/>
                            </FlexCenter>
                            <BoxTitle margin="0 0 0.5em 0">{t('signup:identity_proof_selfie_title')}</BoxTitle>
                            <Text>{t('signup:identity_proof_selfie_requirements')}</Text>
                            <FlexCenter margin="0 0 0.5em 0">
                                <FileUpload images_uploaded= {user.selfie} max_size = {max_size}
                                    allowed_types = {allowed_types}
                                    path={`/backers/${ user.uid }/selfie`}
                                    posterIcon="/images/selfie.svg"
                                    onFinish={file_uploaded => onFinish(setFieldValue, 'selfie', file_uploaded)} />
                            </FlexCenter>
                            <BoxTitle margin="0 0 0.5em 0">{t('signup:identity_proof_residency_title')}</BoxTitle>
                            <Text>{t('signup:identity_proof_residency_requirements')}</Text>
                            <FlexCenter margin="0 0 0.5em 0">
                                <FileUpload images_uploaded= {user.residency} max_size = {max_size}
                                    allowed_types = {allowed_types}
                                    path={`/backers/${ user.uid }/residency`}
                                    posterIcon="/images/doc.svg"
                                    onFinish={file_uploaded => onFinish(setFieldValue, 'residency', file_uploaded)}/>
                            </FlexCenter>
                            <Button primary type="submit">{t('signup:identity_verify_btn')}</Button>
                        </Form>
                    </ColumnCenter>
                }
            />
        </div>
    );
};

const IdentityForm = styled(translate()(IdentityFormElement))`
`;

export default IdentityForm;
