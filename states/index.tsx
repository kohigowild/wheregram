import { atom } from 'recoil';
import { UserInfo } from '@/interfaces/auth';

export const userInfoState = atom<UserInfo>({
  key: 'userInfoState',
  default: {
    uid: '',
    email: '',
    displayName: '',
    photoURL: '',
  },
});
