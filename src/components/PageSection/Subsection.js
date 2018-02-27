//@flow
import React from 'react';
import styled from 'styled-components';

import {SectionTitle} from './Titles';

export const Subsection = styled(props =>
    <div className={ props.className }>
        { props.children }
    </div>
)`
    & ${ SectionTitle } {
        text-transform: none;
        &:after { display: none; }
    }
`;
