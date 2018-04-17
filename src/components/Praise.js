//@flow
import React from 'react';
import {translate} from 'react-i18next';
import styled from 'styled-components';

import {
    AButton,
    LazyImage,
} from '.';

export const Praise = styled(translate('praises')(props =>
    <div className={ props.className }>
        <LazyImage src={ props.logo } alt={ props.name } />
        <blockquote cite={ props.href }>&ldquo;{ props.children }&rdquo;</blockquote>
        <AButton href={ props.href } primary full={true}>{ props.t('read_more') }</AButton>
    </div>
))`
    background: white;
    color: black;
    display: grid;
    grid-template-rows: 3em auto 2.5em;
    grid-gap: 0.5em;
    border-radius: 2px;
    padding: 1.2em 2em;
    align-items: center;
    justify-items: center;
    font-size: 1em;

    & blockquote {
        font-size: 0.9em;
        line-height: 1.4em;
        font-style: italic;
        text-align: center;
    }

    & ${ AButton } {
        padding: 0.7em;
        font-size: 0.9em;

    }
`;
