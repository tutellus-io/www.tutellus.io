//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {PageContent, SectionTitle, ColumnCenter, Text, LinkButton} from '../components';

export const NoMatchElement = ({className, t}/*:{className: string, t: (string => string)}*/) =>
    <PageContent className= {className}>
        <SectionTitle>{ t('signup:404_title') }</SectionTitle>
        <ColumnCenter>
            <Text center>{t('signup:404_text')}</Text>
            <LinkButton to="/" full>{t('signup:404_link')}</LinkButton>
        </ColumnCenter>
    </PageContent>
;

export const NoMatch = translate()(NoMatchElement);
