import { createSlice } from '@reduxjs/toolkit';
const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        // dark mode: true
        // light modeL false
        IsChange: true,
    },
    reducers: {
        changeTheme: (state, action) => {
            console.log(action.payload);
            state.IsChange = action.payload ? false : true;
        },
    },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
