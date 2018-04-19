//@flow
/*eslint id-length: off*/
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Cache from 'i18next-localstorage-cache';
import {reactI18nextModule} from 'react-i18next';
import * as hash from 'json-hash';
import {get} from 'lodash';

import firebase from './models/firebase';
import bundled_i18n from './i18n.json';

const loadLng = async() => {
    const snapshot = await firebase.database().ref('/locales/').once('value');
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
        resources: bundled_i18n,
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

const sameObject = (obj_1, obj_2) => {
    const hash_1 = hash.digest(obj_1);
    const hash_2 = hash.digest(obj_2);
    return hash_1 === hash_2;
};

const i18n = i18nextConfig();

const loadRemotei18n = (remote_i18n, lang) => {
    if (!sameObject(bundled_i18n[lang], remote_i18n[lang])) {
        Object.keys(remote_i18n[lang]).forEach(key => {
            if (!sameObject(get(bundled_i18n[lang], key), remote_i18n[lang][key])) {
                i18n.addResources(lang, key, remote_i18n[lang][key]);
            }
        });
    }
};

loadLng()
.then(remote_i18n => {
    Object.keys(remote_i18n)
    .forEach(lang => loadRemotei18n(remote_i18n, lang));
    i18n.emit('loaded_from', 'remote');
});

export default i18n;
