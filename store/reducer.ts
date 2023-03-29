import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import userSlice from './modules/user';
import likeSlice from './modules/like';

const combinedReducer = combineReducers({
  user: userSlice.reducer,
  like: likeSlice.reducer,
});

const rootReducer: typeof combinedReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};
export default rootReducer;
