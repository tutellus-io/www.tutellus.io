//@flow
/*eslint id-length: off*/
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {reactI18nextModule} from 'react-i18next';

import * as en from './en';
import * as es from './es';

console.log(JSON.stringify(es, null, 2));
i18next
.use(LanguageDetector)
.use(reactI18nextModule)
.init({
    debug: true,
    resources: {
        en,
        es,
    },
});

export default i18next;
