//@flow
/* global fetch: false */
/*eslint no-magic-numbers: off*/
import React from 'react';
import PropTypes from 'prop-types';
import {observer, inject} from 'mobx-react';
import {translate} from 'react-i18next';
import styled from 'styled-components';
import {
    PageBanner,
    PageTitle,
    PlayButton,
    Timer,
    ResponsiveGrid,
    SvgFitted,
    JoinICO,
    SectionContent,
} from '../../../components';
import styles from '../../../styles';

const TopPartners = styled(({className}) => {
    const icons_url = 'https://lib.tutellus.com/ico/images/intro-features';
    const images = [
        {name: 'nem', height: 20},
        {name: 'coinsilium', height: 16},
        {name: 'cryptonomos', height: 29},
        {name: 'avolta', height: 28},
        {name: 'users', height: 25},
        {name: 'videos', height: 25},
    ];
    return (
        <ResponsiveGrid className={ className } minWidth="7em">{
            images.map((image, index) =>
                <SvgFitted key={ index }
                           { ...image }
                           src={ `${ icons_url }/${ image.name }.svg` } />
            )
        }</ResponsiveGrid>
    );
})`
    justify-self: normal;

    @media ${ styles.media.tablet } {
        grid-template-columns: repeat(auto-fit,minmax(8.5em, 1fr));
    }

    @media ${ styles.media.laptop } {
        grid-template-columns: repeat(auto-fit,minmax(7em, 1fr));
    }
`;
TopPartners.displayName = 'TopPartners';


const JoinGroup = styled(({className, title, timer_limit, server_time, join_url}) =>
    <div className={ className }>
        <Timer title={ title }
            limit={ timer_limit }
            server_time = { server_time }
        />
        <JoinICO join_url={ join_url }/>
    </div>
)`
    display: grid;
    grid-gap: 1em;
`;
JoinGroup.displayName = 'JoinGroup';

export const ICOIntro = translate('intro')(inject('config')(observer(styled(class extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    getServerTime = async() => {
        const {
            config: {
                servertime_url: url,
            },
         } = this.props;

        return await fetch(url)
        .then(resp => resp.json())
        .then(dates => dates.ms);
    };

    componentWillMount() {
        const {
            t,
        } = this.props;
        this.getServerTime()
        .then(server_time => {
            this.setState({
                server_time: server_time,
                timer_limit: parseInt(t('timer_limit')),
            });
        });
    }

    render() {
        const {
            t,
            className,
            config: {
                cfg: {
                    CRYPTONOMOS_URL: join_url,
                },
            },
        } = this.props;
        const {
            server_time,
            timer_limit,
        } = this.state;

        return (
            <PageBanner className={ className }>
                <PageTitle margin={false}
                    dangerouslySetInnerHTML={ {__html: t("title")} } />
                <PlayButton video={ t('video_url') } />
                <JoinGroup title={ t('timer_title') }
                    server_time={ server_time }
                    timer_limit={ timer_limit }
                    join_url= { join_url }/>
                <TopPartners/>
            </PageBanner>
        );
    }
})`
    @media ${ styles.media.tablet } {
        & > ${ SectionContent } {
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 1.5em;
        }
        & ${ PageTitle }{
            grid-column-start: 1;
        }
        & ${ PlayButton }{
            grid-column-start: 1;
        }
        & ${ JoinGroup } {
            grid-row: 1 / span 2;
            grid-column-start: 2;
        }
        & ${ TopPartners } {
            grid-column: 1 / -1;
        }
    }
`)));
ICOIntro.displayName = 'ICOIntro';
ICOIntro.propTypes = {
    t: PropTypes.func,
};
