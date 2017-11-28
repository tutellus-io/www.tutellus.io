//@flow
import * as React from 'react';
import {PageSection, SectionTitle, Text, ColumnCenter, LinkButton} from '../../components';

/*::
type TranslateFn = (string => string)
type VerifyEmailProps = {|
    t: TranslateFn,
    mgmt: {|
        oobCode: void,
    |},
    db: any,
|}
type VerifyEmailState = {|
    loading: bool,
    verified: bool,
    user: void,
|}
*/
export default class VerifyEmail extends React.Component/*::<VerifyEmailProps, VerifyEmailState>*/ {
    constructor() {
        super();

        this.state = ({
            loading: true,
            verified: false,
        }/*:any*/);
    }

    componentWillMount() {
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

const EmailVerified = ({t}/*:{t: TranslateFn}*/) =>
    <div>
        <SectionTitle simple>{t('signup:verified_title')}</SectionTitle>
        <ColumnCenter>
            <Text center>{t('signup:verified_text')}</Text>
        </ColumnCenter>
    </div>
;

const EmailNotVerified = ({t}/*:{t: TranslateFn}*/) =>
    <div>
        <SectionTitle simple>{t('signup:not_verified_title')}</SectionTitle>
        <ColumnCenter>
            <Text center>{t('signup:not_verified_text')}</Text>
            <LinkButton to="/signup" full>{t('signup:not_verified_link')}</LinkButton>
        </ColumnCenter>
    </div>
;
