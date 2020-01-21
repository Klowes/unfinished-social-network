import React from 'react';
import { Formik } from 'formik';
import { ModalWrapper, Card, Avatar } from 'components';
import { CreatePostForm } from 'forms';

const CreatePostCard = () => {
    const formikProps = CreatePostForm.useFormikProps();
    return (
        <Formik {...formikProps}>
            <ModalWrapper footer={null} noPadding>
                <Card className={'display-flex flex'}>
                    <div className={'display-flex flex'}>
                        <div>
                            <Avatar className={'marginRight-sm'} />
                        </div>
                        <div className={'display-flex flex'}>
                            <CreatePostForm />
                        </div>
                    </div>
                </Card>
            </ModalWrapper>
        </Formik>
    );
};

export default CreatePostCard;