import React, { useRef, useMemo, useCallback } from 'react';
import { Modal as ANTDModal } from 'antd';
import 'styles/overrides.less';

const Modal = ({
    noPadding,
    bodyStyle: propBodyStyle,
    onCancel: propOnCancel,
    children,
    ...otherProps
}) => {
    const ref = useRef();
    const bodyStyle = useMemo(
        () => ({
            ...noPadding && { padding: 0 },
            ...propBodyStyle,
            flex: 1,
            display: 'flex',
        }),
        [noPadding, propBodyStyle]
    );
    const onCancel = useCallback(
        () => {
            if (!ref.current.contains(document.activeElement))
                propOnCancel();
        },
        [propOnCancel]
    );
    return (
        <ANTDModal
            {...otherProps}
            {...{ bodyStyle, onCancel }}
            width={536}
            closable={false}
        >
            <div {...{ ref }} className={'display-flex flex'}>
                {children}
            </div>
        </ANTDModal>
    );
};

export default Modal;