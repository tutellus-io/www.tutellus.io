import React from 'react';
import {TextField, Button} from '../components';
import {Field, Form, Formik} from 'formik';
import Yup from 'yup';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const LoginFormElement = (props) => {
    console.log('LoginFormElement', props);
    const {
        db,
        syncUser,
        updateUser,
        showAlert,
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
            p_auth = db.auth().signInWithEmailAndPassword(email, passwd);
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
        })
        .catch((error) => {
            showAlert({text: `Upps ${ error.message }`});
        });
    };

    const validationObj = {
        email: Yup.string().email('No parece un email válido')
        .required('Escribe tu email'),
        passwd: Yup.string()
        .required('Escribe tu contraseña'),
    };

    return (
        <div className = {className}>
            <Formik
                validationSchema = {Yup.object().shape(validationObj)}
                onSubmit={onSubmit}
                initialValues={{
                    email: '',
                    passwd: '',
                }}
                component={({values}) =>
                    <Form >
                        <Field component={TextField} name="email" placeholder="Email" label={ {
                            required: "required",
                            value: 'Email',
                        } }/>
                        <Field key="passwd" component={TextField} name="passwd" type="password" placeholder="Passwd" label={ {
                            required: "required",
                            value: 'Password',
                        } }/>
                        <Button type="submit" primary>Login</Button>
                        <div className="login">Not registered? <Link to='/signup'>Regístrate</Link> </div>
                    </Form>
                }
            />
        </div>
    );
};

const LoginForm = styled(LoginFormElement)`
    & .login {
        margin-top: 10px;
        font-weight: 200;
    }
`;

const Login = () =>
    <div>
        Login
        <LoginForm/>
    </div>
;

export default Login;
