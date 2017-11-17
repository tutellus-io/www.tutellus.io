import styled from 'styled-components';

export const Input = styled.input`
    display: block;
    padding: 9px 12px;
    width: 100%;
    border: 2px solid #BFC3CA;
    border-radius: 3px;
    background-color: #fff;
    font-weight: 200;
    font-size: 1rem;
`;

export const Label = styled.label`
    display: block;
    font-weight: bold;
    line-height: 130%;
    font-size: 1rem;

    &[required] {
        &:after {
            content: "*";
            color: #D90429;
            display: inline-block;
            margin-left: 2px;
        }
    }
`;

export const Field = styled.div`
    margin-bottom: 15px;
    &.error {
        input,
        textarea {
            border-color: #D90429;
        }
    }
`;

export const Button = styled.button`
    display: block;
    /* cursor: pointer; */
    padding: 10px;
    border: none;
    border-radius: 3px;
    font-size: 1rem;
    color: white;
    background-color: ${ (props)=> (props.primary ? '#13B84C' : '#DADADA') }; 
`;
