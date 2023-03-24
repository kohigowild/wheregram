import { updateProfile } from 'firebase/auth';
import { auth } from '../@common/firebase';
import Router from 'next/router';

export const updateUserInfo = async (nickname: string, photoURL: string) => {
  try {
    await updateProfile(auth.currentUser!, { displayName: nickname, photoURL });
    Router.push('/feed');
  } catch (error) {
    console.log(error);
  }
};
