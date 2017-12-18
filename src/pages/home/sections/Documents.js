//@flow
import React from 'react';
import {
    complement,
    compose,
    find,
    flip,
    isNil,
    prop,
} from 'ramda';
import {translate} from 'react-i18next';
import {
    DocumentList,
    PageSection,
    Text,
} from '../../../components';

const documents = {
    es: {
        Whitepaper: 'http://2tel.us/2BFt4rp',
        "Token Launch": 'http://2tel.us/2BIzEgK',
        'One Pager': 'http://2tel.us/2BDmbXP',
        'Short Deck (english)': 'http://2tel.us/2BFgtEB',
        'Full Deck (english)': 'http://2tel.us/2AToK4q',
        Ayuda: 'http://2tel.us/2AUqc6p',
        Términos: 'https://2tel.us/2iHc8WL',
        "Cómo comprar tokens": 'http://2tel.us/2klVR9N',
    },
    en: {
        Whitepaper: 'http://2tel.us/2AV1dA4',
        "Token Launch": 'http://2tel.us/2AWEZxG',
        'One Pager': 'http://2tel.us/2AVaQP9',
        'Short Deck': 'http://2tel.us/2BFgtEB',
        'Full Deck': 'http://2tel.us/2AToK4q',
        Help: 'http://2tel.us/2BDmx0D',
        Terms: 'https://2tel.us/2B4hWQP',
        "How to buy Tokens (spanish)": 'http://2tel.us/2klVR9N',
    },
};

const documentsForLanguage = flip(prop)(documents);
const hasDocuments = compose(complement(isNil), documentsForLanguage);
const findDocuments = compose(documentsForLanguage, find(hasDocuments));

const DocumentsComponent = ({t, i18n}) =>
    <PageSection title={ t('title') } light>
        <Text center>{ t('description') }</Text>
        <DocumentList documents={ findDocuments(i18n.languages) } />
    </PageSection>;

export const Documents = translate('documents')(DocumentsComponent);
