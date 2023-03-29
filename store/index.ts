import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import rootReducer from './reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'like'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [],
  devTools: process.env.NODE_ENV === 'development',
});

const makeStore = () => {
  return store;
};

const wrapper = createWrapper(makeStore);

type AppStore = ReturnType<typeof makeStore>;
type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = useSelector;
export default wrapper;
