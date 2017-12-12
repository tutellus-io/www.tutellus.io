//@flow
/* global localStorage */
import * as React from 'react';
import styled from 'styled-components';
import Rebase from 're-base';
import _ from 'lodash';
import {translate} from 'react-i18next';

import {
    PageContent,
    PageSection,
    SectionTitle,
    TOP_HEADER_HEIGHT,
} from '../../components';

import Navigation from './Navigation';
import SignupForm from './SignupForm';
import EmailForm from './EmailForm';
import WalletForm from './WalletForm';
import IdentityForm from './IdentityForm';
import Summary from './Summary';

const StepContent = styled((props) =>
    <PageSection className={ props.className } light>
        <div>
            { props.children }
        </div>
    </PageSection>
)`
    & > div {
        width: 80%;
        max-width: 48em;
        margin: 0 auto;
    }
`;
/*::
type SignupStep = {|
    //$FlowFixMe
    component: any,
    key?: string,
    name: string,
|}
type SignupProps = {|
    className?: string,
    showAlert: void,
    t: (string => string),
    //$FlowFixMe
    db: any,
|}
type SignupState = {|
    user: {|
        email_verified?: bool,
        verification_email_sended?: bool,
    |},
    active_step: number,
|}
*/
class SignupElement extends React.Component/*::<SignupProps, SignupState>*/ {
    /*::
    steps: Array<SignupStep>
    interval: number
    ref_user: void
    base: any
    */
    constructor() {
        super();
        //$FlowFixMe
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

    checkEmailVerified() {
        const {
            db,
        } = this.props;

        if (!this.interval) {
            this.interval = setInterval(() => {
                db.auth().currentUser.reload();
                const {
                    emailVerified,
                } = db.auth().currentUser;
                this.updateUser({email_verified: emailVerified});
            //eslint-disable-next-line no-magic-numbers
            }, 5000);
        }
    }

    componentWillUnmount() {
        if (this.ref_user) {
            this.base.removeBinding(this.ref_user);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const stateEqual = _.isEqual(this.state, prevState);
        if (!stateEqual && this.state.active_step === -1) {
            const last_step_done = _.findLastIndex(this.steps,
                step => this.keyDone(step.key)
            );
            this.setState({
                active_step: last_step_done + 1,
            });
        }

        if (this.isWaitingForEmailVerified()) {
            this.checkEmailVerified();
        }
        this.tryClearInterval();
    }

    isWaitingForEmailVerified() {
        const {
            user: {
                email_verified = false,
                verification_email_sended = false,
            },
        } = this.state;

        return verification_email_sended && !email_verified;
    }

    tryClearInterval() {
        const {
            user: {
                email_verified = false,
            },
        } = this.state;

        if (email_verified && this.interval) {
            clearInterval(this.interval);
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        const propsEqual = _.isEqual(this.props, nextProps);
        const stateEqual = _.isEqual(this.state, nextState);
        return !propsEqual || !stateEqual;
    }

    /*:: updateUser: (Object => void) */
    updateUser(updated_fields) {
        const user = _.mergeWith(this.state.user, updated_fields,
            (obj, other) => {
                if (_.isArray(obj)) {
                    return obj.concat(other);
                }
            }
        );
        this.setState({
            user,
        });
    }

    /*:: syncUser: (string => void) */
    syncUser(uid) {
        this.ref_user = this.base.syncState(`backers/${ uid }`, {
            context: this,
            state: 'user',
        });
    }

    /*:: getUserInfo: (void => Object) */
    getUserInfo() {
        return _.get(this.state, 'user', {});
    }

    /*:: keyDone: (?string => bool) */
    keyDone(key) {
        return _.get(this.state.user, key, false);
    }

    render() {
        const {
            className = '',
            embed = false,
            db,
            showAlert,
            t,
        } = this.props;

        const jumpToStep = step => {
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
            jumpToStep: step => {
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
            <PageContent className={className}>
                {
                    this.state.active_step === -1
                        ? <PageSection>
                            Loading....
                        </PageSection>
                        : <div>
                            <PageSection>
                                { embed ||
                                <SectionTitle simple>{t('signup:title')}</SectionTitle>
                                }
                                <Navigation
                                    active_step = {this.state.active_step}
                                    steps={this.steps}
                                    user={this.state.user}
                                    jumpToStep={jumpToStep}
                                />
                            </PageSection>
                            <StepContent>
                                { //eslint-disable-next-line max-len
                                    React.cloneElement(this.steps[this.state.active_step].component, cloneExtensions)
                                }
                            </StepContent>
                        </div>
                }
            </PageContent>
        );
    }
}

export const Signup = styled(translate('signup')(SignupElement))`
    margin-top: ${ TOP_HEADER_HEIGHT.SMALL }px;
    ${ props => props.embed && `
        margin-top: 0;
    ` }
`;
export default Signup;
