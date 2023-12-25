import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './redux/user/userSlice'; // import userSlice默认导出，并取名为userReducer
import authReducer from './redux/user/authSlice';
import navbarReducer from './redux/navbar/navbarSlice';
import basicBarReducer from './redux/navbar/basicbarSlice';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {PersistGate} from 'redux-persist/integration/react'

const persistConfig = {
    key: 'root',
    storage,
    // 黑名单 不缓存的
    blacklist: ['page404']
};


// combineReducers合并reducer
const reducers = combineReducers({
    user: userReducer,
    auth: authReducer,
    navbar: navbarReducer,
    basicBar: basicBarReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers)

export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
});
