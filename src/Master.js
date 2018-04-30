//@flow
import React from 'react';
import styles from './styles';
import {injectGlobal} from 'styled-components';
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

/*::
type MasterState = {|
    provider?: void,
|}
*/
class Master extends React.Component/*::<void, MasterState>*/ {
    /*:: alertContainer: AlertContainer */
    constructor() {
        super();

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

    render() {
        return (
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
                    <FloatingHelp icon="/images/telegram-logo.svg"/>
                    <FBTracker id={ (this.props/*:any*/).config.cfg.FBTRACKERID } />
                </ScrollToTop>
            </BrowserRouter>
        );
    }
}

export default translate()(inject('config')(observer(Master)));
