import React, {Component} from 'react';
import {parse} from 'query-string';
import {Redirect, Link} from 'react-router-dom';
import _ from 'lodash';
import {PageContent, SectionTitle, Text, ColumnCenter, LinkButton} from '../../components';
import {translate} from 'react-i18next';
import styled from 'styled-components';
import styles from '../../styles';


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

    componentDidMount() {
        const {
            db,
            location: {
                search,
            },
        } = this.props;

        const url_params = _.pick(parse(search), ['mode', 'oobCode', 'continueUrl']);
        const auth = db.auth();

        const views_Fn = {
            resetPassword: Promise.resolve(this.STATES.RESET_PASSWORD),
            verifyEmail: this.verifyEmail,
        };

        if (_.has(views_Fn, url_params.mode)) {
            views_Fn[url_params.mode](auth, url_params)
            .then(view => {
                this.setState({
                    view,
                    params: url_params,
                });
            });
        } else {
            this.setState({
                view: this.STATES.UNKNOWN,
                params: url_params,
            });
        }
    }

    verifyEmail(auth, params) {
        console.log('verifyEmail', params);
        if (params.oobCode) {
            return auth.applyActionCode(params.oobCode)
            .then(() => this.STATES.EMAIL_VERIFIED)
            .catch(() => this.STATES.EMAIL_NOT_VERIFIED);
        }
        return Promise.resolve(this.STATES.UNKNOWN);
    }

    render() {
        const {
            t,
            className,
        } = this.props;
        console.log(this.state.view);
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
