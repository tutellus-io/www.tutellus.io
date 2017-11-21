import styled from 'styled-components';
import styles from '../../styles';

export const Input = styled.input`
    display: block;
    padding: 0.6em 0.9em;
    width: 100%;
    border: 1px solid ${ styles.colors.bluegrey };
    border-radius: 3px;
    background-color: ${ styles.colors.white };
    font-weight: 200;
    font-size: 1em;
`;

export const Label = styled.label`
    display: block;
    font-weight: bold;
    font-size: 1em;
    margin: 0.5em 0
`;

export const Field = styled.div`
    margin-bottom: 1.5em;
    &.error {
        input,
        textarea {
            border-color: ${ styles.colors.googleplus };
        }

        > .error_placeholder {
            margin-top: 0.5em;
            color: ${ styles.colors.googleplus };
        }
    }
`;

export const Button = styled.button`
    display: block;
    /* cursor: pointer; */
    padding: 1em;
    border: none;
    border-radius: 3px;
    font-size: 1em;
    color: white;
    background-color: ${ props=> (props.primary ? styles.colors.emerald : styles.colors.softgrey) }; 
    width: 100%;
`;
