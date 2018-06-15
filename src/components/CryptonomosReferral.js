//@flow
/* global fetch: false */
import React from 'react';

export class CryptonomosReferral extends React.Component/*::<Props>*/ {
    componentDidMount() {
        const referral = this.getReferFromUrl();
        this.sendReferral(referral);
    }

    getReferFromUrl = () => {
        const results = /[?&]r(=([^&#]*)|&|#|$)/.exec(window.location.search);
        if (results === null || results[2].length === 0) {
            return null;
        }
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    sendReferral = async(referral) => {
        const {
            url,
        } = this.props;
        if (referral) {
            return await fetch(`${ url }/${ referral }`, {
                credentials: 'include',
            });
        }
    }

    render() {
        return null;
    }
}
