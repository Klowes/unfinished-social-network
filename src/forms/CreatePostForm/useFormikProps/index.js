import { useMemo } from 'react';
import useOnSubmit from './useOnSubmit';
import initialValues from './initialValues';
import validationSchema from './validationSchema';

const useFormikProps = () => {
    const onSubmit = useOnSubmit();
    const formikProps = useMemo(
        () => ({
            onSubmit,
            initialValues,
            validationSchema,
            validateOnMount: true,
        }),
        [onSubmit]
    );
    return formikProps;
};

export default useFormikProps;