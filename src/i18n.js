//@flow
/*eslint id-length: off*/
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Cache from 'i18next-localstorage-cache';
import {reactI18nextModule} from 'react-i18next';
import * as hash from 'json-hash';

import firebase from './models/firebase';
import {es, en} from './i18n.json';

const loadLng = async lng => {
    const snapshot = await firebase.database().ref(`/locales/${ lng }`).once('value');
    return snapshot.val();
};

const i18nextConfig = () => {
    i18next
    .use(LanguageDetector)
    .use(Cache)
    .use(reactI18nextModule)
    .init({
        debug: false,
        fallbackLng: 'en',
        defaultNS: 'translation',
        resources: {
            en,
            es,
        },
        cache: {
            enabled: true,
            //10 min tiempo de expiración
            expirationTime: 10 * 60 * 1000, //eslint-disable-line no-magic-numbers
        },
        react: {
            wait: false,
            bindI18n: 'languageChanged loaded',
            bindStore: 'added removed',
            nsMode: 'default',
        },
    });

    return i18next;
};

const i18n = i18nextConfig();

Promise.all([
    loadLng('es'),
    loadLng('en'),
])
.then(([remote_es, remote_en]) => {
    const local_hash = hash.digest({es, en});
    const remote_hash = hash.digest({es: remote_es, en: remote_en});
    if (remote_hash === local_hash) {
        return;
    }

    Object.keys(remote_en).forEach(key => {
        i18n.addResources('es', key, remote_es[key]);
        i18n.addResources('en', key, remote_en[key]);
    });
    i18n.emit('loaded_from', 'remote');
});

export default i18n;
