import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import {unregister} from './registerServiceWorker';

import Master from './Master';
import store from './models';

ReactDOM.render(
    <Provider store={store}>
        <Master />
    </Provider>, document.getElementById('root'));
unregister();
