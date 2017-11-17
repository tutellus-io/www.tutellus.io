import React from 'react';

import {PageTitle, Text} from '../../components';


const Line = ({label, value}) =>
    <div><strong>{label}</strong>: {value}</div>;

const Summary = (props) => {
    const {
        user,
        className,
    } = props;
    console.log('Summary', user);
    return (
        <div className = {className} >
            <PageTitle>Resumen</PageTitle>
            <Text>Te avisaremos por email cuando verifiquemos tus datos, antes de la ICO, para que puedas comprar</Text>
            <Line label="First Name" value={user.first_name}/>
            <Line label="Last Name" value={user.last_name}/>
            <Line label="email" value={user.email}/>
            <Line label="¿email_verificado?" value={`${ user.email_verified }`}/>
        </div>
    );
};


export default Summary;
