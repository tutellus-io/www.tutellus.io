//@flow
/* eslint indent: off */
import * as React from 'react';
import {translate} from 'react-i18next';
import {observer, inject} from 'mobx-react';
import Modal from 'react-awesome-modal';
import styled from 'styled-components';
import {
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import {
    PageContent,
    Tabs,
    Tab,
    Button,
    TOP_HEADER_HEIGHT,
} from '../../components';
import {KYC} from './KYC';
import {DashboardHome} from './DashboardHome';
import {
    Loading,
} from '../';
import styles from '../../styles';

const IcoModal = styled.div`
    display: flex;
    height: 450px;
    & > img {
        display: none;
        height: inherit;
        @media ${ styles.media.tablet } {
            display: initial;
        }
    }
    & > div {
        padding: 2em;
        & h1 {
            margin-bottom: 1.5em;
            text-align: center;
            font-size: 1.4em;
            line-height: 1.6em;
        }
        & ol {
            list-style: decimal;
            margin-left: 1.3em;
            margin-bottom: 2.5em;
            & li {
                margin-bottom: 1em;
                font-size: 0.95em;
                line-height: 1.4em;
            }
        }
    }
`;

/*::
type DashboardProps = {|
    className?: string,
    store: any,
    t: any,
|}
*/
const DashboardObserver = inject('store')(observer(class Dashboard extends React.Component/*::<DashboardProps>*/ {
    /*:: base: any */
    /*:: ref_user: void */
    render() {
        const {
            store,
            t,
            className,
        } = this.props;

        return (
            <PageContent className={className}>
                {
                    store.isAutoLoggable()
                    ? <Tabs>
                        <Tab to="/dashboard/home">
                            { t('Inicio') }
                        </Tab>
                        <Tab to="/dashboard/kyc">
                            { t('KYC') }
                        </Tab>
                    </Tabs>
                    : <Redirect to="/join/signup"/>
                }
                {
                    store.isBackerLoaded()
                    ? <Switch>
                        <Route exact path="/dashboard/home" render={ () =>
                            <DashboardHome { ...this.props } />
                        } />
                        <Route exact path="/dashboard/kyc" render={ () => <KYC { ...this.props }/>} />
                    </Switch>
                    : <Loading/>
                }
                <Modal
                    visible={store.isVisibleModal()}
                    width="750"
                    effect="fadeInUp"
                >
                    <IcoModal>
                        <img src="//lib.tutellus.com/ico/images/modal.jpg" alt="Join ICO!"/>
                        <div>
                            <h1>{t('modal_title')}</h1>
                            <ol>
                                <li>{t('modal_step_1')}</li>
                                <li>{t('modal_step_2')}</li>
                                <li>{t('modal_step_3')}</li>
                            </ol>
                            <Button primary full
                                onClick={store.toggleShowModal}
                            >
                                {t('modal_button')}
                            </Button>
                        </div>
                    </IcoModal>
                </Modal>
            </PageContent>
        );
    }
}));
export const Dashboard = translate('dashboard')(styled(DashboardObserver)`
    & > ${ Tabs } {
        margin-top: ${ TOP_HEADER_HEIGHT.SMALL }px;
        padding-left: 3em;
    }
`);
