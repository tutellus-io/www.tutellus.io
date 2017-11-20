import React, {Component} from 'react';
import {TextField, Button} from '../components';
import {Field, Form, Formik} from 'formik';
import Yup from 'yup';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const LoginFormElement = (props) => {
    const {
        db,
        showAlert,
        className,
        history,
    } = props;

    const onSubmit = (values = {}) => {
        const {
            email,
            passwd,
        } = values;

        db.auth().signInWithEmailAndPassword(email, passwd)
        .then(() => {
            history.push('/dashboard');
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
                component={() =>
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

class LoginElement extends Component {
    componentWillMount() {
        const {
            db,
            history,
        } = this.props;

        const user = localStorage.getItem(`firebase:authUser:${ db.options.apiKey }:[DEFAULT]`);
        if (user) {
            history.push('/dashboard');
        }
    }
    render() {
        const {
            className,
        } = this.props;
        return (
            <div className = {className}>
                <LoginFormElement {...this.props}/>
            </div>
        );
    }
}


export const Login = styled(LoginElement)`
    & .login {
        margin-top: 10px;
        font-weight: 200;
    }
`;
