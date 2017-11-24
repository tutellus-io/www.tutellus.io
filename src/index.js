import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';

import Master from './Master';

const db = firebase.initializeApp({
    apiKey: "AIzaSyB5KQp2UxY88zzPCBQfqwlE83xBuduArJ8",
    authDomain: "tutellus-ico-production.firebaseapp.com",
    databaseURL: "https://tutellus-ico-production.firebaseio.com",
    projectId: "tutellus-ico-production",
    storageBucket: "tutellus-ico-production.appspot.com",
    messagingSenderId: "732584545649",
});


ReactDOM.render(<Master db={db}/>, document.getElementById('root'));
registerServiceWorker();
