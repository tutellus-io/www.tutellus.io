//@flow
import React, {Component} from 'react';
/*:: import type {ComponentType} from 'react' */
import R from 'ramda';
import styled from 'styled-components';
import {trackPage, sendEvent} from './analytics';

export const withTracker = (WrappedComponent/*:ComponentType<*>*/, options/*:any*/ = {}) => {
    return class HOC extends Component/*::<*,*>*/ {
        static displayName = `withTracker(${ WrappedComponent.displayName })`;
        componentDidMount() {
            const page = this.props.location.pathname;
            trackPage(page);
        }

        componentWillReceiveProps(nextProps/*:any*/) {
            const currentPage = this.props.location.pathname;
            const nextPage = nextProps.location.pathname;

            if (currentPage !== nextPage) {
                trackPage(nextPage);
            }
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
};

export const withClickTracker = (WrappedComponent/*:ComponentType<*>*/) => {
    return class HOC extends Component/*::<*,*>*/ {
        static displayName = `withClickTracker(${ WrappedComponent.displayName })`;

        trackEvent = () => {
            const {
                event = {},
            } = this.props;

            const eventyze = event =>
                Object.keys(event).reduce((result, key) => {
                    const new_key = `event${ key.charAt(0).toUpperCase() }${ key.slice(1) }`;
                    result[new_key] = event[key];
                    return result;
                }, {});

            sendEvent(eventyze(event));
        }

        render() {
            const wrapped_props = R.omit(['event'], this.props);
            return <WrappedComponent {...wrapped_props}
                onClickCapture={ this.trackEvent }/>;
        }
    };
};

const A = styled.a``;
export const ATracker = withClickTracker(A);
const Button = styled.button``;
export const ButtonTracker = withClickTracker(Button);

export default withTracker;
