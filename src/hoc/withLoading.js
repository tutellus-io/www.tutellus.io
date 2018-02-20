//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */

import {
    Loading,
} from '../components';

export const withLoading = (Component/*:ComponentType<*>*/) =>
    (props/*:any*/) => {
        if (props.loading) {
            return <Loading/>;
        }
        return <Component { ...props }/>;
    };

