import React from 'react';
import {translate} from 'react-i18next';
import styled from 'styled-components';
import {PageTitle, Text, ImageWithPoster, Box} from '../../components';

const Line = ({label, value}) =>
    <div><strong>{label}</strong>: {value}</div>;

const SummaryElement = props => {
    const {
        user,
        className,
        t,
    } = props;
    console.log('Summary', user);
    return (
        <div className = {className} >
            <PageTitle>{t('signup:summary_title')}</PageTitle>
            <Text>{t('signup:summary_in_review')}</Text>
            <Box preTitle={t('signup:summary_profile_title')}>
                <Line label={t('signup:summary_first_name_label')} value={user.first_name}/>
                <Line label={t('signup:summary_last_name_label')} value={user.last_name}/>
                <Line label={t('signup:summary_email_label')} value={user.email}/>
            </Box>
            <Box preTitle={t('signup:summary_wallet_title')}>
                <Line label={t('signup:summary_wallet_address_label')} value={user.eth_adress}/>
                <Line label={t('signup:summary_wallet_contribution_label')} value={user.eth_contribution}/>
            </Box>
            <Box preTitle={t('signup:summary_identity_title')}>
                <ImageWithPoster width="170px" height="100px" posterIcon="/images/dni_front.svg"/>
                <ImageWithPoster width="170px" height="100px" posterIcon="/images/dni_back.svg"/>
                <ImageWithPoster width="170px" height="100px" posterIcon="/images/selfie.svg"/>
                <ImageWithPoster width="170px" height="100px" posterIcon="/images/doc.svg"/>
            </Box>
        </div>
    );
};


export default styled(translate()(SummaryElement))`
`;
