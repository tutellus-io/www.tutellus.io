import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import {unregister} from './registerServiceWorker';

import Master from './Master';

const db = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
});


ReactDOM.render(<Master db={db}/>, document.getElementById('root'));
unregister();
