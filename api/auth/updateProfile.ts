import { updateProfile } from 'firebase/auth';
import { setDoc, doc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../@common/firebase';
import Router from 'next/router';

export const updateUserInfo = async (uid: string, nickname: string, photoURL: string) => {
  try {
    await updateProfile(auth.currentUser!, { displayName: nickname, photoURL: photoURL });
    const userRef = doc(db, 'user', uid);
    await await updateDoc(userRef, {
      displayName: nickname,
      photoURL: photoURL,
    });
    Router.push('/profile');
  } catch (error) {
    console.log(error);
  }
};

export const addGoogleUserInfo = async (uid: string, email: string, nickname: string, photoURL: string) => {
  try {
    await updateProfile(auth.currentUser!, { displayName: nickname, photoURL: photoURL });
    await setDoc(doc(db, 'user', uid), {
      uid: uid,
      email: email,
      displayName: nickname,
      photoURL: photoURL,
    });
    Router.push('/');
  } catch (error) {
    console.log(error);
  }
};
