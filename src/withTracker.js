//@flow
import React, {Component} from 'react';
/*:: import type {ComponentType} from 'react' */
import GoogleAnalytics from 'react-ga';

GoogleAnalytics.initialize([{
    trackingId: 'UA-110157188-1',
    gaOptions: {
        name: 'tutellus_io',
    },
}], {alwaysSendToDefaultTracker: false});

export const withTracker = (WrappedComponent/*:ComponentType<*>*/, options/*:any*/ = {}) => {
    const trackPage = page => {
        GoogleAnalytics.ga('tutellus_io.send', 'pageview', {
            page,
            ...options,
        });
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
