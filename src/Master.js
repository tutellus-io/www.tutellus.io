//@flow
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import {injectGlobal} from 'styled-components';
import AlertContainer from 'react-alert';
import {translate} from 'react-i18next';

import {
    BrowserRouter,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import withTracker from './withTracker';
import {withAppConfig} from './hoc';

import {
    Home,
    Management,
    Dashboard,
    Join,
    NoMatch,
} from './pages';

import {
    FBTracker,
    TopHeader,
    SecondaryMenu,
    FloatingHelp,
} from './components';

import './i18n';

const ALERT_TIME_MS = 5000;
const ALERT_OFFSET = 20;

const SimpleHeaderComponent = props => {
    const {
        i18n,
    } = props;

    return (
        <TopHeader logo="/images/white-logo.svg" small title="Tutellus.io">
            <SecondaryMenu onLanguage={ lang => i18n.changeLanguage(lang) }
                locale={ i18n.language }
            />
        </TopHeader>
    );
};
SimpleHeaderComponent.propTypes = {
    i18n: PropTypes.any,
};
const SimpleHeader = translate()(SimpleHeaderComponent);

const WithHeaderLayout = header_props =>
    <div>
        <SimpleHeader/>
        <Switch>
            <Route exact path='/tokensale'>
                <Redirect to="/join/signup" />
            </Route>
            <Route exact path='/signup'>
                <Redirect to="/join/signup" />
            </Route>
            <Route exact path='/login'>
                <Redirect to="/join/login" />
            </Route>
            <Route exact path='/management' component={withTracker(props =>
                <Management {...props} {...header_props}/>
            )}/>
            <Route path='/dashboard' component={withTracker(props =>
                <Dashboard {...props} {...header_props}/>
            )}/>
            <Route path='/join' component={withTracker(props =>
                <Join {...props} {...header_props}/>
            )}/>
            <Route path='/404' component={withTracker(NoMatch)}/>
            <Route component={NoMatch}/>
        </Switch>
    </div>
;

class Master extends React.Component/*::<void, void>*/ {
    /*:: alertContainer: AlertContainer */
    constructor() {
        super();
        this.showAlert = this.showAlert.bind(this);
    }

    componentDidMount() {
        injectGlobal`${ styles.global }`;
    }

    /*:: showAlert: ({text: void, time: number, type: string, icon: void}) => void */
    showAlert({text, time = ALERT_TIME_MS, type = 'success', icon}) {
        this.alertContainer.show(text, {
            time,
            type,
            icon,
        });
    }

    render() {
        const alertOptions = {
            offset: ALERT_OFFSET,
            position: 'top right',
            theme: 'light',
            time: ALERT_TIME_MS,
            transition: 'scale',
        };

        const all_props = Object.assign({
            showAlert: this.showAlert,
        }, this.props);

        return (
            <div>
                <AlertContainer {...alertOptions} ref={ref => {
                    this.alertContainer = ref;
                }} />
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path='/'
                                component={ withTracker(Home) }/>
                            <Route component={ props =>
                                <WithHeaderLayout {...props} {...all_props}/>
                            } />
                        </Switch>
                    </div>
                </BrowserRouter>
                <FloatingHelp icon="/images/telegram-logo.svg"/>
                <FBTracker id={ this.context.cfg.FBTRACKERID } />
            </div>
        );
    }
}
Master.contextTypes = {
    cfg: PropTypes.any,
};

export default translate()(withAppConfig(Master));
