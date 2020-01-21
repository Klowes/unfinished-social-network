import React, { useMemo } from 'react';
import { Upload, Icon } from 'components';

const UploadList = ({
    fileList: propFileList,
    ...otherProps
}) => {
    const render = useMemo(
        () => propFileList && propFileList.length,
        [propFileList]
    );
    const fileList = useMemo(
        () => propFileList.map(file => ({
            ...file,
            url: URL.createObjectURL(file),
        })),
        [propFileList]
    );
    return render
        ? (
            <Upload
                {...otherProps}
                {...{ fileList }}
                listType={'picture-card'}
            >
                <Icon type={'plus'} />
            </Upload>
        )
        : null;
};

export default UploadList;