//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import {unregister} from './registerServiceWorker';
import * as config from './config';

import Master from './Master';

ReactDOM.render(
    <Provider config={config}>
        <Master />
    </Provider>
//$FlowFixMe #root existe
, document.getElementById('root'));

unregister();
