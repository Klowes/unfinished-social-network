import React, { useContext, useCallback } from 'react';
import { ModalWrapper, Upload } from 'components';

const ModalWrapperUpload = ({
    beforeUpload: propBeforeUpload,
    ...otherProps
}) => {
    const visible = useContext(ModalWrapper.visibleContext);
    const openModal = useContext(ModalWrapper.openModalContext);
    const beforeUpload = useCallback(
        async file => {
            propBeforeUpload && await propBeforeUpload(file);
            !visible && openModal();
        },
        [openModal, propBeforeUpload, visible]
    );
    return (
        <Upload
            {...otherProps}
            {...{ beforeUpload }}
        />
    );
};

export default ModalWrapperUpload;