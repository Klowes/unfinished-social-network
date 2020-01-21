import React, { useRef, useEffect, useMemo } from 'react';
import { Input } from 'antd';
import { focusText } from 'utilities';

const TextArea = ({
    style: propStyle,
    noPadding,
    focus,
    ...otherProps
}) => {
    const ref = useRef();
    useEffect(
        () => {
            focus && focusText(ref.current.resizableTextArea.textArea);
        },
        [focus]
    );
    const style = useMemo(
        () => ({
            ...propStyle,
            ...noPadding && { padding: 0 },
            resize: 'none',
            border: 'none',
            boxShadow: 'none',
        }),
        [noPadding, propStyle]
    );
    return (
        <div>
            <Input.TextArea
                {...otherProps}
                {...{ ref, style }}
            />
        </div>
    );
};

export default TextArea;