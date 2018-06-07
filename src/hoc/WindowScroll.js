//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
/*:: type Scroll = {|x: number, y: number|} */
/*:: type WindowScrollProps = {|children: (Scroll => React.Node)|} */
export class WindowScroll extends React.Component/*::<WindowScrollProps, Scroll>*/ {
    constructor() {
        super();
        //eslint-disable-next-line id-length
        this.state = {x: 0, y: 0};
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateWindowPosition);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.updateWindowPosition);
    }

    updateWindowPosition = () => {
        //eslint-disable-next-line id-length
        this.setState({x: window.scrollX, y: window.scrollY});
    }

    render() {
        return this.props.children(this.state);
    }
};
export const withWindowScroll = (Component/*:ComponentType<*>*/) =>
    (props/*:mixed*/) =>
        <WindowScroll>{ scroll =>
            <Component { ...props } scroll={ scroll } />
        }</WindowScroll>;
