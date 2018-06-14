//@flow
/*eslint no-magic-numbers: off*/
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Observed from 'react-intersection-observer';
import Modal from 'react-awesome-modal';
import {withClickTracker} from '../withTracker';
import {
    AButton,
    Button,
    PageSection,
    Timer,
    TimerTitle,
    TimerBox,
} from './';
import styles from '../styles';
import 'intersection-observer';

const TrackAButton = withClickTracker(AButton);
const TrackButton = withClickTracker(Button);

const ShowModal = styled(({className, showModal, text}) =>
    <TrackButton className={ className }
        event= {{
            category: "cryptonomos",
            action: "modal",
        }}
        onClick={ showModal }
        primary
    >
        { text }
    </TrackButton>
)`
    justify-self: center;
    align-self: center;
    padding: 0.6em 1.5em;
    font-size: 1em;
`;

const BuyICO = styled(({className, url, text}) =>
    <TrackAButton className={ className }
        event= {{
            category: "cryptonomos",
            action: "contribute",
        }}
        href={ url }
        primary
    >
        { text }
    </TrackAButton>
)`
    justify-self: center;
    align-self: center;
    padding: 0.6em 1.5em;
    font-size: 1em;
`;

const ModalHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    & img:first-child{
        justify-self: start;
        height: 1.75em;
        @media ${ styles.media.tablet } {
            height: 2.5em;
        }
    }
    & img:last-child{
        justify-self: end;
        margin-top: -0.8em;
        margin-bottom: -0.5em;
        height: 3.25em;
        @media ${ styles.media.tablet } {
            height: 4em;
        }
    }
`;

const IcoModal = styled.div`
    padding: 1.5em;
    display: grid;
    grid-row-gap: 1.5em;
    background-color: ${ styles.colors.darkblue };
    border-radius: 4px;

    & > div {
        & h1 {
            margin-bottom: 0.6em;
            text-align: center;
            font-size: 1.4em;
            line-height: 1.6em;
        }
        & ol {
            list-style: decimal;
            margin-left: 2.3em;
            margin-right: 1.2em;
            & li {
                margin-bottom: 0.5em;
                font-size: 0.95em;
                line-height: 1.5em;
            }
        }
    }
`;

const ModalCryptonomos = ({className, visible, closeModal, modal, url, text}) =>
    <Modal
        visible={visible}
        width="620"
        effect="fadeInUp"
        onClickAway={closeModal}
        className={className}
    >
        <IcoModal>
            <ModalHeader>
                <img src="/images/white-logo.svg" alt="Tutellus.io"/>
                <img src="/images/cryptonomos.svg" alt="Power by Cryptonomos!"/>
            </ModalHeader>
            <div>
                <h1>{ modal.h1 }</h1>
                <ol>
                    <li>{ modal.step1 }</li>
                    <li>{ modal.step2 }</li>
                    <li>{ modal.step3 }</li>
                </ol>
            </div>
            <BuyICO onClickCapture={closeModal} url={url} text={text}/>
        </IcoModal>
    </Modal>;
ModalCryptonomos.displayName = "ModalCryptonomos";

const CountDown = styled(({
    className,
    title,
    timer_limit,
    server_time,
    cta_text,
    showModal,
}) =>
    <div className={ className }>
        <Timer title={ title }
            limit={ timer_limit }
            server_time = { server_time }
        />
        <ShowModal showModal={ showModal } text={ cta_text }/>
    </div>
)``;
CountDown.displayName = 'CountDown';

export const CountDownPanel = styled(CountDown)`
    display: grid;
    grid-gap: 2em;
    justify-items: center;
`;
CountDownPanel.displayName = 'CountDownPanel';

const CountDownBar = styled(class extends React.Component {
    static displayName = 'CountDownBar';
    constructor() {
        super();
        this.el = document.createElement('div');
    }
    componentDidMount() {
        const body = document.getElementsByTagName('body');
        body[0].appendChild(this.el);
    }
    render() {
        const {
            className,
            background_url,
            ...props
        } = this.props;
        return ReactDOM.createPortal(
            <PageSection dark className={ className }
                backgroundImage={ background_url }>
                <CountDown {...props}/>
            </PageSection>,
            this.el
        );
    }
})`
    position: fixed;
    bottom: -200px;
    z-index: 1000;
    transition: all 0.5s linear;
    ${ ({show = false}) =>(show ? `bottom: 0;` : '') }
    left: 0;
    width: 100%;

    padding: 0.5em;
    @media ${ styles.media.tablet } {
        padding: 0.5em 3em;
    }
    font-size: 0.85em;
    & ${ CountDown } {
        padding: 0em;
        @media ${ styles.media.laptop } {
            padding: 0em 7em;
        }
        @media ${ styles.media.desktop } {
            padding: 0em 12em;
        }
        display: grid;
        grid-template-columns: 7fr 5fr;
        @media ${ styles.media.tablet } {
            grid-template-columns: 7fr 3fr;
        }
        grid-gap: 1em;
        & ${ Timer } {
            grid-template-columns: repeat(4, 0.9fr);
            grid-gap: 0.6em;
            @media ${ styles.media.tablet } {
                grid-template-columns: 5fr repeat(4, 0.9fr);
                grid-gap: 1em;
            }
            grid-template-rows: 1fr;
            & ${ TimerTitle } {
                grid-column: 1 / span 1;
                display:none;
                @media ${ styles.media.tablet } {
                    display:block;
                }
            }
            & ${ TimerBox } {
                font-size: 0.8em;
            }
        }

        & ${ BuyICO } {
            font-size: 0.82em;
            padding: 0.8em 1em;
            @media ${ styles.media.tablet } {
                font-size: 1em;
                padding: 0.6em 1.5em;
            }
            width: 100%;
        }
    }
`;

export const DoubleCountDown = styled(class extends React.Component {
    static displayName = "DoubleCountDown";

    state = {
        show: false,
        modal_visible: false,
    }

    handleVisibility = isInView => {
        this.setState({
            show: !isInView,
        });
    }

    toggleModalVisibility = () => {
        this.setState({
            modal_visible: !this.state.modal_visible,
        });
    }

    render() {
        const {
            show,
            modal_visible,
        } = this.state;
        const {
            modal,
            className,
            ...props
        } = this.props;
        return (
            <React.Fragment>
                <Observed className={className} onChange={ this.handleVisibility }>
                    <CountDownPanel {...props}
                        showModal={this.toggleModalVisibility}
                    />
                </Observed>
                <CountDownBar {...props} show={ show }
                    showModal={this.toggleModalVisibility}
                />
                <ModalCryptonomos closeModal={this.toggleModalVisibility}
                    url={this.props.cta_url}
                    text={this.props.cta_text}
                    visible={modal_visible}
                    modal={modal}
                />
            </React.Fragment>
        );
    }
})``;

