import { Children, useCallback, useMemo, cloneElement } from 'react';
import { useFormikContext, useField } from 'formik';

const TextField = ({ name, children }) => {
    const { setFieldValue } = useFormikContext();
    const [{
        value,
    }] = useField({ name });
    const onChange = useCallback(
        newValue => setFieldValue(name, newValue),
        [name, setFieldValue]
    );
    const child = useMemo(
        () => Children.only(children),
        [children]
    );
    return cloneElement(child, {
        ...child.props,
        value,
        onChange,
        name,
    });
};

export default TextField;