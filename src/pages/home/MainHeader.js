//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    TopHeader,
    TOP_HEADER_HEIGHT,
    MainMenu,
    SecondaryMenu,
} from '../../components';

class WindowScroll extends React.Component {
    constructor() {
        super();
        this.state = {x: 0, y: 0};
    }
    componentDidMount() {
        window.addEventListener('scroll', () => {
            this.setState({x: window.scrollX, y: window.scrollY});
        });
    }
    render() {
        return this.props.children(this.state);
    }
};

export const MainHeader = translate()(({i18n, socialLinks}) =>
    <WindowScroll>{ scroll =>
        <TopHeader small={ scroll.y > TOP_HEADER_HEIGHT } logo="/images/white-logo.svg">
        {/* TODO: responsive
            <MainMenu />
        */}
            <SecondaryMenu onLanguage={ lang => i18n.changeLanguage(lang) } socialLinks={ socialLinks } locale={ i18n.language } />
        </TopHeader>
    }</WindowScroll>
);
