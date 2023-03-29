import React, { useState } from 'react';
import Image from 'next/image';
import Router from 'next/router';
import { Center } from '@chakra-ui/react';
import { GoogleLogin } from '@/styles/auth/login';
import { getUserInfo } from '@/api/auth/getUserInfo';
import GoogleIcon from '/public/google-icon.png';
import { SubmitGoogleLogin } from '@/api/auth/signIn';
import { setLogin } from '@/store/modules/user';
import { useAppDispatch } from '@/store';

export default function GoogleLoginBtn() {
  const dispatch = useAppDispatch();
  const [handleLogin, setHandleLogin] = useState<any>('');

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
      await getUserInfo(result.uid, setHandleLogin);
      Router.push(handleLogin ? '/' : '/loading');
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
