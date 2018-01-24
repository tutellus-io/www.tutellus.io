//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import {
    ColumnCenter,
    PageContent,
} from '../../components';
import styled from 'styled-components';
import styles from '../../styles';
import {translate} from 'react-i18next';
import {observer, inject} from 'mobx-react';
import {
    Switch,
    Redirect,
    Route,
} from 'react-router-dom';

import {LoginForm} from './LoginForm';
import {SignupForm} from './SignupForm';

/*::
type JoinProps = {|
    className?: string,
    store: any,
|}
*/
const JoinElement = inject('store')(observer(props => {
    const {
        className,
        store,
    } = props;

    return (
        <PageContent className = {className}>
            <img src="/images/color-logo.svg" alt="Tutellus"/>
            {
                store.logged
                    ? <Redirect to="/dashboard/home"/>
                    : <Switch>
                        <Route exact path="/join/login" render={ () =>
                            <LoginForm { ...props } onSubmit={store.login}/>
                        } />
                        <Route exact path="/join/signup" render={ () =>
                            <SignupForm { ...props } />
                        } />
                    </Switch>
            }
        </PageContent>
    );
}));


export const Join/*:ComponentType<JoinProps>*/ = translate('signup')(styled(JoinElement)`
    padding-top: 4em;
    & > img {
        display: block;
        width: 50%;
        max-width: 20em;
        margin: 0 auto;
        margin-top: 4em;
    }
    & > ${ ColumnCenter } {
        max-width: 20em;
        margin: 0 auto;
        margin-top: 1em;
    }
    & .login {
        margin-top: 10px;
        font-weight: 200;
        > a {
            color : ${ styles.colors.emerald };
            &:hover {
                text-decoration: underline
            }
        }
    }
`);
