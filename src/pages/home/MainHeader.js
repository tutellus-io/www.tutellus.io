//@flow
import * as React from 'react';
import {translate} from 'react-i18next';
import {
    TopHeader,
    TOP_HEADER_HEIGHT,
    MainMenu,
    SecondaryMenu,
} from '../../components';

/*:: type Scroll = {|x: number, y: number|} */
/*:: type WindowScrollProps = {|children: (Scroll => React.Node)|} */
class WindowScroll extends React.Component/*::<WindowScrollProps, Scroll>*/ {
    constructor() {
        super();
        //eslint-disable-next-line id-length
        this.state = {x: 0, y: 0};
    }
    componentDidMount() {
        window.addEventListener('scroll', () => {
            //eslint-disable-next-line id-length
            this.setState({x: window.scrollX, y: window.scrollY});
        });
    }
    render() {
        return this.props.children(this.state);
    }
};

export const MainHeader = translate()(({i18n, history, socialLinks}) =>
    <WindowScroll>{ scroll =>
        <TopHeader small={ scroll.y > TOP_HEADER_HEIGHT.SMALL }
            logo="/images/white-logo.svg"
            title="Tutellus.io"
        >
            <MainMenu />
            <SecondaryMenu onLanguage={ lang => i18n.changeLanguage(lang) }
                socialLinks={ socialLinks }
                locale={ i18n.language }
                history={history}
            />
        </TopHeader>
    }</WindowScroll>
);
