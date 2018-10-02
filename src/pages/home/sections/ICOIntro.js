//@flow
/*eslint no-magic-numbers: off*/
import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import {translate} from 'react-i18next';
import styled from 'styled-components';
import {
    PageBanner,
    PageTitle,
    SectionContent,
    ResponsiveIFrame,
    ProgressLiquidBubble,
} from '../../../components';

import styles from '../../../styles';

const ProgressBlock = styled.div`
    display: grid;
    grid-gap: 1em;
`;

export const ICOIntro = translate('intro')(observer(styled(({className, t}) =>
    <PageBanner className={ className }>
        <ProgressBlock>
            <PageTitle margin={false}
                dangerouslySetInnerHTML={ {__html: t("title")} } />
            <ProgressLiquidBubble progress={ 33 } concept={ t('concept') }/>
        </ProgressBlock>
        <ResponsiveIFrame video={ t('video_url') }/>
    </PageBanner>
)`
    @media ${ styles.media.tablet } {
        & > ${ SectionContent } {
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 1em;
            align-items: center;
        }
    }
`));

ICOIntro.displayName = 'ICOIntro';
ICOIntro.propTypes = {
    t: PropTypes.func,
};
