//@flow
import * as React from 'react';

import {
    Loading,
} from '../components';

export const withLoading = (Component/*:ComponentType<*>*/) =>
    (props/*:mixed*/) => {
        if (props.loading) {
            return <Loading/>;
        }
        return <Component { ...props }/>;
    };

