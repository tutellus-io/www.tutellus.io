import * as React from 'react';
import {Field, Form, Formik} from 'formik';
import Yup from '../../yup';
import {observer, inject} from 'mobx-react';
import {pick, isEmpty} from 'lodash';
import styled from 'styled-components';
import styles from '../../styles';
import {
    PageSection,
    TextField,
    Button,
    Box,
    BoxTitle,
    Icon,
    FlexCenter,
    FileUpload,
    OneCheckbox,
    Text,
    ColumnCenter,
    ErrorField,
} from '../../components';

import {
    Summary,
} from './Summary';

const TextDiv = styled.div`
    > a {
        color : ${ styles.colors.emerald };
        &:hover {
            text-decoration: underline
        }
    }
`;

const FlexEmail = styled(FlexCenter)`
    flex-wrap: nowrap;
    align-items: flex-end;
    align-content: flex-start;
    justify-content: flex-start;
    & ${ TextField } {
        width: 50%;
        flex-shrink: 1;
    }
    & i {
        width: 50px;
        margin-bottom: 1.1em;
        margin-left: 0.5em;
    }
    & ${ TextDiv } {
        width: calc(50% - 50px);
        flex-shrink: 1;
        padding: 0.546em 1.2em;
        font-size: 0.9em;
        margin-bottom: 2.2em;
    }
`;

const KYCContent = styled(PageSection)`
    margin-top: 0;
`;

const ButtonWarn = styled(Button)`
    &.errors {
        background-color: ${ styles.colors.googleplus };
        cursor: not-allowed;
}
`;

