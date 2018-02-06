//@flow
import styled from 'styled-components';

import {PageSection} from './PageSection';
import {
    Button,
    FlexCenter,
    TextField,
} from './forms';
import styles from '../styles';

export const TextDiv = styled.div`
    > a {
        cursor: pointer;
        color : ${ styles.colors.emerald };
        &:hover {
            text-decoration: underline
        }
    }
`;
export const FlexEmail = styled(FlexCenter)`
    flex-wrap: nowrap;
    align-items: flex-end;
    align-content: flex-start;
    justify-content: flex-start;
    & ${ TextField } {
        width: 50%;
        flex-shrink: 1;
    }
    & i {
        width: 50px;
        margin-bottom: 1.1em;
        margin-left: 0.5em;
    }
    & ${ TextDiv } {
        width: calc(50% - 50px);
        flex-shrink: 1;
        padding: 0.546em 1.2em;
        font-size: 0.9em;
        margin-bottom: 2.2em;
    }
`;

export const KYCContent = styled(PageSection)`
    margin-top: 0;
`;

export const ButtonWarn = styled(Button)`
    &.errors {
        background-color: ${ styles.colors.googleplus };
        cursor: not-allowed;
}
`;

