import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Center } from '@chakra-ui/react';
import GoogleIcon from '/public/google-icon.png';

export default function GoogleLoginBtn() {
  const GoogleLogin = styled.button`
    position: relative;
    margin-top: 20px;
    width: 300px;
    height: 40px;
    border-radius: 12px;
    border: 0;
    font-size: 14px;
    transition: all 0.3s ease;
    background-color: white;
    color: ${({ theme }) => theme.colors.textColor};
    box-shadow: #edf2f7 0px 10px 0px 0px;

    &:active {
      background-color: white;
      box-shadow: #e2e8f0 0px 0px 0px 0px;
      transform: translateY(5px);
      transition: 200ms;
    }
  `;

  return (
    <GoogleLogin>
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
