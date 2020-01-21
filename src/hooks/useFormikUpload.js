import { useCallback, useRef } from 'react';
import { useFormikContext, useField } from 'formik';

const useFormikUpload = name => {
    const { setFieldValue } = useFormikContext();
    const [{
        value: fileList
    }] = useField({ name });
    const files = useRef([]);
    const addFilesToForm = useCallback(
        () => {
            setFieldValue(name, [...fileList, ...files.current]);
            files.current = [];
        },
        [fileList, name, setFieldValue]
    );
    const uploadTimeout = useRef(null);
    const beforeUpload = useCallback(
        file => {
            uploadTimeout.current && clearTimeout(uploadTimeout.current);
            files.current.push(file);
            uploadTimeout.current = setTimeout(addFilesToForm);
        },
        [addFilesToForm]
    );
    const onRemove = useCallback(
        file => setFieldValue(name, fileList.filter(({ uid }) => uid !== file.uid)),
        [fileList, name, setFieldValue]
    );
    return {
        fileList,
        beforeUpload,
        onRemove,
    };
}

export default useFormikUpload;