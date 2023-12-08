import {createSlice} from '@reduxjs/toolkit';
import {useLocation} from "react-router-dom";

const navbarSlice = createSlice({
        name: "navbar",
        initialState: {
            visible: true
        },
        reducers: {
            changeVisible: (state, action) => {
                console.log(state.visible)
                state.visible = action.payload
                console.log(state.visible)
            },
        },
    }
)

export const {changeVisible} = navbarSlice.actions;

export default navbarSlice.reducer;