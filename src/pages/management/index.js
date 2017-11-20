import React, {Component} from 'react';
import {parse} from 'query-string';
import {Redirect, Link} from 'react-router-dom';
import _ from 'lodash';

const EmailVerified = () =>
    <div>
        Enhorabuena tu email ha sido verificado.
        <Link to="/signup"> Seguir el proceso de registro</Link>
    </div>
;

const EmailNotVerified = () =>
    <div>
        Lo siento tu email no ha podido ser verificado.
        The action code is invalid. This can happen if the code is malformed, expired, or has already been used
        Solicita de nuevo el email de verificación.
        <Link to="/signup"> Volver al proceso de registro</Link>
    </div>
;

export class Management extends Component {
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
            .then((view) => {
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
        if (params.oobCode) {
            return auth.applyActionCode(params.oobCode)
            .then(() => this.STATES.EMAIL_VERIFIED)
            .catch(() => this.STATES.EMAIL_NOT_VERIFIED);
        }
        return Promise.resolve(this.STATES.UNKNOWN);
    }

    render() {
        return <div>
            {
                this.state.view === this.STATES.EMAIL_VERIFIED && <EmailVerified/>
            }
            {
                this.state.view === this.STATES.EMAIL_NOT_VERIFIED && <EmailNotVerified/>
            }
            {
                this.state.view === this.STATES.RESET_PASSWORD && <Redirect to='/404'/>
            }
        </div>;
    }
};

export default Management;
