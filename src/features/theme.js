import { createSlice } from '@reduxjs/toolkit';
import { updateTheme } from 'utilities';
import { PRIMARY_COLOR } from 'constants/theme';

const initialState = {
    primaryColor: '#FF0',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        updatePrimaryColor: ({ primaryColor }, { payload }) => {
            if (primaryColor !== payload) {
                updateTheme(PRIMARY_COLOR, '#0035ff');
            }
        },
    }
});

export const {
    updatePrimaryColor,
} = themeSlice.actions;
export default themeSlice.reducer;