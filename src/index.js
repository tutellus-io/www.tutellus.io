import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';

import Master from './Master';

const db = firebase.initializeApp({
    apiKey: "AIzaSyADJxoagH6SeCzyBLan77tgUgjR9FiJSb8",
    authDomain: "tutellus-ico-development.firebaseapp.com",
    databaseURL: "https://tutellus-ico-development.firebaseio.com",
    projectId: "tutellus-ico-development",
    storageBucket: "tutellus-ico-development.appspot.com",
    messagingSenderId: "430987029164",
});

ReactDOM.render(<Master db={db}/>, document.getElementById('root'));
registerServiceWorker();
