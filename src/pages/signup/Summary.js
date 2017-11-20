import React from 'react';
import {translate} from 'react-i18next';
import styled from 'styled-components';
import {PageTitle, Text} from '../../components';

const BoxTitle = styled.h3`
    font-weight: bold;
    font-size: 1.1em;
    text-align: center;
`;

const InnerBox = styled.div`
    border: 2px solid #DBDBDB;
    background-color: #EFEFEF;
    padding: 1.75em;
`;

const Box = (props) =>
    <div>
        <BoxTitle>{props.title}</BoxTitle>
        <InnerBox>
            {props.children}
        </InnerBox>
    </div>;

const Line = ({label, value}) =>
    <div><strong>{label}</strong>: {value}</div>;

const SummaryElement = (props) => {
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
            <Box title={t('signup:summary_profile_title')}>
                <Line label={t('signup:summary_first_name_label')} value={user.first_name}/>
                <Line label={t('signup:summary_last_name_label')} value={user.last_name}/>
                <Line label={t('signup:summary_email_label')} value={user.email}/>
            </Box>
            <Box title={t('signup:summary_wallet_title')}>
                <Line label={t('signup:summary_wallet_address_label')} value={user.eth_adress}/>
                <Line label={t('signup:summary_wallet_contribution_label')} value={user.eth_contribution}/>
            </Box>
            <Box title={t('signup:summary_identity_title')}>

            </Box>
        </div>
    );
};


export default styled(translate()(SummaryElement))`
`;
