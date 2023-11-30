import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice'; // import userSlice默认导出，并取名为userReducer
import authReducer from './features/user/authSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
    },
});
