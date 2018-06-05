//@flow
/* eslint no-magic-numbers: off */
import React from 'react';
import {translate} from 'react-i18next';
import styled from 'styled-components';

import {
    SectionTitle,
    LazyImage,
    PageSection,
    Text,
    Roadshow,
    ImageCarousel,
    ResponsiveGrid,
} from '../../../components';

const Channel = styled(({className, url, name, icon}) =>
    <li className={ className } >
        <a target="_blank" href={ url }>
            <LazyImage src={ icon } alt={ name }/>
            <div>{ name }</div>
        </a>
    </li>
)`
    & a {
        display: grid;
        grid-template-columns: 3fr 7fr;
        grid-gap: 0.5em;
        align-items: center;
    }

    & img {
        display: block;
        max-width: 100%;
        min-width: 100%;
    }
`;

const PoweredTelegram = styled(SectionTitle)`
    font-size: 1.3em;
    text-transform: none;
    margin-bottom: 0;
    & > img {
        width: 1.5em;
        margin-bottom: -0.4em;
    }
`;

const TelegramSection = translate('telegram')(styled(({className, t}) =>
    <div className={ className }>
        <SectionTitle>{ t('title') }</SectionTitle>
        <Text center>{ t('description') }</Text>
        <ResponsiveGrid minWidth="8em" gap="1.5em 1em">
            {
                JSON.parse(t('channels')).map(channel =>
                    <Channel key={ channel }
                        url={ t(`${ channel }_url`) }
                        icon={ t(`${ channel }_icon`) }
                        name={ t(`${ channel }_name`) }
                    />
                )
            }
        </ResponsiveGrid>
        <PoweredTelegram dangerouslySetInnerHTML={ {__html: t("powered")} } />
    </div>
)`
    padding-top: 3em;

    & > ${ ResponsiveGrid } {
        padding-bottom: 2.5em;
    }
`);

const Carousel = styled(ImageCarousel)`
    margin-top: 1.5em;
`;

export const TheRoadshow = translate('roadshow')(({t, id}) =>
    <PageSection darker id={ id } title={ t('title') }>
        <Text center>{ t('description') }</Text>
        <Roadshow events={ JSON.parse(t('events')).map(event => ({
            id: event,
            address: t(`${ event }_address`),
            date: t(`${ event }_date`),
            end_date: t(`${ event }_end_date`),
            description: t(`${ event }_description`),
            place: t(`${ event }_place`),
            title: t(`${ event }_title`),
            url: t(`${ event }_url`),
        })) } />
        <Carousel slidesToShow={ 3 } images={ JSON.parse(t('pics')) } />
        <TelegramSection/>
    </PageSection>
);
