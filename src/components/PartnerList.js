//@flow
import React from 'react';
import {compose, keys, length, prop} from 'ramda';
import styled from 'styled-components';

import styles from '../styles';

const countEntities = compose(length, keys, prop('entities'));
const entitiesAsColumns = props => `
    repeat(${ countEntities(props) }, ${ 100 / countEntities(props) }%)
`;

export const PartnerList = styled(props =>
    <ul className={ props.className }>{
        Object.entries(props.entities).map(([name, image_url]) =>
            <li key={ name }>
                <img src={ image_url } alt={ name } />
            </li>
        )
    }</ul>
)`
    max-width: 75%;
    margin: 0 auto;

    & > li {
        padding: 1em;

        & > img {
            max-width: 100%;
        }

        @media ${ styles.media.tablet } {
            margin: 0;
        }
    }

    @media ${ styles.media.tablet } {
        max-width: 100%;
        display: grid;
        grid-template-columns: ${ entitiesAsColumns };
    }
`;
