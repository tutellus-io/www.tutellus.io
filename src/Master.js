//@flow
import React from 'react';
import styles from './styles';
import {injectGlobal} from 'styled-components';
import AlertContainer from 'react-alert';
import {translate} from 'react-i18next';
import {observer, inject} from 'mobx-react';

import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import withTracker from './withTracker';
import ScrollToTop from './ScrollToTop';

import {
    Home,
    Ambassadors,
    NoMatch,
} from './pages';

import {
    FBTracker,
    FloatingHelp,
} from './components';

import i18next from './i18n';

const ALERT_TIME_MS = 5000;
const ALERT_OFFSET = 20;

/*::
type MasterState = {|
    provider?: void,
|}
*/
class Master extends React.Component/*::<void, MasterState>*/ {
    /*:: alertContainer: AlertContainer */
    constructor() {
        super();

        this.showAlert = this.showAlert.bind(this);
        this.setProvider = this.setProvider.bind(this);
        this.state = {provider: undefined};
    }

    /*:: setProvider: string => void */
    setProvider(provider) {
        this.setState({provider});
    }

    componentWillMount() {
        i18next.on('loaded_from', this.setProvider);
    }

    componentWillUnmount() {
        i18next.off('loaded_from', this.setProvider);
    }

    shouldComponentUpdate(newPprops, newState) {
        return newState.provider !== this.state.provider;
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

        return (
            <div>
                <AlertContainer {...alertOptions} ref={ref => {
                    this.alertContainer = ref;
                }} />
                <BrowserRouter>
                    <ScrollToTop>
                        <Switch>
                            <Route exact path='/'
                                component={ withTracker(Home) }/>
                            <Route exact path='/ambassadors'
                                component={ withTracker(Ambassadors) }/>
                            <Route path='/404' component={withTracker(NoMatch)}/>
                            <Route component={NoMatch}/>
                        </Switch>
                    </ScrollToTop>
                </BrowserRouter>
                <FloatingHelp icon="/images/telegram-logo.svg"/>
                <FBTracker id={ (this.props/*:any*/).config.cfg.FBTRACKERID } />
            </div>
        );
    }
}

export default translate()(inject('config')(observer(Master)));
