import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import {unregister} from './registerServiceWorker';

import Master from './Master';

import {cfg} from './config';

const db = firebase.initializeApp({
    apiKey: cfg.FIREBASE_APIKEY,
    authDomain: cfg.FIREBASE_AUTHDOMAIN,
    databaseURL: cfg.FIREBASE_DATABASEURL,
    projectId: cfg.FIREBASE_PROJECTID,
    storageBucket: cfg.FIREBASE_STORAGEBUCKET,
    messagingSenderId: cfg.FIREBASE_MESSAGINGSENDERID,
});


ReactDOM.render(<Master db={db}/>, document.getElementById('root'));
unregister();
