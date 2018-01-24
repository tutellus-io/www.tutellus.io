//@flow
import React, {Component} from 'react';
/*:: import type {ComponentType} from 'react' */
import GoogleAnalytics from 'react-ga';

GoogleAnalytics.initialize('UA-110157188-1');

export const withTracker = (WrappedComponent/*:ComponentType<*>*/, options/*:any*/ = {}) => {
    const trackPage = page => {
        GoogleAnalytics.set({
            page,
            ...options,
        });
        GoogleAnalytics.pageview(page);
    };

    return class HOC extends Component/*::<*,*>*/ {
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

export default withTracker;
