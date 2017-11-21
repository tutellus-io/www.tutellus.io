import React, {Component} from 'react';
import Rebase from 're-base';
import _ from 'lodash';
import {PageContent} from '../components';

export class Dashboard extends Component {
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
                emailVerified,
            } = _.pick(auth_info, ['uid', 'emailVerified']);

            if (_.get(this.state.user, 'uid') !== uid) {
                //Siguimos logados
                this.syncUser(uid);
            }
        });
    }

    componentWillUnmount() {
        if (this.ref_user) {
            this.base.removeBinding(this.ref_user);
        }
    }

    syncUser(uid) {
        console.log('syncUser', uid);
        this.ref_user = this.base.syncState(`backers/${ uid }`, {
            context: this,
            state: 'user',
        });
    }

    render() {
        const {
            user,
        } = this.state;
        return (
            <PageContent>
                <div>Esto es el Dashboard! {user.first_name}</div>
            </PageContent>
        );
    }
}
