import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice'; // import userSlice默认导出，并取名为userReducer

export default configureStore({
    reducer: {
        user: userReducer,
    },
});
