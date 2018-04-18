//@flow
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';

import {Text} from '../Layout';
import styles from '../../styles';

/*:: type SectionTitleProps = {margin?: bool} */
export const SectionTitle /*:ComponentType<SectionTitleProps>*/= styled.h2`
    ${ ({margin = true}) => margin && `margin-bottom: 1em;` }
    font-size: 1.3em;
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

    @media ${ styles.media.tablet } {
        font-size: 1.8em;
    }
    @media ${ styles.media.laptop } {
        font-size: 2em;
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
