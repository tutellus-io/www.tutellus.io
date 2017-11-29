//@flow
import * as React from 'react';
import R from 'ramda';

/*::
type Props = {|
    queries: Object,
    children: (Object => React.Node),
|}
type State = Object;
type MediaQueryEvent = {media: string, matches: bool};
*/
export class Responsive extends React.Component/*::<Props, State>*/ {
    /*:: media_queries: Object */
    constructor() {
        super();
        this.state = {};
        this.mediaQueryListener = this.mediaQueryListener.bind(this);
    }
    get devices() /*:Object*/ {
        return R.invertObj(this.props.queries);
    }
    /*:: mediaQueryListener: (MediaQueryEvent) => void */
    mediaQueryListener(event/*:MediaQueryEvent*/) {
        this.setState({
            [this.devices[event.media]]: event.matches,
        });
    }
    componentDidMount() {
        this.media_queries = R.map(media_query => {
            const matcher = window.matchMedia(media_query);
            matcher.addListener(this.mediaQueryListener);
            return matcher;
        }, this.props.queries);
        R.map(this.mediaQueryListener, this.media_queries);
    }
    componentWillUnmount() {
        const destroyListener = media_query =>
            media_query.removeListener(this.mediaQueryListener);

        R.map(destroyListener, this.media_queries);
    }
    render() {
        return this.props.children(this.state);
    }
}
