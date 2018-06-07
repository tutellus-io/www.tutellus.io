//@flow
import React from 'react';
import {translate} from 'react-i18next';
import styled from 'styled-components';

import {CTAButton} from './CTAButton';
import {LazyImage} from './LazyImage';
import {ATracker} from '../withTracker';

export const Praise = styled(translate('praises')(props =>
    <ATracker className={ props.className }
        event= {{
            category: "praises",
            action: props.id,
        }}
        href={ props.href }
        target="_blank"
    >
        <LazyImage src={ props.logo } alt={ props.name } />
        <blockquote cite={ props.href }>&ldquo;{ props.children }&rdquo;</blockquote>
        <CTAButton>{ props.t('read_more') }</CTAButton>
    </ATracker>
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
    & > ${ CTAButton } {
        margin-top: 1em;
    }
`;
