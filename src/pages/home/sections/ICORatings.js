//@flow
import React from 'react';
import {translate} from 'react-i18next';
import styled from 'styled-components';
import {styles} from '../../../styles';
import {
    PageSection,
    Text,
    ResponsiveGrid,
    LazyImage,
} from '../../../components';

const SplitGradient = styled.div`
    height: 100%;
    width: 100%;
    background-image: linear-gradient(#33596a, #15c1ce);
`;

const Rating = styled(({className, url, icon, name, height, rate}) =>
    <li className={ className }>
        <a href={ url } target="_blank">
            <LazyImage offset={ 500 } src={ icon } height={ parseInt(height) } alt={name}/>
            <SplitGradient/>
            <div>{ rate }</div>
        </a>
    </li>
)`
    background-color: white;
    padding: 1em 0.5em;
    height: 5em;
    & a {
        display: grid;
        grid-template-columns: 7fr 2px 3fr;
        font-size: 1em;
        align-items: center;
        justify-items: center;
        cursor: pointer;
        height: 100%;
    }
    & div {
        font-weight: 700;
        font-size: 1.5em;
    }
`;
Rating.displayName = 'Rating';

export const ICORatings = translate('ratings')(styled(({t, className}) =>
    <PageSection className={ className } light
        title={ t('title') }>
        <Text center>{ t('description') }</Text>
        <ResponsiveGrid gap="0.4em" minWidth="10em">
            {
                JSON.parse(t('order')).map((name, index) =>
                    <Rating key={ index }
                        height={ t(`${ name }_height`) }
                        name={ name }
                        url={ t(`${ name }_url`) }
                        icon={ t(`${ name }_icon`) }
                        rate={ t(`${ name }_rate`) }
                    />
                )
            }
        </ResponsiveGrid>
    </PageSection>
)`
    & ${ ResponsiveGrid } {
        @media ${ styles.media.desktop } {
            grid-template-columns: repeat(auto-fit, minmax(13em, 1fr));
        }
    }
    & ${ Rating } {
        padding: 0.5em;
        font-size: 0.7em;
        height: 6em;
        @media ${ styles.media.tablet } {
            padding: 1em 0.5em;
            font-size: 0.9em;
            height: 5.5em;
        }
        @media ${ styles.media.laptop } {
            font-size: 1em;
            height: 5em;
        }
    }
`);