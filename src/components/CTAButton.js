//@flow
import styled from 'styled-components';

import {styles} from '../styles';

export const CTAButton = styled.button`
    padding: 0.7em;
    font-size: 0.9em;
    display: block;
    cursor: pointer;
    background: ${ styles.colors.lightblue };
    border-radius: 5px;
    margin: 0 auto;
    text-transform: uppercase;
    border: 0;
    color: white;
    width: 100%;
`;
