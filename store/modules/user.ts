import { createSlice } from '@reduxjs/toolkit';

const initialState: { uid: string; email: string; nickname: string; photoURL: string } = {
  uid: '',
  email: '',
  nickname: '',
  photoURL: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin(state, action) {
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.nickname = action.payload.nickname;
      state.photoURL = action.payload.photoURL;
    },
    setLogout(state) {
      state.uid = '';
      state.email = '';
      state.nickname = '';
      state.photoURL = '';
    },
  },
});

export const { setLogin, setLogout } = userSlice.actions;
export default userSlice;
