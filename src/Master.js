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
    BrowserModal,
} from './components';

import i18next from './i18n';

/*::
type MasterState = {|
    provider?: void,
|}

type MasterProps = {|
    config: any,
|}
*/
class Master extends React.Component/*::<MasterProps, MasterState>*/ {
    constructor() {
        super();

        this.setProvider = this.setProvider.bind(this);
        this.state = {provider: undefined};

        i18next.on('loaded_from', this.setProvider);
    }

    /*:: setProvider: string => void */
    setProvider(provider) {
        this.setState({provider});
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
        const {
            config: {
                cfg: {
                    FBTRACKERID: fb_tracker_id,
                },
            },
        } = this.props;
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
                    <FloatingHelp icon="//lib.tutellus.com/ico/images/telegram-logo.svg"/>
                    <FBTracker id={ fb_tracker_id } />
                    <BrowserModal />
                </ScrollToTop>
            </BrowserRouter>
        );
    }
}

export default translate()(inject('config')(observer(Master)));
