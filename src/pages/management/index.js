import React, {Component} from 'react';
import {parse} from 'query-string';
import {Redirect} from 'react-router-dom';
import _ from 'lodash';
import {PageContent, SectionTitle, Text, ColumnCenter, LinkButton} from '../../components';
import {translate} from 'react-i18next';


const EmailVerified = ({t}) =>
    <div>
        <SectionTitle simple>{t('signup:verified_title')}</SectionTitle>
        <ColumnCenter>
            <Text center>{t('signup:verified_text')}</Text>
        </ColumnCenter>
    </div>
;

const EmailNotVerified = ({t}) =>
    <div>
        <SectionTitle simple>{t('signup:not_verified_title')}</SectionTitle>
        <ColumnCenter>
            <Text center>{t('signup:not_verified_text')}</Text>
            <LinkButton to="/signup" full>{t('signup:not_verified_link')}</LinkButton>
        </ColumnCenter>
    </div>
;

export class ManagementElement extends Component {
    constructor() {
        super();

        this.STATES = {
            EMAIL_VERIFIED: 'EMAIL_VERIFIED',
            EMAIL_NOT_VERIFIED: 'EMAIL_NOT_VERIFIED',
            RESET_PASSWORD: 'RESET_PASSWORD',
            UNKNOWN: 'UNKNOWN',
        };

        this.state = {
            view: null,
            params: {},
        };

        this.verifyEmail = this.verifyEmail.bind(this);
    }

    componentWillMount() {
        console.log('componentWillMount');
        const {
            db,
            location: {
                search,
            },
        } = this.props;

        db.auth().onAuthStateChanged(() => {
            const url_params = _.pick(parse(search), ['mode', 'oobCode', 'continueUrl']);
            const views_Fn = {
                resetPassword: Promise.resolve(this.STATES.RESET_PASSWORD),
                verifyEmail: this.verifyEmail,
            };
            console.log('url_params.mode', url_params.mode);
            if (_.has(views_Fn, url_params.mode)) {
                return views_Fn[url_params.mode](db, url_params)
                .then(view => {
                    this.setState({
                        view,
                        params: url_params,
                    });
                });
            }
            this.setState({
                view: this.STATES.UNKNOWN,
                params: url_params,
            });
        });
    }

    verifyEmail(db, params) {
        //Fallback: Si ya estas validado mostramos la página buena.
        if (_.get(db.auth().currentUser, 'emailVerified', false)) {
            return Promise.resolve(this.STATES.EMAIL_VERIFIED);
        }

        if (params.oobCode) {
            return db.auth().applyActionCode(params.oobCode)
            .then(() => this.STATES.EMAIL_VERIFIED)
            .catch(() => this.STATES.EMAIL_NOT_VERIFIED);
        }
        return Promise.resolve(this.STATES.UNKNOWN);
    }

    shouldComponentUpdate(nextProps, nextState) {
        const propsEqual = _.isEqual(this.props, nextProps);
        const stateEqual = _.isEqual(this.state, nextState);
        return !propsEqual || !stateEqual;
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('shouldComponentUpdate', nextProps, nextState);
    //     return true;
    // }
    render() {
        const {
            t,
            className,
        } = this.props;
        console.log('render', this.state.view);
        return <PageContent className={className}>

            {
                this.state.view === this.STATES.EMAIL_VERIFIED && <EmailVerified t={t}/>
            }
            {
                this.state.view === this.STATES.EMAIL_NOT_VERIFIED && <EmailNotVerified t={t}/>
            }
            {
                this.state.view === this.STATES.RESET_PASSWORD && <Redirect to='/404'/>
            }
        </PageContent>;
    }
};

export const Management = translate()(ManagementElement);
