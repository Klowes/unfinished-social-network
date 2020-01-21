import React from 'react';
import { useFormikContext } from 'formik';
import { Button } from 'components';

const SubmitField = ({
    children
}) => {
    const {
        isValid,
        submitForm: onClick,
    } = useFormikContext();
    return (
        <Button
            {...{ onClick }}
            disabled={!isValid}
            type={'primary'}
        >
            {children}
        </Button>
    );
};

SubmitField.defaultProps = {
    children: 'Submit',
};

export default SubmitField;