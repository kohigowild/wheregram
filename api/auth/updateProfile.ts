import { updateProfile } from 'firebase/auth';
import { auth } from '../@common/firebase';
import Router from 'next/router';

export const updateUserInfo = async (nickname: string, photoURL: string, uid: string, email: string) => {
  try {
    await updateProfile(auth.currentUser!, { displayName: nickname, photoURL: photoURL });
    localStorage.setItem(
      'userInfo',
      JSON.stringify({
        uid: uid,
        email: email,
        displayName: nickname,
        photoURL: photoURL,
      }),
    );
    Router.push('/feed');
  } catch (error) {
    console.log(error);
  }
};
