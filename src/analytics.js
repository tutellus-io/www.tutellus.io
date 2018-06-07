import GoogleAnalytics from 'react-ga';

import {cfg} from './config';

GoogleAnalytics.initialize([{
    trackingId: cfg.ANALYTICS_TRACKER,
    gaOptions: {
        name: 'tutellus_io',
    },
}], {alwaysSendToDefaultTracker: false});

export const trackPage = (page) => {
    GoogleAnalytics.ga('tutellus_io.send', 'pageview', {
        page,
    });
};

export const sendEvent = (event) => {
    GoogleAnalytics.ga('tutellus_io.send', 'event', {
        ...event,
    });
};

export default GoogleAnalytics;
