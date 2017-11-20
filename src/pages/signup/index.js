/* global localStorage */
import React, {Component} from 'react';
import styled from 'styled-components';
import Rebase from 're-base';
import _ from 'lodash';
import {translate} from 'react-i18next';

import {PageSection, Row, Col} from '../../components';

import Navigation from './Navigation';
import SignupForm from './SignupForm';
import EmailForm from './EmailForm';
import WalletForm from './WalletForm';
import IdentityForm from './IdentityForm';
import Summary from './Summary';

class SignupElement extends Component {
    constructor() {
        super();
        this.state = {
            active_step: -1,
            user: {},
        };

        this.syncUser = this.syncUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.getUserInfo = this.getUserInfo.bind(this);
        this.keyDone = this.keyDone.bind(this);
    }

    componentWillMount() {
        const {
            db,
        } = this.props;

        this.base = Rebase.createClass(db.database());
        const user = localStorage.getItem(`firebase:authUser:${ db.options.apiKey }:[DEFAULT]`);
        if (!user) {
            this.setState({active_step: 0});
        }

        db.auth().onAuthStateChanged((auth_info) => {
            // No funciona ({uid = null, emailVerified = null} = {})
            const {
                uid,
                emailVerified,
            } = _.pick(auth_info, ['uid', 'emailVerified']);
            if (_.get(this.state.user, 'uid') !== uid) {
                //Siguimos logados
                this.syncUser(uid);
            }
            if (_.get(this.state.user, 'email_verified') !== emailVerified) {
                this.updateUser({email_verified: emailVerified});
            }
        });
        const t = this.props.t;
        this.steps = [{
            name: t('signup:step_signup'),
            component: <SignupForm/>,
            key: 'signup_ok',
        }, {
            name: t('signup:step_email'),
            component: <EmailForm/>,
            key: 'email_verified',
        }, {
            name: t('signup:step_wallet'),
            component: <WalletForm/>,
            key: 'eth_ok',
        }, {
            name: t('signup:step_identity'),
            component: <IdentityForm/>,
            key: 'identity_ok',
        }, {
            name: t('signup:step_summary'),
            component: <Summary/>,
            key: 'verified_ok',
        }];
    }

    componentWillUnmount() {
        if (this.ref_user) {
            this.base.removeBinding(this.ref_user);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const stateEqual = _.isEqual(this.state, prevState);
        console.log('componentDidUpdate', stateEqual, this.state, prevState);
        if (!stateEqual && this.state.active_step === -1) {
            const last_step_done = _.findLastIndex(this.steps, (step) => this.keyDone(step.key));
            this.setState({
                active_step: last_step_done + 1,
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        const propsEqual = _.isEqual(this.props, nextProps);
        const stateEqual = _.isEqual(this.state, nextState);
        return !propsEqual || !stateEqual;
    }

    updateUser(updated_fields) {
        const user = _.mergeWith(this.state.user, updated_fields, (obj, other) => {
            if (_.isArray(obj)) {
                return obj.concat(other);
            }
        });
        this.setState({
            user,
        });
    }

    syncUser(uid) {
        console.log('syncUser', uid);
        this.ref_user = this.base.syncState(`backers/${ uid }`, {
            context: this,
            state: 'user',
        });
    }

    getUserInfo() {
        return _.get(this.state, 'user', {});
    }

    keyDone(key) {
        return _.get(this.state.user, key, false);
    }

    render() {
        const {
            className = '',
            db,
            showAlert,
            t,
        } = this.props;

        console.log('translate -t', t);
        const jumpToStep = (step) => {
            this.setState({
                active_step: step,
            });
        };

        const cloneExtensions = {
            db,
            showAlert,
            syncUser: this.syncUser,
            updateUser: this.updateUser,
            user: this.state.user,
            jumpToStep: (step) => {
                jumpToStep(step);
            },
            nextStep: () => {
                const next_step = this.state.active_step + 1;
                if (next_step < this.steps.length) {
                    jumpToStep(next_step);
                }
            },
            prevStep: () => {
                const prev_step = this.state.active_step - 1;
                if (prev_step > 0) {
                    jumpToStep(prev_step);
                }
            },
        };

        return (
            <PageSection className={className} title={t('signup:title')}>
                <Row >
                    <Col size= {1} className="wizard">
                        {
                            this.state.active_step === -1
                                ? <div>Loading....</div>
                                : <div>
                                    <Navigation
                                        active_step = {this.state.active_step}
                                        steps={this.steps}
                                        keyDone={this.keyDone}
                                        jumpToStep={jumpToStep}
                                    />
                                    <div className="content">
                                        {React.cloneElement(this.steps[this.state.active_step].component, cloneExtensions)}
                                    </div>
                                </div>
                        }
                    </Col>
                </Row>
            </PageSection>
        );
    }
}

export const Signup = styled(translate('signup')(SignupElement))`
    & .wizard {
        > div {
            display: flex;
            align-items: center;
            flex-direction: column;
        }
        & .content {
            width: 400px;
            margin: 0 auto;
        }
    }
`;
export default Signup;
