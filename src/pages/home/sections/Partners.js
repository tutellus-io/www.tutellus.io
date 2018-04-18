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

const partnerGrid = `
    display: grid;
    grid-template-rows: 3.5em;
    font-size: 1em;
    align-items: center;
    justify-items: center;
`;
const CardHidden = styled.div`
    transition: all 0.4s linear;
    position: absolute;
    z-index: 1000;
    border-radius: 5px;
    top: 0;
    left: 0;
    overflow: hidden;
    background-color: white;
    color: ${ styles.colors.dark };

    ${ partnerGrid }

    & > p {
        margin-top: -0.5em;
        padding: 1em;
        font-size: 0.9em;
        line-height: 1.4em;
        align-self: start;
    }
`;

const Partner = styled(({className, onClick, src, name, height, children}) =>
    <li className={ className } onClick={ onClick }>
        <LazyImage offset={ 500 } src={ src } height={ parseInt(height) } alt={name}/>
        <CardHidden>
            <LazyImage offset={ 500 } src={ src } height={ parseInt(height) } alt={name}/>
            <p>
                {children}
            </p>
        </CardHidden>
    </li>
)`
    position: relative;
    transition: all 0.4s linear;
    ${ partnerGrid }
    cursor: pointer;

    & ${ CardHidden } {
        opacity: 0;
        height: 100%;
    }

    &:hover ${ CardHidden } {
        opacity: 1;
        height: auto;
    }
`;
Partner.displayName = 'Partner';

const ImgUni = styled(LazyImage)`
    max-width: 100%;
    width: 100%;
`;

const universities_url = "//lib.tutellus.com/ico/images/partners/universities.png";

export const Partners = translate('partners')(styled(({t, className}) =>
    <PageSection className={ className } light
        title={ t('title') }>
        <Text center>{ t('description') }</Text>
        <ResponsiveGrid className={ className }
            gap="1em 2em">
            {
                JSON.parse(t('top')).map((name, index) =>
                    <Partner key={ index }
                        height={ t(`${ name }_height`) }
                        name={ t(`${ name }_name`) }
                        src={ t(`${ name }_logo`) }>
                        { t(`${ name }_description`) }
                    </Partner>
                )
            }
        </ResponsiveGrid>
        <ImgUni src={universities_url} alt=""/>
    </PageSection>
)`
    & ${ ResponsiveGrid } {
        margin-bottom: 1em;
        @media ${ styles.media.tablet } {
            margin-bottom: 3em;
        }

        @media ${ styles.media.laptop } {
            grid-template-columns: repeat(auto-fit, minmax(12em, 1fr));
        }
    }

    & ${ ImgUni }{
        max-width: 100%;
        width: 100%;
        display: none;
        @media ${ styles.media.tablet } {
            display: block;
        }
    }
`);
