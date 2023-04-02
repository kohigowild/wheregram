import { updateProfile } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../@common/firebase';
import Router from 'next/router';

export const updateUserInfo = async (uid: string, nickname: string, photoURL: string) => {
  try {
    await updateProfile(auth.currentUser!, { displayName: nickname, photoURL: photoURL });
    const userRef = doc(db, 'user', uid);
    await updateDoc(userRef, {
      displayName: nickname,
      photoURL: photoURL,
    });
    Router.push('/profile');
  } catch (error) {
    console.log(error);
  }
};
