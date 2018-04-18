//@flow
import styled from 'styled-components';

import {PageSection} from './PageSection';

export const ResponsiveGrid = styled.ul`
    display: grid;
    grid-gap: ${ ({gap = '1em 1em'}) => gap };
    font-size: 1em;
    grid-template-columns: repeat(auto-fit, minmax( ${ ({minWidth = '11em'}) => minWidth }, 1fr));

    ${ PageSection } & {
        padding-top: 1.5em;
    }
`;
ResponsiveGrid.displayName = 'ResponsiveGrid';

