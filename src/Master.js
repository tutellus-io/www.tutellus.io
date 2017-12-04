//@flow
import React from 'react';
import styles from './styles';
import {injectGlobal} from 'styled-components';
import AlertContainer from 'react-alert';
import {translate} from 'react-i18next';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import withTracker from './withTracker';

import {Home, Signup, Management, Login, Dashboard, NoMatch} from './pages';
import {
    FBTracker,
    TopHeader,
    SecondaryMenu,
} from './components';

import './i18n';
import {social_links} from './config';

const ALERT_TIME_MS = 5000;
const ALERT_OFFSET = 20;

const SimpleHeader = translate()(props => {
    const {
        i18n,
    } = props;

    return (
        <TopHeader logo="/images/white-logo.svg" small title="Tutellus.io">
            <SecondaryMenu onLanguage={ lang => i18n.changeLanguage(lang) }
                socialLinks={ social_links }
                locale={ i18n.language }
            />
        </TopHeader>
    );
});

const WithHeaderLayout = header_props =>
    <div>
        <SimpleHeader/>
        <Switch>
            <Route exact path='/signup' component={withTracker(props =>
                <Signup {...props} {...header_props}/>
            )}/>
            <Route exact path='/management' component={withTracker(props =>
                <Management {...props} {...header_props}/>
            )}/>
            <Route exact path='/dashboard' component={withTracker(props =>
                <Dashboard {...props} {...header_props}/>
            )}/>
            <Route exact path='/login' component={withTracker(props =>
                <Login {...props} {...header_props}/>
            )}/>
            <Route path='/404' component={withTracker(NoMatch)}/>
            <Route component={NoMatch}/>
        </Switch>
    </div>;

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

        const fb_tracker_id = ((process.env/*:any*/).REACT_APP_FBTRACKERID/*:string*/);

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
                <FBTracker id={ fb_tracker_id } />
            </div>
        );
    }
}

export default translate()(Master);
