import React from 'react';
import { UploadList } from 'components';
import { useFormikUpload } from 'hooks';

const UploadListField = ({ name }) => {
    const formikUpload = useFormikUpload(name);
    return (
        <UploadList {...formikUpload} />
    );
};

export default UploadListField;