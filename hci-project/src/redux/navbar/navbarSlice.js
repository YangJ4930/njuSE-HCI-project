import { createSlice } from '@reduxjs/toolkit';
import { useLocation } from 'react-router-dom';

const navbarSlice = createSlice({
    name: 'navbar',
    initialState: {
        visible: true,
        path: '',
        current: 'game',
    },
    reducers: {
        changeVisible: (state, action) => {
            console.log(state.visible);
            state.visible = action.payload;
            console.log(state.visible);
        },
        lastPath: (state, action) => {
            state.path = action.payload;
            console.log(state.path);
        },
        setCurrent: (state, action) => {
            state.current = action.payload;
            console.log(state.current);
        },
    },
});

export const { changeVisible, lastPath, setCurrent } = navbarSlice.actions;

export default navbarSlice.reducer;
