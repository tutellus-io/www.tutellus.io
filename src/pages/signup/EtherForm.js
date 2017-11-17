import React from 'react';
import {TextField, OneCheckbox, Button, PageTitle, Text} from '../../components';
import {Field, Form, Formik} from 'formik';
import Yup from 'yup';
import _ from 'lodash';

const EtherForm = (props) => {
    const {
        db,
        updateUser,
        nextStep,
        className,
        showAlert,
        user,
    } = props;

    const validationSchema = Yup.object().shape({
        eth_adress: Yup.string().required('Escribe la dirección de tu wallet'),
        eth_contribution: Yup.number().min(0.3, 'La aportacion es demasiado pequeña').required('Escribe tu aportación'),
        eth_confirm: Yup.boolean().oneOf([true], 'Must Confirm'),
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
            <PageTitle>Añade tu información de compra</PageTitle>
            <Text>Indícanos tu dirección pública y la cantidad de ETH que vas a comprar</Text>
            <Formik
                validationSchema= { validationSchema }
                onSubmit={onSubmit}
                initialValues={initialValues}
                component={() =>
                    <Form>
                        <Field component={TextField} name="eth_adress" placeholder="0x...." label={ {
                            required: "required",
                            value: 'Tu dirección publica ETH',
                        } }/>
                        <div>IMPORTANTE: debes usar un wallet que soporte tokens ERC20. NO envíes ETH directamente desde un Exchange (Kraken, Coinbase, Bittrex…), wallets multi-sig u otro tipo de smart contracts, ya que no tendrás acceso a los tokens que compres.</div>
                        <Field component={OneCheckbox} type="checkbox" name="eth_confirm" label={
                            <span>Confirmo que he leido la información anterior.</span>
                        }/>
                        <Field component={TextField} type="number" min={0} step={0.01} name="eth_contribution" placeholder="0,3" label={ {
                            required: "required",
                            value: 'Tu contribución, en ETH',
                        } }/>
                        <div>
                            <b>Nota:</b> La contribución mínima es 0,3 ETH
                        </div>
                        <Button primary type="submit">GUARDAR WALLET</Button>
                    </Form>
                }
            />
        </div>
    );
};

export default EtherForm;
