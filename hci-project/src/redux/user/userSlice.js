import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: sessionStorage.getItem('userId'),
        username: sessionStorage.getItem('username'),
        description: sessionStorage.getItem('description'),
        email: 'default@test.com',
        level: 0,
        avatarUrl: 'http://dummyimage.com/200x100/894FC4/FFF.png&text=!',
        cardBackgroundUrl: 'http://dummyimage.com/200x100/894FC4/FFF.png&text=!',
        privateFavorites: [],
        publicFavorites: [],
        followers: 0,
        following: 0,
        gameInventory: [],
        gameRecords: [],
    },
    reducers: {
        fetchUserSuccess: (state, action) => {

            sessionStorage.setItem('userId', action.payload.id);
            sessionStorage.setItem('username', action.payload.username);
            sessionStorage.setItem('description', action.payload.description);
            return action.payload;
        },
        setUserId: (state, action) => {
            state.id = action.payload;
        },
    },
});

export const { setUserId, fetchUserSuccess } = userSlice.actions;
export default userSlice.reducer;
