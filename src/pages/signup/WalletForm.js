import React from 'react';
import styled from 'styled-components';
import {TextField, OneCheckbox, Button, PageTitle, Text} from '../../components';
import {Field, Form, Formik} from 'formik';
import Yup from 'yup';
import _ from 'lodash';
import {translate} from 'react-i18next';

const WalletFormElement = (props) => {
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
        eth_adress: Yup.string().required(t('signup:wallet_eth_address_required_err')),
        eth_contribution: Yup.number().min(0.3, t('signup:wallet_eth_address_required_err')).required(t('signup:wallet_eth_contribution_required_err')),
        eth_confirm: Yup.boolean().oneOf([true], t('signup:wallet_eth_confirm_required_err')),
    });

    const onSubmit = (values) => {
        console.log('onSubmit', values);
        const user = db.auth().currentUser;
        console.log(user);
        if (user) {
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
            <Text>{t('signup:wallet_address_info')}</Text>
            <Formik
                validationSchema= { validationSchema }
                onSubmit={onSubmit}
                initialValues={initialValues}
                component={() =>
                    <Form>
                        <Field component={TextField} name="eth_adress" placeholder={t('signup:wallet_eth_address_placeholder')} label={ {
                            required: "required",
                            value: t('signup:wallet_eth_address_label'),
                        } }/>
                        <Text>{t('signup:wallet_alert_exchanges')}</Text>
                        <Field component={OneCheckbox} type="checkbox" name="eth_confirm" label={
                            <span>{t('signup:wallet_eth_confirm_label')}</span>
                        }/>
                        <Field component={TextField} type="number" min={0} step={0.01} name="eth_contribution" placeholder={t('signup:wallet_eth_contribution_placeholder')} label={ {
                            required: "required",
                            value: t('signup:wallet_eth_contribution_label'),
                        } }/>
                        <Text>{t('signup:wallet_contribution_note')}</Text>
                        <Button primary type="submit">{t('signup:wallet_save_btn')}</Button>
                    </Form>
                }
            />
        </div>
    );
};

const WalletForm = styled(translate()(WalletFormElement))`
`;

export default WalletForm;