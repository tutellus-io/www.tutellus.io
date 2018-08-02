//@flow
/*global Modernizr:false*/
/*eslint no-magic-numbers: off*/
import React from 'react';
import styled from 'styled-components';
import Modal from 'react-awesome-modal';

import styles from '../styles';
import {
    LazyImage,
    SectionTitle,
} from './';

const Container = styled.div`
    padding: 1.5em;
    display: grid;
    grid-row-gap: 1.5em;
    background-color: ${ styles.colors.white };
    border-radius: 4px;

    & ${ SectionTitle } {
        margin-bottom: 0;
    }
`;

const InlineImage = styled.div`
    display: inline-block;
    max-width: 5em;
    padding: 1em;
    @media ${ styles.media.tablet } {
        max-width: 6em;

    }
    & ${ LazyImage } {
        width: 100%
    }
`;

const AlignCenter = styled.div`
    text-align: center;
    line-height: 1.4em;
`;

const ModalBrowser = styled(({className}) => {
    const browsers = ['edge', 'chrome', 'firefox', 'safari'];
    return (
        <Modal
            visible={true}
            width="550"
            effect="fadeInUp"
            className={className}
        >
            <Container>
                <SectionTitle>Your browser is not supported</SectionTitle>
                <AlignCenter>
                    Please, select other browser to have a perfect user experience
                </AlignCenter>
                <AlignCenter>
                    {
                        browsers.map(browser =>
                            <InlineImage key={browser}>
                                <LazyImage src={`https://lib.tutellus.com/ico/images/browsers/${ browser }.svg`} alt='' />
                            </InlineImage>
                        )
                    }
                </AlignCenter>
            </Container>
        </Modal>
    );
})``;
ModalBrowser.displayName = "ModalBrowser";

/*::
type State = {|
    gridSupported: boolean,
|}
*/
export const BrowserModal = class extends React.Component /*::<*, State>*/{
    static displayName = 'BrowserModal';

    constructor() {
        super();

        this.state = {
            gridSupported: true,
        };
    }

    componentDidMount() {
        if (!Modernizr.cssgrid) {
            this.setState(current => ({
                ...current,
                gridSupported: false,
            }));
        }
    }

    render() {
        const {
            gridSupported,
        } = this.state;

        if (!gridSupported) {
            return <ModalBrowser />;
        }
        return null;
    }
};
