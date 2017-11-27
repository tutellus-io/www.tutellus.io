import React, {Component} from 'react';
import Rebase from 're-base';
import _ from 'lodash';
import {translate} from 'react-i18next';
import {PageContent, PageSection} from '../components';

class DashboardElement extends Component {
    constructor() {
        super();

        this.state = {
            user: {},
        };
    }

    componentWillMount() {
        const {
            db,
            history,
        } = this.props;

        this.base = Rebase.createClass(db.database());
        const user = localStorage.getItem(`firebase:authUser:${ db.options.apiKey }:[DEFAULT]`);
        if (!user) {
            history.push('/signup');
        }

        db.auth().onAuthStateChanged(auth_info => {
            // No funciona ({uid = null, emailVerified = null} = {})
            const {
                uid,
            } = _.pick(auth_info, ['uid']);

            if (_.get(this.state.user, 'uid') !== uid) {
                //Siguimos logados
                this.syncUser(uid);
            }
        });
    }

    componentWillUpdate(nextProps, nextState) {
        const {
            history,
        } = this.props;
        const verified = _.get(nextState, 'user.verified_ok', false);
        if (!verified) {
            history.push('/signup');
        }
    }

    componentWillUnmount() {
        if (this.ref_user) {
            this.base.removeBinding(this.ref_user);
        }
    }

    syncUser(uid) {
        this.ref_user = this.base.syncState(`backers/${ uid }`, {
            context: this,
            state: 'user',
        });
    }

    render() {
        const {
            className,
        } = this.props;
        const {
            user,
        } = this.state;
        return (
            <PageContent className={className}>
                {
                    _.isEmpty(user) ? <PageSection>Loading....</PageSection>
                        : <PageSection>
                            Esto es el Dashboard! {user.first_name}
                        </PageSection>
                }
            </PageContent>
        );
    }
}

export const Dashboard = translate()(DashboardElement);
