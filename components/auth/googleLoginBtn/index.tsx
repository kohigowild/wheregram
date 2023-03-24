import React from 'react';
import Image from 'next/image';
import { Center } from '@chakra-ui/react';
import { GoogleLogin } from '@/styles/auth/login';
import GoogleIcon from '/public/google-icon.png';
import { useRecoilState } from 'recoil';
import { userInfoState } from '@/states';
import { SubmitGoogleLogin } from '@/api/auth/signIn';

export default function GoogleLoginBtn() {
  const [userState, setUserState] = useRecoilState(userInfoState);

  const handleGoogleLogin = () => {
    SubmitGoogleLogin(setUserState);
    console.log(userState);
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
