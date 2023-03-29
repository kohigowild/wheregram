import { createSlice } from '@reduxjs/toolkit';

const initialState: string[] = [];

const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    setLike: (state, action) => {
      return [...action.payload];
    },
    initLike: (state) => {
      return initialState;
    },
  },
});

export const { setLike, initLike } = likeSlice.actions;
export default likeSlice;
