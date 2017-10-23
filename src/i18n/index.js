//@flow
/*eslint id-length: off*/
import i18next from 'i18next';
import en from './en';
import es from './es';

i18next.init({
    lng: 'en',
    debug: true,
    resources: {
        en,
        es,
    },
});

export default i18next;
