import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import firebase from 'firebase';
import _ from 'lodash';
import styled from 'styled-components';

import {Gallery} from './Gallery';
import {UploadButton} from './UploadButton';
import styles from '../../../styles';

/*::
type FeaturedInfo = {}
type FileUploadProps = {|
    posterIcon: string,
    onFinish: (FeaturedInfo => void),
    path: void,
    one_image: void,
    images_uploaded: Array<FeaturedInfo>,
    className: string,
    max_size_err: string,
    max_size: number,
    allowed_types: Array<void>,
    allowed_types_err: string,
|}
type FileUploadElementState = {|
    upload_progress: number,
    uploading: bool,
    images_uploaded: Array<FeaturedInfo>,
    error: null,
|}
*/
class FileUploadElement extends React.Component/*::<FileUploadProps, FileUploadElementState>*/ {
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
            allowed_types_err = 'Not allowed type',
            max_size = 0,
            max_size_err = 'Max size exceeds',
        } = this.props;

        if (max_size !== 0 && file.size > max_size) {
            throw new Error(max_size_err);
        }
        const has_type_restrictions = _.size(allowed_types) > 0;
        const is_type_allowed = _.includes(allowed_types, file.type);
        if (has_type_restrictions && !is_type_allowed) {
            throw new Error(allowed_types_err);
        }
    }

    uploadToFirebase(file, path, onFinish) {
        const file_path = `${ path }/${ Date.now() }_${ _.snakeCase(file.name) }`;
        const storageRef = firebase.storage().ref(file_path);
        const task = storageRef.put(file);
        task.on('state_changed', snapshot => {
            const {
                bytesTransferred,
                totalBytes,
            } = snapshot;
            const upload_progress = (bytesTransferred / totalBytes) * 100;
            this.setState({
                upload_progress,
            });
        }, error => {
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
                    //$FlowFixMe update firebase npm definitions
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
            onFinish(featured_info);
            this.setState({
                upload_progress: 100,
                uploading: false,
                images_uploaded: [...this.state.images_uploaded, featured_info],
            });
        });
    }

    /*:: handleUpload: (void => void) */
    handleUpload(event) {
        const {
            path,
            onFinish = _.noop,
        } = this.props;

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

    /*:: resetError: (void => void) */
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
            one_image = false,
        } = this.props;
        const {
            error,
        } = this.state;
        return (
            <div className={ className }>
                <Gallery one_image={ one_image }
                    images={ images_uploaded.concat(this.state.images_uploaded) }
                    buttonUpload={ () =>
                        <UploadButton
                            uploading={ this.state.uploading }
                            upload_progress={ this.state.upload_progress }
                            handleUpload={ this.handleUpload }
                            clickButton={ this.resetError }
                            posterIcon={ posterIcon } />
                    } />
                { error && <div className='error'>{ error }</div> }
            </div>
        );
    }
}


export const FileUpload = styled(FileUploadElement)`
    > .error {
        margin-top: 0.5em;
        color: ${ styles.colors.googleplus };
    }
`;
