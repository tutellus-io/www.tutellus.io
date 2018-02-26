//@flow
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';

import {Text} from '../Layout';
import styles from '../../styles';

const TITLE_UNDERLINE_WIDTH = 5;//em

/*:: type SectionTitleProps = {simple?: bool} */
export const SectionTitle /*:ComponentType<SectionTitleProps>*/= styled.h2`
    margin-bottom: 1em;
    font-size: 1.5em;
    line-height: 1.25em;
    text-align: center;
    text-transform: uppercase;

    & em {
        display: block;
        font-size: 1.2em;
    }

    & img {
        display: inline-block;
        width: 1em;
        margin: 0 .25em;
    }

    ${ props =>
        props.simple || `
            &:after {
                content: "";
                background: url('/images/underlined.svg') no-repeat;
                background-size: 100% 100%;
                display: block;
                position: relative;
                top: .5em;
                height: 0.5em;
                width: ${ TITLE_UNDERLINE_WIDTH }em;
                left: calc(50% - ${ TITLE_UNDERLINE_WIDTH / 2 }em);
            }`
}
    @media ${ styles.media.tablet } {
        font-size: 2em;
    }
    @media ${ styles.media.laptop } {
        font-size: 2.3em;
    }
`;
export const PageTitle /*:ComponentType<SectionTitleProps>*/= styled((SectionTitle/*:any*/).withComponent('h1'))`
    text-transform: none;
    font-weight: 700;
    & em {
        font-weight: 300;
    }
`;
export const PageSubtitle = styled(Text)`
    text-shadow: 1px 1px 1px black;
`;
