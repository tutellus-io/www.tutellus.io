//@flow
import * as React from 'react';
import trackCode from './trackCode';

/*::
type Props = {|
    id: string,
|}
*/
export class FBTracker extends React.Component/*::<Props>*/ {
    componentDidMount() {
        return trackCode(this.props.id);
    }
    render() {
        const pixel_url = `https://www.facebook.com/tr?id=${ this.props.id }&ev=PageView&noscript=1`;
        return (
            <noscript>
                <img height="1" width="1" style={ {display: "none"} } src={ pixel_url } />
            </noscript>
        );
    }
}

