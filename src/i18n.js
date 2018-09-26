//@flow
/*eslint id-length: off*/
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Cache from 'i18next-localstorage-cache';
import {reactI18nextModule} from 'react-i18next';
// import * as hash from 'json-hash';
// import {get} from 'lodash';

import bundled_i18n from './i18n.json';

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

const i18n = i18nextConfig();

export default i18n;
