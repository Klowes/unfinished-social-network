import { useCallback, useMemo, Children, cloneElement } from 'react';
import { useFormikUpload } from 'hooks';

const UploadField = ({ children, name }) => {
    const {
        beforeUpload: formikBeforeUpload
    } = useFormikUpload(name);
    const child = useMemo(
        () => Children.only(children),
        [children]
    );
    const beforeUpload = useCallback(
        file => {
            formikBeforeUpload(file);
            child.props.beforeUpload && child.props.beforeUpload(file);
        },
        [child.props, formikBeforeUpload]
    );
    return (
        cloneElement(child, {
            ...child.props,
            beforeUpload,
        })
    );
};

export default UploadField;