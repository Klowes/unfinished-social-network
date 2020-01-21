import React from 'react';
import { Form } from 'formik';
import { ModalWrapper, Button, Icon, Quill } from 'components';
import { TextField, UploadListField, UploadField, SubmitButton } from 'formComponents';
import useFormikProps from './useFormikProps';

const CreatePostForm = () => {
    return (
        <Form className={'display-flex flex flex-column'}>
            <div className={'flex overflow-y-auto item-padding-vertical padding-right-sm margin-bottom-sm'}>
                <TextField name={'markdown'}>
                    <Quill
                        placeholder={"What's on your mind, Christian?"}
                        noPadding
                    />
                </TextField>
                <UploadListField name={'images'} />
            </div>
            <div className={'display-flex'}>
                <div className={'display-flex item-padding-horizontal flex'}>
                    <UploadField name={'images'}>
                        <ModalWrapper.Upload showUploadList={false}>
                            <Button shape={'circle'}>
                                <Icon type={'picture'} />
                            </Button>
                        </ModalWrapper.Upload>
                    </UploadField>
                </div>
                <SubmitButton>
                    {'Post'}
                </SubmitButton>
            </div>
        </Form>
    );
};

Object.assign(CreatePostForm, {
    useFormikProps,
});

export default CreatePostForm;