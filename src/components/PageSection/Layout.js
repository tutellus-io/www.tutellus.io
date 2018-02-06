//@flow
import styled from 'styled-components';

import {MAX_CONTENT_WIDTH} from '../Layout';
import styles from '../../styles';

export const PageContent = styled.div``;

export const ColumnCenter = styled.div``;

export const SectionContent = styled.div`
    @media ${ styles.media.desktop } {
        width: 80%;
        max-width: ${ MAX_CONTENT_WIDTH }px;
        margin: 0 auto;
    }
`;
