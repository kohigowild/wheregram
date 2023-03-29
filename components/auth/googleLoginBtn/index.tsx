import React from 'react';
import Image from 'next/image';
import Router from 'next/router';
import { RootState } from '@/store';
import { useAppSelector } from '@/store';
import { Center } from '@chakra-ui/react';
import { GoogleLogin } from '@/styles/auth/login';
import GoogleIcon from '/public/google-icon.png';
import { SubmitGoogleLogin } from '@/api/auth/signIn';
import { setLogin } from '@/store/modules/user';
import { useAppDispatch } from '@/store';

export default function GoogleLoginBtn() {
  const nickname = useAppSelector((state: RootState) => state.user.uid);
  const dispatch = useAppDispatch();

  const handleGoogleLogin = async () => {
    try {
      const result = await SubmitGoogleLogin();
      dispatch(
        setLogin({
          uid: result.uid,
          email: result.email,
          nickname: result.displayName,
          photoURL: result.photoURL ? result.photoURL : '',
        }),
      );
      await Router.push(nickname === '' ? '/' : '/loading');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GoogleLogin onClick={handleGoogleLogin}>
      <Center>
        <Image
          src={GoogleIcon}
          alt="Google 계정으로 로그인"
          style={{ width: '16px', height: '16px', position: 'absolute', left: '16px' }}
        />
        Sign in with Google
      </Center>
    </GoogleLogin>
  );
}
