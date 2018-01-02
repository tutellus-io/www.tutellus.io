//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import PropTypes from 'prop-types';
import R from 'ramda';

import * as application_context from '../config';

export class ApplicationConfigProvider extends React.Component/*::<*>*/ {
    getChildContext() {
        return application_context;
    }
    render() {
        return this.props.children;
    }
}
ApplicationConfigProvider.childContextTypes = R.map(R.always(PropTypes.any), application_context);

export const withAppConfig = (WrappedComponent/*:ComponentType<*>*/) =>
    (props/*:any*/) =>
        <ApplicationConfigProvider>
            <WrappedComponent {...props} />
        </ApplicationConfigProvider>;
