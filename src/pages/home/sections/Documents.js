//@flow
import React from 'react';
import styled from 'styled-components';
import {translate} from 'react-i18next';
import styles from '../../../styles';
import {ATracker} from '../../../withTracker';
import {
    PageSection,
    Text,
    ResponsiveGrid,
} from '../../../components';

export const Document = styled(({className, url, id, name, description, cta}) =>
    <li className={ className } >
        <ATracker href={ url }
            target="_blank"
            event= {{
                category: "document",
                action: id,
            }}
        >
            <div>{ name }</div>
            <small>{ description }</small>
            <button>{ cta } </button>
        </ATracker>
    </li>
)`
    background: url('https://lib.tutellus.com/ico/video/background.mp4.jpg') no-repeat;
    background-color: ${ styles.colors.darkblue };
    color: white;
    position: relative;
    overflow: hidden;
    line-height: 1.3em;

    & > a {
        display: grid;
        width: 100%;
        height: 100%;
        padding: 1.2em;
        align-items: center;
        background: rgba(0,0,0,.4);
        & > small {
            display: none;

            @media ${ styles.media.tablet } {
                display: block;
                font-size: .8em;
            }
        }
        & > button {
            display: none;

            @media ${ styles.media.tablet } {
                display: block;
                cursor: pointer;
                background: ${ styles.colors.lightblue };
                font-size: .8em;
                border-radius: 5px;
                padding: 1em;
                margin: 0 auto;
                text-transform: uppercase;
                border: 0;
                color: white;
                width: 100%;
                margin-top: 1em;

                &:before {
                    content: '\\E2C0';
                    font-family: 'Material Icons';
                    display: inline;
                    line-height: 0;
                    color: white;
                    font-size: 1.5em;
                    padding-right: .25em;
                    position: relative;
                    top: .25em;
                }
            }
        }

        &:before {
            content: '\\E2C0';
            font-family: 'Material Icons';
            display: inline-block;
            background: white;
            color: black;
            font-size: 2em;
            padding: .75em;
            margin: 0 -1em;
            position: absolute;
            right: 1em;

            @media ${ styles.media.tablet } {
                display: none;
            }
        }

        @media ${ styles.media.tablet } {
            grid-template-rows: 3em 1fr auto;
        }
    }

    @media ${ styles.media.tablet } {
        text-align: center;
    }
`;
Document.displayName = 'Document';

export const Documents = translate('documents')(styled(({className, id, t}) =>
    <PageSection className={ className } id={ id }
        title={ t('title') } light>
        <Text center>{ t('description') }</Text>
        <ResponsiveGrid>
            {
                JSON.parse(t('documents')).map((name, index) =>
                    <Document key={ index }
                        id={ name }
                        url={ t(`${ name }_url`) }
                        name={ t(`${ name }_name`) }
                        description={ t(`${ name }_description`) }
                        cta={ t('download') }
                    />
                )
            }
        </ResponsiveGrid>
    </PageSection>
)`
    & ${ ResponsiveGrid } {
        @media ${ styles.media.desktop } {
            grid-template-columns: repeat(auto-fit,minmax( 13em,1fr));
        }
    }
`);
