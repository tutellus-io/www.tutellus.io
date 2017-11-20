import React from 'react';
import styles from './styles';
import {injectGlobal} from 'styled-components';
import AlertContainer from 'react-alert';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {Home, Signup, Management, Login, Dashboard, NoMatch} from './pages';

import './i18n';

const ALERT_TIME_MS = 5000;
const ALERT_OFFSET = 20;

class Master extends React.Component {
    constructor() {
        super();
        this.showAlert = this.showAlert.bind(this);
    }

    componentDidMount() {
        injectGlobal`${ styles.global }`;
    }

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
                <AlertContainer {...alertOptions} ref={(ref) => {
                    this.alertContainer = ref;
                }} />
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={ Home }/>
                        <Route exact path='/signup' component={(props) =>
                            <Signup {...props} {...all_props}/>
                        }/>
                        <Route exact path='/management' component={(props) =>
                            <Management {...props} {...all_props}/>
                        }/>
                        <Route exact path='/dashboard' component={(props) =>
                            <Dashboard {...props} {...all_props}/>
                        }/>
                        <Route exact path='/login' component={(props) =>
                            <Login {...props} {...all_props}/>
                        }/>
                        <Route path='/404' component={NoMatch}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Master;
