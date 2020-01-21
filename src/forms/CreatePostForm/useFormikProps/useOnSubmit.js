import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from 'features/posts';

const useOnSubmit = () => {
    const globalDispatch = useDispatch();
    const onSubmit = useCallback(
        ({
            images,
            markdown: {
                contents,
            },
            ...otherPayload
        }) => globalDispatch(addPost({
            ///Have to do this on this layer as passing Files to a Redux action
            //even they're parsed in the reducer throws an error
            images: images.map(image => JSON.stringify(image)),
            ///Have to do this on this layer as passing Deltas to a Redux action
            //even they're parsed in the reducer throws an error
            markdown: JSON.stringify(contents),
            ...otherPayload,
        })),
        [globalDispatch]
    );
    return onSubmit;
};

export default useOnSubmit;