// import { configureStore } from '@reduxjs/toolkit';
// import { contactReducer } from './contactSlice';
// import { filterReducer } from './filterSlice';

// export const store = configureStore({
//   reducer: {
//     contacts: contactReducer,
//     filter: filterReducer,
//   },
// });


import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
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
import { contactsReducer } from '../redux/contacts/slice';
import { authReducer } from './auth/slice';
import { filterReducer } from './filterSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
