//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import {unregister} from './registerServiceWorker';
import * as config from './config';

import Master from './Master';
import store from './models';

ReactDOM.render(
    <Provider store={store} config={config}>
        <Master />
    </Provider>, document.getElementById('root'));
unregister();
