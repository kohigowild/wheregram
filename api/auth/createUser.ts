import { createUserWithEmailAndPassword, updateProfile, deleteUser } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from '../@common/firebase';
import Router from 'next/router';

export const createUser = async (email: string, password: string, nickname: string, photoURL: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser!, { displayName: nickname, photoURL: photoURL });
    await setDoc(doc(db, 'user', auth.currentUser!.uid), {
      uid: auth.currentUser!.uid,
      email: email,
      displayName: nickname,
      photoURL: photoURL,
    });
    Router.push('/auth/login');
  } catch (error) {
    console.log(error);
  }
};

export const secessionUser = async () => {
  try {
    await deleteUser(auth.currentUser!);
    Router.push('/auth/login');
  } catch (error) {
    console.log(error);
  }
};
