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

export const ICOIntro = translate('intro')(inject('config')(observer(class extends React.Component {
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
        } = this.props;
        const {
            server_time,
            timer_limit,
        } = this.state;

        return (
            <PageBanner>
                <PageTitle margin={false}
                    dangerouslySetInnerHTML={ {__html: t("title")} } />
                <PlayButton video={ t('video_url') } />
                <Timer title={ t('timer_title') }
                    limit={ timer_limit }
                    server_time = { server_time }
                />
                <TopPartners/>
            </PageBanner>
        );
    }
})));
ICOIntro.displayName = 'ICOIntro';
ICOIntro.propTypes = {
    t: PropTypes.func,
};
