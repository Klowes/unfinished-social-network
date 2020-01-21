import React from 'react';
import { Upload as ANTDUpload } from 'antd';

const Upload = props => {
    return (
        <ANTDUpload
            {...props}
            customRequest={Function.prototype}
            multiple
        />
    );
};

export default Upload;