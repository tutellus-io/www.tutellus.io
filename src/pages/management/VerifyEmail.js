//@flow
import * as React from 'react';
import {
    SectionTitle,
    Text,
    ColumnCenter,
    LinkButton,
    PageContent,
} from '../../components';

/*::
type TranslateFn = (string => string)
type VerifyProps = {|
    t: TranslateFn,
    className: string,
|}
*/

export const EmailVerified = ({className, t}/*: VerifyProps */) =>
    <PageContent className={className}>
        <SectionTitle>{t('signup:verified_title')}</SectionTitle>
        <ColumnCenter>
            <Text center>{t('signup:verified_text')}</Text>
        </ColumnCenter>
    </PageContent>
;

export const EmailNotVerified = ({className, t}/*: VerifyProps */) =>
    <PageContent className={className}>
        <SectionTitle>{t('signup:not_verified_title')}</SectionTitle>
        <ColumnCenter>
            <Text center>{t('signup:not_verified_text')}</Text>
            <LinkButton to="/signup" full>{t('signup:not_verified_link')}</LinkButton>
        </ColumnCenter>
    </PageContent>
;
