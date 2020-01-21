import React, { useState, useRef, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Modal } from 'components';
import subComponents from './subComponents';
import contexts from './contexts';

/** 
 * @summary Content will be rendered on the page, 
 * but onMouseDown will portal the content to a modal,
 * unless the event's target's type was button,
 * then the button will activate this after it's own event is finished
 * Takes 'components/modal' props
 */
const ModalWrapper = ({ children, ...otherProps }) => {
    const [visible, setVisible] = useState(false);
    const [target, setTarget] = useState();
    const ref = useRef();
    const ModalRef = useRef();
    const openModal = useCallback(
        () => {
            setVisible(true);
            setTarget(ModalRef.current);
        },
        []
    );
    const onMouseDownCapture = useCallback(
        e => {
            if (!['svg', 'path', 'BUTTON'].includes(e.target.tagName))
                openModal();
        },
        [openModal]
    );
    const onCancel = useCallback(
        () => setVisible(false),
        []
    );
    const afterClose = useCallback(
        () => setTarget(ref.current),
        []
    );
    useEffect(
        afterClose,
        []
    );
    return (
        <>
            <div {...{ ref }} />
            <Modal
                {...otherProps}
                {...{ visible, onCancel, afterClose }}
                forceRender
            >
                <div ref={ModalRef} className={'display-flex flex'} />
            </Modal>
            {target && createPortal(
                <contexts.visibleContext.Provider value={visible}>
                    <contexts.openModalContext.Provider value={openModal}>
                        <div {...{ onMouseDownCapture }} className={'display-flex flex'}>
                            {children}
                        </div>
                    </contexts.openModalContext.Provider>
                </contexts.visibleContext.Provider>,
                target
            )}
        </>
    );
};

Object.assign(ModalWrapper,
    subComponents,
    contexts,
);

export default ModalWrapper;