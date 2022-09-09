import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { contactsApi } from './contact/contsctsApi';
import { filterSlice } from './contact/contactsFilter';
import  authSlice from './authUser/authUserReduser';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};


export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice.reducer),
    filter: filterSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
   middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware),
});


setupListeners(store.dispatch);
export const persistor = persistStore(store);


