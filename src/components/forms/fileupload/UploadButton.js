//@flow
import * as React from 'react';
/*:: import type {ComponentType} from 'react' */
import styled from 'styled-components';
/*::
type UploadButtonProps = {|
    className?: string,
    uploading: bool,
    upload_progress: number,
    handleUpload: (void => void),
    clickButton: (void => void),
    posterIcon: void,
|}
*/
const UploadButtonElement = (props/*:UploadButtonProps*/) => {
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
                    <input type = "file"
                        onChange={handleUpload}
                        onClick={clickButton}/>
                </label>
            }
            {
                uploading &&
                <progress value={upload_progress}
                    min="0"
                    max="100"
                />
            }
        </div>
    );
};

export const UploadButton/*:ComponentType<UploadButtonProps>*/ = styled(UploadButtonElement)`
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
