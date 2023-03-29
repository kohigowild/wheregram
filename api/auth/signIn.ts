import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../@common/firebase';

export const SubmitEmailLogin = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password).then((data) => {
    console.log(data.user);
    return data.user;
  });
};

export const SubmitGoogleLogin = async () => {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider).then((data) => {
    console.log(data.user);
    return data.user;
  });
};
