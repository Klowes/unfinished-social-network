import { createSlice } from '@reduxjs/toolkit';

const initialState = [{
    userID: 'me',
    name: 'Christian',
    profileImageSrc: 'https://scontent.fewr1-5.fna.fbcdn.net/v/t1.0-1/p160x160/45459893_10205291193715712_3584120908245106688_o.jpg?_nc_cat=107&_nc_ohc=FT8nFvDvv4IAQlfyDZGmANb2bLVAgZ8Pmn0LmcAxFjbwFQBtby9_YsGLA&_nc_ht=scontent.fewr1-5.fna&oh=1bbfa2b12151ba7e1c95f94e95361345&oe=5E7F27D9',
}];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, { payload }) => state.push(payload),
        removeUser: (state, { payload }) => state = state.filter(u => u.userID !== payload),
    }
});

export const {
    addUser,
    removeUser,
} = usersSlice.actions;
export default usersSlice.reducer;