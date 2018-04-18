//@flow
import React from 'react';
import {translate} from 'react-i18next';
import styled from 'styled-components';
import {styles} from '../../../styles';
import {
    PageSection,
    Text,
    ResponsiveGrid,
    UserGroup,
    BulletList,
} from '../../../components';

export const PlatformBenefits = translate('the_benefits')(styled(({className, t, id}) => {
    const composeRows = name =>
        [0, 1].map((row, index2) =>
            <li key={index2}>
                { t(`${ name }_feature_${ row }`) }
            </li>
        );

    return (
        <PageSection className={ className } id={ id } title={ t('title') }>
            <Text center>{ t('description') }</Text>

            <ResponsiveGrid>
                {
                    JSON.parse(t('benefits')).map((name, index) =>
                        <UserGroup key={ index }
                            name={ t(`${ name }_title`) }
                            icon={ t(`${ name }_icon`) }>
                            <BulletList>
                                { composeRows(name) }
                            </BulletList>
                        </UserGroup>
                    )
                }
            </ResponsiveGrid>
        </PageSection>
    );
})`
    & ${ ResponsiveGrid } {
        & ${ BulletList } {
            display: table;
            margin: 0 auto;
            & > li {
                display: table-row;
            }
        }
        @media ${ styles.media.tablet } {
            grid-template-columns: repeat(auto-fit, minmax( 15em,1fr));
        }

        @media ${ styles.media.laptop } {
            grid-template-columns: repeat(auto-fit, minmax( 11em,1fr));

            & ${ BulletList } {
                font-size: 0.85em;
            }
        }

        @media ${ styles.media.desktop } {
            & ${ BulletList } {
                font-size: 0.9em;
            }
        }
    }
`);
export default PlatformBenefits;
