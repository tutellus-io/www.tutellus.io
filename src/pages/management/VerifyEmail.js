import React, {Component} from 'react';
import {PageSection, SectionTitle, Text, ColumnCenter, LinkButton} from '../../components';

export default class VerifyEmail extends Component {
    constructor() {
        super();

        this.state = {
            loading: true,
            verified: false,
        };
    }

    componentWillMount() {
        console.log('VerifyEmail - componentWillMount');
        const {
            db,
            mgmt: {
                oobCode,
            },
        } = this.props;

        db.auth().applyActionCode(oobCode)
        .then(() => {
            this.setState({
                loading: false,
                verified: true,
            });
        })
        .catch(() => {
            this.setState({
                loading: false,
            });
        });
    }

    render() {
        if (this.state.loading) {
            return <PageSection>Loading....</PageSection>;
        }
        if (this.state.verified) {
            return <EmailVerified {...this.props}/>;
        }
        return <EmailNotVerified {...this.props}/>;
    }
}

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
