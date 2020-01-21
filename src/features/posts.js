import moment from 'moment';
import { createSlice } from '@reduxjs/toolkit';

const initialState = [{
    id: 1,
    parentId: undefined,
    userID: 'me',
    markdown: undefined,
    images: [],
    videos: [],
    dateCreated: undefined,
}];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, { payload: {
            userID,
            ...otherPayload
        } }) => {
            state.push({
                userID,
                ...otherPayload,
                dateCreated: moment().toString(),
            });
        },
    }
});

export const {
    addPost,
} = postsSlice.actions;
export default postsSlice.reducer;