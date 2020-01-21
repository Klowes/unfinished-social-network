import React, { useContext, useState, useEffect } from 'react';
import { ModalWrapper, TextArea } from 'components';

const ModalWrapperTextArea = ({ autoFocus, ...otherProps }) => {
    const visible = useContext(ModalWrapper.visibleContext);
    const [focus, setFocus] = useState(false);
    useEffect(
        () => {
            if (autoFocus && visible)
                setFocus(true);
        },
        [autoFocus, visible]
    );
    return (
        <TextArea
            {...otherProps}
            {...{ focus }}
        />
    );
};

ModalWrapperTextArea.defaultProps = {
    autoFocus: false,
    onClick: () => { },
};

export default ModalWrapperTextArea;
