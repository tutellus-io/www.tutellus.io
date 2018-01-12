//@flow
import * as React from 'react';
import {observer, inject} from 'mobx-react';
import {
    SectionTitle,
    Text,
    ColumnCenter,
    LinkButton,
} from '../../components';
import {Loading} from '../';

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
export default inject('store')(observer(class VerifyEmail extends React.Component/*::<VerifyEmailProps, VerifyEmailState>*/ {
    constructor() {
        super();

        this.state = {
            loading: true,
            verified: false,
        }/*:any*/;
    }

    async componentWillMount() {
        const {
            store,
            mgmt: {
                oobCode,
            },
        } = this.props;

        const result = await store.applyActionCode(oobCode);
        if (result) {
            this.setState({
                loading: false,
                verified: true,
            });
        } else {
            this.setState({
                loading: false,
            });
        }
    }

    render() {
        if (this.state.loading) {
            return <Loading/>;
        }
        if (this.state.verified) {
            return <EmailVerified {...this.props}/>;
        }
        return <EmailNotVerified {...this.props}/>;
    }
}));

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