export const KYC = inject('store')(observer(props => {
    const {
        store,
        t,
        className,
        showAlert,
    } = props;

    const backer_data = store.backer.getValues();

    if (store.backer.isVerified()) {
        return <Summary {...props}/>;
    }

    const initialValues = pick(backer_data, [
        'first_name',
        'last_name',
        'email',
        'eth_adress',
        'eth_confirm',
        'identity_front_uploaded',
        'selfie_uploaded',
        'residency_uploaded',
    ]);

    const onSubmit = (values = {}, {
        setSubmitting,
    }) => {
        store.backer.updateValues(values);
        setSubmitting(false);
    };

    const validationSchema = Yup.object().shape({
        first_name: Yup.string().required(t('signup:signup_first_name_required_err')),
        last_name: Yup.string().required(t('signup:signup_last_name_required_err')),
        eth_adress: Yup.string().required(t('signup:wallet_eth_address_required_err'))
        .ethWallet(t('signup:wallet_eth_address_eth_waller_err')),
        eth_confirm: Yup.boolean().oneOf([true], t('signup:wallet_eth_confirm_required_err')),
        identity_front_uploaded: Yup.boolean().oneOf([true], t('signup:identity_identity_uploaded_oneof_err')),
        selfie_uploaded: Yup.boolean().oneOf([true], t('signup:identity_selfie_uploaded_oneof_err')),
        residency_uploaded: Yup.boolean().oneOf([true], t('signup:identity_residency_uploaded_oneof_err')),
    });

    const onFinish = (setFieldValue, prop, values) => {
        store.backer.uploadedFile(prop, values);
        setFieldValue(`${ prop }_uploaded`, true);
    };

    const allowed_types = [
        'image/gif',
        'image/jpeg',
        'image/png',
        // 'application/pdf',
    ];

    //eslint-disable-next-line no-magic-numbers
    const MAX_SIZE = 5 * 1024 * 1024; //5Mb;

    const IdentityFileUpload = props_fu =>
        <FileUpload
            {...props_fu}
            one_image
            max_size = { MAX_SIZE }
            max_size_err ={t('signup:identity_fileupload_max_size_err')}
            allowed_types = {allowed_types}
            allowed_types_err ={t('signup:identity_fileupload_allowed_types_err')}
        />;
    const sendVerification = async() => {
        const sended = await store.sendVerification();
        if (sended) {
            showAlert({text: t('signup:emailform_send_email_sent')});
        } else {
            showAlert({text: t('signup:emailform_send_email_sent_err')});
        }
    };
    const email_verified = store.backer.isEmailVerified();
    return (
        <KYCContent className = {className}>
            <Formik
                validationSchema = {validationSchema}
                onSubmit={onSubmit}
                initialValues={initialValues}
                component={({values, errors, isSubmitting, setFieldValue}) =>
                    <ColumnCenter>
                        <BoxTitle margin="0 0 1em 0">{t('signup:title')}</BoxTitle>
                        <Form >
                            <Box title={
                                <div>
                                    <Icon name="error_outline"
                                        size="1.8em" margin="0 0.25em 0 0"
                                        color={styles.colors.googleplus}/>
                                    <span>{t('signup:wallet_alert_title')}</span></div>
                            }>
                                <Text dangerouslySetInnerHTML={ {__html: t('signup:wallet_alert_exchanges')} }/>
                                <Field component={OneCheckbox}
                                    type="checkbox"
                                    name="eth_confirm"
                                    label={
                                        <span>{t('signup:wallet_eth_confirm_label')}</span>
                                    }
                                />
                            </Box>
                            <Field component={TextField} name="first_name" placeholder={t('signup:signup_first_name_placeholder')} label={ {
                                required: "required",
                                value: t('signup:signup_first_name_label'),
                            } }/>
                            <Field component={TextField} name="last_name" placeholder={t('signup:signup_last_name_placeholder')} label={ {
                                required: "required",
                                value: t('signup:signup_last_name_label'),
                            } }/>
                            <FlexEmail>
                                <Field component={TextField} name="email" disabled placeholder={t('signup:signup_email_placeholder')} label={ {
                                    required: "required",
                                    value: t('signup:signup_email_label'),
                                } }/>
                                <Icon name="email"
                                    title = {email_verified ? t('signup:signup_email_verified') : t('signup:signup_email_not_verified')}
                                    size="1.8em" margin="0 0.25em 0 0"
                                    color={email_verified ? styles.colors.emerald : styles.colors.googleplus}/>
                                {
                                    !email_verified && 
                                    <TextDiv>
                                        {t('signup:emailform_send_email_not_received')}
                                        &nbsp;
                                        <a onClick={sendVerification}>
                                            {t('signup:emailform_send_email_link')}
                                        </a>
                                    </TextDiv>
                                }
                            </FlexEmail>
                            <Field component={TextField}
                                name="eth_adress"
                                placeholder={t('signup:wallet_eth_address_placeholder')}
                                label={ {
                                    required: "required",
                                    value: t('signup:wallet_eth_address_label'),
                                } }
                            />
                            <BoxTitle margin="0 0 0.5em 0">{t('signup:identity_proof_identity_title')}</BoxTitle>
                            <Text center>{t('signup:identity_proof_identity_requirements')}</Text>
                            <FlexCenter margin="0 0 0.5em 0">
                                <IdentityFileUpload
                                    images_uploaded= {backer_data.identity_front}
                                    path={`/backers/${ backer_data.user_id }/identity_front`}
                                    posterIcon="/images/dni_front.svg"
                                    onFinish={file_uploaded => onFinish(setFieldValue, 'identity_front', file_uploaded)}/>
                                <IdentityFileUpload
                                    images_uploaded= {backer_data.identity_back}
                                    path={`/backers/${ backer_data.user_id }/identity_back`}
                                    posterIcon="/images/dni_back.svg"
                                    onFinish={file_uploaded => onFinish(setFieldValue, 'identity_back', file_uploaded)}/>
                                <Field component={ErrorField} name="identity_front_uploaded"/>
                            </FlexCenter>
                            <BoxTitle margin="0 0 0.5em 0">{t('signup:identity_proof_selfie_title')}</BoxTitle>
                            <Text center>{t('signup:identity_proof_selfie_requirements')}</Text>
                            <FlexCenter margin="0 0 0.5em 0">
                                <IdentityFileUpload
                                    images_uploaded= {backer_data.selfie}
                                    path={`/backers/${ backer_data.user_id }/selfie`}
                                    posterIcon="/images/selfie.svg"
                                    onFinish={file_uploaded => onFinish(setFieldValue, 'selfie', file_uploaded)} />
                                <Field component={ErrorField} name="selfie_uploaded"/>
                            </FlexCenter>
                            <BoxTitle margin="0 0 0.5em 0">{t('signup:identity_proof_residency_title')}</BoxTitle>
                            <Text center>{t('signup:identity_proof_residency_requirements')}</Text>
                            <FlexCenter margin="0 0 0.5em 0">
                                <IdentityFileUpload
                                    images_uploaded= {backer_data.residency}
                                    path={`/backers/${ backer_data.user_id }/residency`}
                                    posterIcon="/images/doc.svg"
                                    onFinish={file_uploaded => onFinish(setFieldValue, 'residency', file_uploaded)}/>
                                <Field component={ErrorField} name="residency_uploaded"/>
                            </FlexCenter>
                            <ButtonWarn full primary
                                type="submit"
                                className={isEmpty(errors) ? '' : 'errors' }
                                disabled={isSubmitting}>
                                {t('signup:signup_submit_btn')}
                            </ButtonWarn>
                        </Form>
                    </ColumnCenter>
                }
            />
        </KYCContent>
    );
}));
