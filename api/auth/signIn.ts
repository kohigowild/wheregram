import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../@common/firebase';
import Router from 'next/router';
import { SetterOrUpdater } from 'recoil';
import { UserInfo } from '@/interfaces/auth';

export const SubmitEmailLogin = (email: string, password: string, setInfo: SetterOrUpdater<UserInfo>) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((data) => {
      setInfo({
        uid: data.user.uid,
        email: data.user.email,
        displayName: data.user.displayName,
        photoURL: data.user.photoURL,
      });
      localStorage.setItem(
        'userInfo',
        JSON.stringify({
          uid: data.user.uid,
          email: data.user.email,
          displayName: data.user.displayName,
          photoURL: data.user.photoURL,
        }),
      );
      Router.push('/');
    })
    .catch((err) => {
      console.log(err);
    });
};

export const SubmitGoogleLogin = (setInfo: SetterOrUpdater<UserInfo>) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((data) => {
      setInfo({
        uid: data.user.uid,
        email: data.user.email,
        displayName: data.user.displayName,
        photoURL: data.user.photoURL,
      });
      localStorage.setItem(
        'userInfo',
        JSON.stringify({
          uid: data.user.uid,
          email: data.user.email,
          displayName: data.user.displayName,
          photoURL: data.user.photoURL,
        }),
      );
      Router.push('/');
    })
    .catch((err) => {
      console.log(err);
    });
};
