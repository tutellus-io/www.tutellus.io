//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import ReactDOM from 'react-dom';
import styled, {injectGlobal} from 'styled-components';
import {colors} from '../styles';

const normalizeGrid = `
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 1em;
    align-items: center;
    justify-items: center;
`;

/*::
type MobileMenuLayerProps = {|
    className?: string,
    children: React.Node,
    onClick: void,
|}
type MobileMenuLayerState = {|
|}
*/
export const MobileMenuLayer = styled(class extends React.Component/*::<MobileMenuLayerProps, MobileMenuLayerState>*/ {
    /*:: containerEl: HTMLDivElement */
    constructor(props) {
        super(props);

        this.containerEl = document.createElement('div');
    }

    componentDidMount() {
        //$FlowFixMe el body existe
        document.body.appendChild(this.containerEl);
    }

    render() {
        const {
            className,
            children,
            onClick,
        } = this.props;

        return ReactDOM.createPortal(
            <aside className={ className } onClickCapture={ onClick } >
                { children }
            </aside>
        , this.containerEl);
    }
})`
    display: block;
    z-index: 100000;
	top: 0;
    right: -100%;
    width: 100%;
    height: 100%;
	transition: right ease-in-out 0.35s;
	position: fixed;
	outline: none;
    background-color: rgba(0,0,0,0.9);
    margin-top: ${ ({top_margin = 0}) => `${ top_margin }px` };
    color: white;
    padding: 1em 2em;
    overflow-y: scroll;

    .mobile-open & {
        right: 0;
    }

    & > nav {
        & + nav {
            padding-top: 1em;
        }

        ${ normalizeGrid }
        & > ul {
            ${ normalizeGrid }

        }
    }
`;

const HambuguerButton = styled(props =>
    <div {...props}>
        <span/>
    </div>
)`
    display: block;
    cursor: pointer;
    user-select: none;
    width: 35px;
    & span {
        height: 4px;
        width: 35px;
        border-radius: 2px;
        background-color: white;
        position: relative;
        display: block;
        transition: all .2s ease-in-out;
        &:before {
            top: -10px;
            visibility: visible;
        }
        &:after {
            top: 10px;
        }
        &:before, &:after {
            height: 4px;
            width: 100%;
            border-radius: 2px;
            background-color: white;
            position: absolute;
            content: "";
            transition: all .2s ease-in-out;
        }
    }

    &:hover span,
    &:hover span:before,
    &:hover span:after {
        background: ${ colors.lightblue };
    }

    &.open {
        &:hover span, span{
            background: transparent;
        }
        span {
            &:before {
                transform: rotate(45deg) translate(7px, 7px);
                opacity: 1;
            }
            &:after {
                transform: rotate(-45deg) translate(7px, -7px);
            }
        }
    }
`;

/*::
type MobileMenuProps = {|
    top_margin: number,
    children: React.Node,
|}
type MobileMenuState = {|
    open: bool,
|}
*/
export const MobileMenu = styled(class extends React.Component/*::<MobileMenuProps, MobileMenuState>*/ {
    static displayName = 'MobileMenu';

    constructor() {
        super();

        this.state = {
            open: false,
        };
    }

    toggleMenu = () => {
        const {
            open,
        } = this.state;
        this.setState({
            open: !open,
        });
    }

    componentWillMount() {
        //Prevents scrolling when the menu is open
        injectGlobal`
            body.mobile-open & {
                overflow-y: hidden;
            }
        `;
    }

    componentWillUpdate(nextProps, nextState) {
        const body = document.querySelector('body');
        //$FlowFixMe siempre hay un body;
        const classNames = body.className;
        if (this.state.open !== nextState.open) {
            if (nextState.open) {
                //$FlowFixMe siempre hay un body;
                body.className = `${ classNames } mobile-open`;
            } else {
                //$FlowFixMe siempre hay un body;
                body.className = classNames.replace(/\s+mobile-open/g, "");
            }
        }
    }

    render() {
        const {
            children,
            top_margin,
        } = this.props;
        const {
            open,
        } = this.state;

        const onlyAToggle = event => {
            if (event.target.nodeName === "A") {
                this.toggleMenu();
            }
        };
        return (
            <React.Fragment>
                <HambuguerButton className={ `${ open ? 'open' : '' }` }
                    onClick={this.toggleMenu}/>
                <MobileMenuLayer top_margin={ top_margin }
                    onClick={onlyAToggle}>
                    { children }
                </MobileMenuLayer>
            </React.Fragment>
        );
    }
})``;
