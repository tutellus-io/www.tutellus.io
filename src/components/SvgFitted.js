//@flow
import * as React from 'react';
import styled from 'styled-components';

import {LazyImage} from './LazyImage';

export const SvgFitted = styled(({className, src, name, height, children}) =>
    <li className={ className }>
        <LazyImage src={ src } height={ parseInt(height) } alt={ name }/>
        { children }
    </li>
)`
    display: grid;
    align-items: center;
    justify-items: center;
`;
SvgFitted.displayName = 'SvgFitted';
