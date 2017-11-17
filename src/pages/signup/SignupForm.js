import React from 'react';
import {TextField, Button, PageTitle, Text} from '../../components';
import {Field, Form, Formik} from 'formik';
import Yup from 'yup';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import passwordMeter from 'passwordmeter';

Yup.addMethod(Yup.string, 'passwdStrength', function(level, message) {
    return this.test('passwdStrength', message, (value) => {
        const result = passwordMeter.checkPass(value);
        return result >= level;
    });
});

Yup.addMethod(Yup.mixed, 'sameAs', function(ref, message) {
    return this.test('sameAs', message, function(value) {
        if (value) {
            const other = this.resolve(ref);
            return !other || value === other;
        }
        return !value;
    });
});

const SignupForm = (props) => {
    console.log('SignupForm', props);
    const {
        db,
        syncUser,
        updateUser,
        showAlert,
        nextStep,
        className,
        user,
    } = props;

    const onSubmit = (values = {}) => {
        const {
            email,
            passwd,
            first_name,
            last_name,
            uid = null,
        } = values;

        let p_auth = Promise.resolve({uid});
        if (!uid) {
            p_auth = db.auth().createUserWithEmailAndPassword(email, passwd);
        }

        p_auth.then(({uid}) => {
            syncUser(uid);
            updateUser({
                uid,
                first_name,
                last_name,
                email,
                signup_ok: true,
            });
            nextStep();
        })
        .catch((error) => {
            showAlert({text: `Upps ${ error.message }`});
        });
    };
    const initialValues = _.defaults(_.pick(user, [
        'first_name',
        'last_name',
        'email',
        'passwd',
        'uid',
    ]), {
        first_name: '',
        last_name: '',
        email: '',
        passwd: '',
    });

    const validationObj = {
        first_name: Yup.string().required('Escribe tu nombre'),
        last_name: Yup.string().required('Escribe tus apellidos'),
        email: Yup.string().email('No parece un email válido')
        .required('Escribe tu email'),
    };

    if (!initialValues.uid) {
        validationObj.passwd = Yup.string()
        .required('Escribe tu contraseña')
        .min(8, 'Escribe al menos 8 caracteres')
        .passwdStrength(60, 'La password es demasido débil');
        validationObj.repasswd = Yup.string().sameAs(Yup.ref('passwd'), "Passwords don't match");
    }

    return (
        <div className = {className}>
            <PageTitle>Regístrate antes de comprar tokens en la ICO</PageTitle>
            <Text>Con este proceso (KYC) nos aseguramos de la procedencia de tu dinero. Es fácil y rápido.</Text>
            <Formik
                validationSchema = {Yup.object().shape(validationObj)}
                onSubmit={onSubmit}
                initialValues={initialValues}
                component={({values}) =>
                    <Form >
                        <Field component={TextField} name="first_name" placeholder="Nombre" label={ {
                            required: "required",
                            value: 'Nombre',
                        } }/>
                        <Field component={TextField} name="last_name" placeholder="Apellidos" label={ {
                            required: "required",
                            value: 'Apellidos',
                        } }/>
                        <Field component={TextField} name="email" placeholder="Email" label={ {
                            required: "required",
                            value: 'Email',
                        } }/>
                        { !values.uid && [
                            <Field key="passwd" component={TextField} name="passwd" type="password" placeholder="Contraseña" label={ {
                                required: "required",
                                value: 'Contraseña',
                            } }/>,
                            <Field key="repasswd" component={TextField} name="repasswd" type="password" placeholder="Repite la contraseña" label={ {
                                required: "required",
                                value: 'Repite la contraseña',
                            } }/>]
                        }
                        <Button type="submit" primary>REGÍSTRATE</Button>
                        <div className="login">¿Ya estas registrado? <Link to='/login'>Login</Link> </div>
                    </Form>
                }
            />
        </div>
    );
};

const SignupFormStyled = styled(SignupForm)`
    & .login {
        margin-top: 10px;
        font-weight: 200;
    }
`;

export default SignupFormStyled;
