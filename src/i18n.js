//@flow
/*eslint id-length: off*/
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Cache from 'i18next-localstorage-cache';
import {reactI18nextModule} from 'react-i18next';
import firebase from './models/firebase';

const loadLng = async lng => {
    const snapshot = await firebase.database().ref(`/locales/${ lng }`).once('value');
    return snapshot.val();
};

const load_from_storage = lng => {
    try {
        const str_res /*:string*/ = localStorage.getItem(`i18next_res_${ lng }`) || "{}";
        return JSON.parse(str_res);
    } catch (ex) {
        return {};
    }
};

const i18nextConfig = () => {
    const en = load_from_storage('en');
    const es = load_from_storage('es');

    i18next
    .use(LanguageDetector)
    .use(Cache)
    .use(reactI18nextModule)
    .init({
        debug: false,
        fallbackLng: 'en',
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

    if (Object.keys(en || {}).length > 0) {
        setTimeout(()=> i18next.emit('loaded_from', 'localStorage'), 0);
    }

    return i18next;
};

const i18n = i18nextConfig();

Promise.all([
    loadLng('es'),
    loadLng('en'),
])
.then(([es, en]) => {
    Object.keys(en).forEach(key => {
        i18n.addResources('es', key, es[key]);
        i18n.addResources('en', key, en[key]);
    });
    i18n.emit('loaded_from', 'remote');
});

export default i18n;
