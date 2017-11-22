import React from 'react';
import {translate} from 'react-i18next';
import styled from 'styled-components';
import _ from 'lodash';
import {PageTitle, Text, ImageWithPoster, Box, ImageGrid, ColumnCenter} from '../../components';

const LineElement = ({className, label, value}) =>
    <div className={className}><span className="label">{label}:</span><span className="value">{value}</span></div>;

const Line = styled(LineElement)`
    margin-bottom: 0.75em;
    &:last-child{
        margin-bottom: 0;
    }
    > .label {
        margin-right: 0.5em;
    }
    > .value {
        font-weight: bold;
    }
`;

const SummaryElement = props => {
    const {
        user,
        className,
        t,
    } = props;
    console.log('Summary', user);

    const getLastImageUrl = key => {
        const images = _.get(user, key, []);
        return _.get(_.last(images), 'url');
    };
    return (
        <div className = {className} >
            <PageTitle>{t('signup:summary_title')}</PageTitle>
            <Text center>{t('signup:summary_in_review')}</Text>
            <ColumnCenter>
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
                    <ImageGrid>
                        <ImageWithPoster width="170px" height="100px" posterIcon="/images/dni_front.svg" src={getLastImageUrl('identity_front')}/>
                        <ImageWithPoster width="170px" height="100px" posterIcon="/images/dni_back.svg" src={getLastImageUrl('identity_back')}/>
                        <ImageWithPoster width="170px" height="100px" posterIcon="/images/selfie.svg" src={getLastImageUrl('selfie')}/>
                        <ImageWithPoster width="170px" height="100px" posterIcon="/images/doc.svg" src={getLastImageUrl('residency')}/>
                    </ImageGrid>
                </Box>
            </ColumnCenter>
        </div>
    );
};


export default styled(translate()(SummaryElement))`
`;
