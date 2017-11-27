import React from 'react';
import styled from 'styled-components';
import {TextField, OneCheckbox, Button, PageTitle, Text, ColumnCenter, Box, Icon} from '../../components';
import styles from '../../styles';
import {Field, Form, Formik} from 'formik';
import Yup from '../../yup';
import _ from 'lodash';
import {translate} from 'react-i18next';

const WalletFormElement = props => {
    const {
        db,
        updateUser,
        nextStep,
        className,
        showAlert,
        user,
        t,
    } = props;

    const validationSchema = Yup.object().shape({
        eth_adress: Yup.string().required(t('signup:wallet_eth_address_required_err'))
        .ethWallet(t('signup:wallet_eth_address_eth_waller_err')),
        eth_contribution: Yup.number().required(t('signup:wallet_eth_contribution_required_err')),
        eth_confirm: Yup.boolean().oneOf([true], t('signup:wallet_eth_confirm_required_err')),
    });

    const onSubmit = values => {
        const current_user = db.auth().currentUser;
        if (current_user) {
            updateUser({
                eth_adress: values.eth_adress,
                eth_contribution: values.eth_contribution,
                eth_confirm: values.eth_confirm,
                eth_ok: true,
            });
            return nextStep();
        }
        showAlert({text: 'Sin user'});
    };
    const initialValues = _.defaults(_.pick(user, [
        'eth_adress',
        'eth_contribution',
    ]), {
        eth_adress: '',
        eth_contribution: 0,
        eth_confirm: false,
    });

    return (
        <div className={className}>
            <PageTitle>{t('signup:wallet_title')}</PageTitle>
            <Text center>{t('signup:wallet_address_info')}</Text>
            <Formik
                validationSchema= { validationSchema }
                onSubmit={onSubmit}
                initialValues={initialValues}
                component={() =>
                    <ColumnCenter>
                        <Form>
                            <Box title={
                                <div>
                                    <Icon name="error_outline"
                                        size="1.8em" margin="0 0.25em 0 0"
                                        color={styles.colors.googleplus}/>
                                    <span>{t('signup:wallet_alert_title')}</span></div>
                            }>
                                <Text>{t('signup:wallet_alert_exchanges')}</Text>
                                <Field component={OneCheckbox} type="checkbox" name="eth_confirm" label={
                                    <span>{t('signup:wallet_eth_confirm_label')}</span>
                                }/>
                            </Box>
                            <Field component={TextField} name="eth_adress" placeholder={t('signup:wallet_eth_address_placeholder')} label={ {
                                required: "required",
                                value: t('signup:wallet_eth_address_label'),
                            } }/>


                            <Field component={TextField} type="number" min={0} step={0.01} name="eth_contribution" placeholder={t('signup:wallet_eth_contribution_placeholder')} label={ {
                                required: "required",
                                value: t('signup:wallet_eth_contribution_label'),
                            } }/>
                            <Button full primary type="submit">{t('signup:wallet_save_btn')}</Button>
                        </Form>
                    </ColumnCenter>
                }
            />
        </div>
    );
};

const WalletForm = styled(translate()(WalletFormElement))`
`;

export default WalletForm;
