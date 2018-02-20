//@flow
import React from 'react';
import styled from 'styled-components';

import {Text} from './Layout';

export const Powered = styled(({by, alt, logo, className}) =>
    <div className={ className }>
        <Text center>{ by }</Text>
        <div>
            <img src={ logo } alt={ alt }/>
        </div>
    </div>
)`
    display: grid;
    justify-content: center;
    & ${ Text } {
        margin-bottom: 0.5em;
    }
    > div {
        width: 200px;
    }
    & img {
        max-width: 100%;
        min-width: 100%;
    }
`;
