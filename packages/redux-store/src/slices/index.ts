import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth.slice';

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistConfig = {
  key: 'geCon-Admin',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
