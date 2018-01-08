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
        Whitepaper: {
            description: 'Detalle completo de tokens, negocio y gobernanza',
            url: 'http://2tel.us/2BFt4rp',
        },
        "Token Launch": {
            description: 'Características de la preICO e ICO',
            url: 'http://2tel.us/2BIzEgK',
        },
        'One Pager': {
            description: 'Síntesis del negocio y la ICO',
            url: 'http://2tel.us/2BDmbXP',
        },
        'Short Deck (english)': {
            description: 'Presentación de la compañía',
            url: 'http://2tel.us/2BFgtEB',
        },
        'Full Deck (english)': {
            description: 'Presentación completa de compañía e ICO',
            url: 'http://2tel.us/2AToK4q',
        },
        Ayuda: {
            description: 'Repositorio de Preguntas Más Frecuentes',
            url: 'http://2tel.us/2AUqc6p',
        },
        Términos: {
            description: 'Términos y Condiciones de la Token Sale',
            url: 'https://2tel.us/2iHc8WL',
        },
        "Cómo comprar tokens": {
            description: 'Manual para iniciarse',
            url: 'http://2tel.us/2klVR9N',
        },
    },
    en: {
        Whitepaper: {
            description: 'Full detail of tokens, business and governance',
            url: 'http://2tel.us/2AV1dA4',
        },
        "Token Launch": {
            description: 'Characteristics of preSales and ICO',
            url: 'http://2tel.us/2AWEZxG',
        },
        'One Pager': {
            description: 'Shynthesis of Business and ICO',
            url: 'http://2tel.us/2AVaQP9',
        },
        'Short Deck': {
            description: 'Presentation of the company',
            url: 'http://2tel.us/2BFgtEB',
        },
        'Full Deck': {
            description: 'Full presentation of company & ICO',
            url: 'http://2tel.us/2AToK4q',
        },
        Help: {
            description: 'FAQ (Frequented Asked Questions) repository',
            url: 'http://2tel.us/2BDmx0D',
        },
        Terms: {
            description: 'Terms and Conditions of Token Sale',
            url: 'https://2tel.us/2B4hWQP',
        },
        "How to buy Tokens": {
            description: 'Guide for dummies',
            url: 'http://2tel.us/2lJcYDg',
        },
    },
};

const documentsForLanguage = flip(prop)(documents);
const hasDocuments = compose(complement(isNil), documentsForLanguage);
const findDocuments = compose(documentsForLanguage, find(hasDocuments));

const DocumentsComponent = ({id, t, i18n}) =>
    <PageSection id={ id } title={ t('title') } light>
        <Text center>{ t('description') }</Text>
        <DocumentList documents={ findDocuments(i18n.languages) } />
    </PageSection>;

export const Documents = translate('documents')(DocumentsComponent);
