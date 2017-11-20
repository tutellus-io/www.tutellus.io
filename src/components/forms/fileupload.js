import React, {Component} from 'react';
import firebase from 'firebase';
import _ from 'lodash';
import styled from 'styled-components';
import numeral from 'numeral';


const UploadButtonElement = (props) => {
    const {
        uploading,
        upload_progress,
        handleUpload,
        clickButton,
        className,
        posterIcon,
    } = props;
    return (
        <div className={className}>
            {
                !uploading &&
                <label>
                    <img src={posterIcon}/>
                    <input type = "file" onChange={handleUpload} onClick={clickButton}/>
                </label>
            }
            {uploading && <progress value={upload_progress} min="0" max="100"></progress>}
        </div>
    );
};

const UploadButton = styled(UploadButtonElement)`
    > label {
        width: 100%;
        height: 100%;
        cursor: pointer;
        border: 2px solid #DBDBDB;
        background-color: #EFEFEF;
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        > img {
            width: 50px;
            height: 50px;
        }
        & input[type='file']{
            display:none;
            outline: 0;
            opacity: 0;
            pointer-events: none;
            user-select:none;
        }
    }
    progress {
        border: 1px solid black;
        border-radius: 5px;
        width: 100%;
        height: 15px;
        &::-webkit-progress-value {
            background: red;
        }
        &::-webkit-progress-bar {
            background: transparent;
        }
    }
`;

const GalleryElement = (props) => {
    const {
        className,
        images = [],
        buttonUpload,
    } = props;
    return (
        <div className={className}>
            {
                images.map((image, index) =>
                    <figure key={`figure-${ index }`}>
                        <img src={image.url} alt={image.name} title={`${ image.original_name } (${ numeral(image.size).format('0.0b') })`}/>
                    </figure>)
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

const ImageWithPosterElement = (props) => {
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
export const ImageWithPoster = styled(ImageWithPosterElement)`
    width: ${ (props) => (props.width ? props.width : '100%') };
    height: ${ (props) => (props.height ? props.height : '100%') };
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

const croppedWith = (height) => `
    > figure {
        width: auto;
        height: ${ height || '100px' };
        > img {
            height: 100%;
            width: auto;
            max-width: auto;
        }
    }
`;
const Gallery = styled(GalleryElement)`
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


export class FileUpload extends Component {
    constructor() {
        super();
        this.state = {
            uploading: false,
            upload_progress: 0,
            images_uploaded: [],
            error: null,
        };

        this.handleUpload = this.handleUpload.bind(this);
        this.resetError = this.resetError.bind(this);
    }

    assertFile(file) {
        const {
            allowed_types = [],
            max_size = 0,
        } = this.props;
        console.log('assertFile', file, allowed_types, max_size);

        if (max_size !== 0 && file.size > max_size) {
            throw new Error('Max size exceeds');
        }
        if (_.size(allowed_types) > 0 && !_.includes(allowed_types, file.type)) {
            throw new Error('Not allowed type');
        }
    }

    uploadToFirebase(file, path, onFinish) {
        const file_path = `${ path }/${ Date.now() }_${ _.snakeCase(file.name) }`;
        const storageRef = firebase.storage().ref(file_path);
        const task = storageRef.put(file);
        task.on('state_changed', (snapshot) => {
            const upload_progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.setState({
                upload_progress,
            });
        }, (error) => {
            throw new Error(error.message);
        }, () => {
            const {
                downloadURL: url,
                metadata: {
                    contentType,
                    size,
                    name,
                },
                task: {
                    blob_: {
                        data_: {
                            name: original_name,
                        },
                    },
                },
            } = task.snapshot;
            const featured_info = {
                url,
                name,
                contentType,
                size,
                original_name,
                u_on: Date.now(),
            };
            console.log(`finish Upload`, task.snapshot, featured_info);
            onFinish(featured_info);
            this.setState({
                upload_progress: 100,
                uploading: false,
                images_uploaded: [...this.state.images_uploaded, featured_info],
            });
        });
    }

    handleUpload(event) {
        const {
            path,
            onFinish = _.noop,
        } = this.props;

        console.log('handleUpload', path, onFinish);
        const file = _.get(event, 'target.files[0]');
        if (path && file) {
            this.setState({
                uploading: true,
            });

            try {
                this.assertFile(file);
                this.uploadToFirebase(file, path, onFinish);
            } catch (error) {
                this.setState({
                    uploading: false,
                    error: error.message,
                });
            }
        }
    }

    resetError() {
        this.setState({
            error: null,
        });
    }

    render() {
        const {
            className,
            images_uploaded = [],
            posterIcon,
        } = this.props;
        const {
            error,
        } = this.state;
        return (
            <div className = {className}>
                <Gallery images={images_uploaded.concat(this.state.images_uploaded)}
                    buttonUpload = {() =>
                        <UploadButton
                            uploading={this.state.uploading}
                            upload_progress={this.state.upload_progress}
                            handleUpload= {this.handleUpload}
                            clickButton= {this.resetError}
                            posterIcon= {posterIcon}
                        />
                    }/>
                {error && <div className='error'>{error}</div>}
            </div>
        );
    }
}
