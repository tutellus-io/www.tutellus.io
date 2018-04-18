import * as React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
/*::
type GalleryImage = {|
    url: string,
    name: string,
    original_name: string,
    size: number,
|}
type GalleryProps = {|
    className?: string,
    images: Array<GalleryImage>,
    buttonUpload: void,
    one_image?: bool,
|}
*/
const GalleryElement = (props/*:GalleryProps*/) => {
    const {
        className,
        images = [],
        buttonUpload,
        one_image = false,
    } = props;

    let all_images = images;
    if (one_image) {
        all_images = _.takeRight(all_images);
    }
    return (
        <div className={className}>
            {
                all_images.map((image, index) =>
                    <figure key={`figure-${ index }`}>
                        <img src={image.url}
                            alt={image.name}
                            title={`${ image.original_name }`} />
                    </figure>
                )
            }
            {
                buttonUpload &&
                    <figure key={`figure-upload`}>
                        {buttonUpload()}
                    </figure>
            }
        </div>
    );
};


export const Gallery = styled(GalleryElement)`
    display: flex;
    flex-wrap: wrap;

    > figure {
        display: flex;
        flex-direction: column;
		justify-content: center;
        margin: 0 1em 1em 0;

        width: 170px;
        height: 100px;

        > * {
            width: 100%;
            height: 100%;
            flex: 1;
        }

        > img {
            object-fit: cover;
        }
    }
`;

