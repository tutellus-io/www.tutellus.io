import * as React from 'react';
import {observer, inject} from 'mobx-react';
import styles from '../../styles';
import {
    PageSection,
    Gallery,
    ViewField,
    Box,
    BoxTitle,
    Icon,
    FlexCenter,
    Text,
    ColumnCenter,
} from '../../components';

export const Summary = inject('store')(observer(({store, t, className}) => {
    const backer_data = store.backer.getValues();

    return (
        <PageSection className = {className}>
            <ColumnCenter>
                <BoxTitle margin="0 0 1em 0">{t('signup:summary_title')}</BoxTitle>
                <Box title={
                    <div>
                        <Icon name="info_outline"
                            size="1.8em" margin="0 0.25em 0 0"
                            color={styles.colors.emerald}/>
                        <span>{t('signup:summary_alert_title')}</span></div>
                }>
                    <Text dangerouslySetInnerHTML={ {__html: t('signup:summary_alert')} }/>
                </Box>

                <ViewField value={backer_data.first_name} label={ {
                    required: "required",
                    value: t('signup:signup_first_name_label'),
                } }/>
                <ViewField value={backer_data.last_name} label={ {
                    required: "required",
                    value: t('signup:signup_last_name_label'),
                } }/>
                <ViewField value={backer_data.email} label={ {
                    required: "required",
                    value: t('signup:signup_email_label'),
                } }/>
                <ViewField value={backer_data.eth_adress} label={ {
                    required: "required",
                    value: t('signup:wallet_eth_address_label'),
                } }/>

                <BoxTitle margin="0 0 0.5em 0">{t('signup:identity_proof_identity_title')}</BoxTitle>
                <Text center>{t('signup:identity_proof_identity_requirements')}</Text>
                <FlexCenter margin="0 0 0.5em 0">
                    <Gallery one_image={true}
                        images={backer_data.identity_front}/>
                    <Gallery one_image={true}
                        images={backer_data.identity_back}/>
                </FlexCenter>
                <BoxTitle margin="0 0 0.5em 0">{t('signup:identity_proof_selfie_title')}</BoxTitle>
                <Text center>{t('signup:identity_proof_selfie_requirements')}</Text>
                <FlexCenter margin="0 0 0.5em 0">
                    <Gallery one_image={true}
                        images={backer_data.selfie}/>
                </FlexCenter>
                <BoxTitle margin="0 0 0.5em 0">{t('signup:identity_proof_residency_title')}</BoxTitle>
                <Text center>{t('signup:identity_proof_residency_requirements')}</Text>
                <FlexCenter margin="0 0 0.5em 0">
                    <Gallery one_image={true}
                        images={backer_data.residency}/>
                </FlexCenter>
            </ColumnCenter>
        </PageSection>
    );
}));
