import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        description: '',
        level: 0,
        avatarUrl: '',
        cardBackgroundUrl: '',
        privateFavorites: [],
        publicFavorites: [],
        followers: 0,
        following: 0,
        gameInventory: [],
        gameRecords: [],
    },
    reducers: {
        fetchUserSuccess: (state, action) => {
            return action.payload;
        },
        fetchUserFailure: (state) => {
            state.user = null;
        },
    },
});

export const { fetchUserFailure, fetchUserSuccess, login, logout } = userSlice.actions;
export default userSlice.reducer;
