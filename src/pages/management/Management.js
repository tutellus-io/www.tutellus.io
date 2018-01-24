//@flow
import React from 'react';
/*:: import type {ComponentType} from 'react' */
import {Redirect} from 'react-router-dom';
import {parse} from 'query-string';
import {pick, includes} from 'lodash';
import {observer, inject} from 'mobx-react';

import {
    Loading,
} from '../';

/*::
type Props = {
    location: {search: string},
}
type State = {
    loading: bool,
    view: string,
}
*/
export const Management = inject('store')(observer(class extends React.Component/*::<Props, State>*/ {
    constructor() {
        super();

        this.state = ({
            loading: true,
            view: '',
        }/*:any*/);
    }

    componentWillMount() {
        const {
            store,
            location: {
                search,
            },
        } = (this.props/*:any*/);

        const mgmt_params = pick(parse(search), ['mode', 'oobCode', 'continueUrl']);

        const isValidMode = mode => includes(['verifyEmail'/*, 'resetPassword'*/], mode);

        const show = to => () => ({loading: false, view: `/management/${ to }`});

        if (!isValidMode(mgmt_params.mode)) {
            return this.setState({
                loading: false,
                view: '/404',
            });
        }

        store.applyActionCode(mgmt_params.oobCode)
        .then(show('verified-email'))
        .catch(show('not-verified-email'))
        .then(next_state => this.setState(next_state));
    }

    render() {
        if (this.state.loading) {
            return <Loading/>;
        }
        return <Redirect to={this.state.view}/>;
    }
}));
