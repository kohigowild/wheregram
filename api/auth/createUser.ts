import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../@common/firebase';
import Router from 'next/router';

export const createUser = async (email: string, password: string, nickname: string, photoURL: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser!, { displayName: nickname, photoURL: photoURL });
    Router.push('/auth/login');
  } catch (error) {
    console.log(error);
  }
};
