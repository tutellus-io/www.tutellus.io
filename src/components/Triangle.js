//@flow
import React from 'react';
import styled from 'styled-components';
import sizeMe from 'react-sizeme';
import {
    SectionContent,
} from '.';

export const Triangle = sizeMe()(styled(({className}) =>
    <SectionContent className={ className }>
    </SectionContent>
)`
    height: 2em;
    position: relative;
    box-sizing: border-box;
    border-style: solid;
    border-width: 2em ${ ({size: {width}}) => width / 2 }px 0 ${ ({size: {width}}) => width / 2 }px;
    border-color: ${ ({color}) => color } transparent transparent transparent;
`);
Triangle.displayName = "Triangle";
