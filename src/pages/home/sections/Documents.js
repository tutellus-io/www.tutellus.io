//@flow
import React from 'react';
import {inject, observer} from 'mobx-react';
import {translate} from 'react-i18next';
import {
    DocumentList,
    PageSection,
    Text,
} from '../../../components';

const DocumentsComponent = inject('store')(observer(({id, store, t}) => {
    const docs = store.config.documents;
    const are_docs_loading = store.config.isStorageLoading();
    return (
        <PageSection id={ id } title={ t('title') } light>
            <Text center>{ t('description') }</Text>
            <DocumentList loading={ are_docs_loading } documents={ docs.toJSON() } />
        </PageSection>
    );
}));

export const Documents = translate('documents')(DocumentsComponent);
