//@flow
import styled from 'styled-components';

import {styles} from '../styles';

export const bullet_styles = `
    content: '';
    display: inline-block;
    border: solid .5em transparent;
    border-left: solid .5em ${ styles.colors.lightblue };
    position: relative;
    top: .125em;
`;

export const BulletList = styled.ul`
    padding-top: 1em;
    & > li {
        margin: 0.5em 0;
        line-height: 1.3em;
        &:before {
            ${ bullet_styles }
        }
    }
`;
