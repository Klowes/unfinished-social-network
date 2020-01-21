import React, { useCallback, useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Quill = ({
    onChange: propOnChange,
    noPadding,
    value: {
        contents: value,
    },
    ...otherProps
}) => {
    const onChange = useCallback(
        (_content, _delta, _source, editor) => setImmediate(
            () => propOnChange({
                contents: editor.getContents(),
                length: editor.getLength() - 1,
            })
        ),
        [propOnChange]
    );
    const className = useMemo(
        () => noPadding ? 'noPadding' : '',
        [noPadding]
    );
    const style = useMemo(
        () => ({
            width: 454,
        }),
        []
    );
    const formats = useMemo(
        () => [
            'bold',
            'italic',
            'underline',
            'script',
            'strike',
            'link',
            'code',
        ],
        []
    );
    return (
        <ReactQuill
            key={'quill'}
            {...otherProps}
            {...{ onChange, className, style, value, formats }}
            modules={{
                toolbar: false,
            }}
            theme={null}
        />
    );
};

export default Quill;