//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';

/*::
type ImageWithPosterProps = {|
    className?: string,
    src?: string,
    posterIcon: string,
    width: string,
    height: string,
|}
*/
const ImageWithPosterElement = (props/*:ImageWithPosterProps*/) => {
    const {
        posterIcon,
        className,
        src,
    } = props;

    return (
        <div className={className}>
            {
                src &&
                <img src={src} alt=""/>
            }
            {
                !src &&
                <img className="icon" src={posterIcon} alt=""/>
            }
        </div>
    );
};
export const ImageWithPoster/*:ComponentType<ImageWithPosterProps>*/ = styled(ImageWithPosterElement)`
    width: ${ props => (props.width ? props.width : '100%') };
    height: ${ props => (props.height ? props.height : '100%') };
    border: 2px solid #DBDBDB;
    background-color: #EFEFEF;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    > img {
        width: 100%;
        height: 100%;
    }
    > .icon {
        width: 50px;
        height: 50px;
    }
`;
