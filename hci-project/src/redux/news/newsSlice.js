import {createSlice} from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        currentPage: 1,
    },
    reducers: {
        savePage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
})

export const {savePage} = newsSlice.actions;

export default newsSlice.reducer;