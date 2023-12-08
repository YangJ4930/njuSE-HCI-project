import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: 1,
        username: 'default',
        description: '这个人很懒，什么都没有留下',
        email: 'default@test.com',
        level: 0,
        avatarUrl: "http://dummyimage.com/200x100/894FC4/FFF.png&text=!",
        cardBackgroundUrl: "http://dummyimage.com/200x100/894FC4/FFF.png&text=!",
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
        setUserId: (state, action) => {
            state.id = action.payload;
        }
    },
});

export const {setUserId, fetchUserSuccess} = userSlice.actions;
export default userSlice.reducer;
