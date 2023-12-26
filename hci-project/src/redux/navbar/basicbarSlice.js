import { createSlice } from '@reduxjs/toolkit';

const basicBarSlice = createSlice({
    name: 'basicBar',
    initialState: {
        visible: true,
        path: '/',
        current: ""
    },
    reducers: {
        setBasicCurrent: (state, action) => {
            state.current = action.payload;
            console.log(state.current);
        },
    },
});

export const { setBasicCurrent } = basicBarSlice.actions;

export default basicBarSlice.reducer;
