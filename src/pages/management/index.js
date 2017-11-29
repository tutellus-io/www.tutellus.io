//@flow
import React from 'react';
import {Redirect} from 'react-router-dom';
import {parse} from 'query-string';
import {pick, includes} from 'lodash';
import {PageContent} from '../../components';
import {translate} from 'react-i18next';

import VerifyEmail from './VerifyEmail';

const ManagementElement = props => {
    const {
        className,
        location: {
            search,
        },
    } = props;
    const mgmt_params = pick(parse(search), ['mode', 'oobCode', 'continueUrl']);

    const isValidMode = mode => includes(['verifyEmail'/*, 'resetPassword'*/], mode);

    if (!isValidMode(mgmt_params.mode)) {
        return <Redirect to='/404'/>;
    }
    return (
        <PageContent className={className}>
            <VerifyEmail {...props} mgmt={mgmt_params}/>
        </PageContent>);
};

export const Management = translate()(ManagementElement);
