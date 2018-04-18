//@flow
import * as React from 'react';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';

const DEFAULT_OFFSET = 300;
export const LazyImage = styled(({offset = DEFAULT_OFFSET, ...props}) =>
    <LazyLoad once offset={ offset }>
        <img alt="" {...props}/>
    </LazyLoad>
)``;

LazyImage.displayName = 'LazyImage';
