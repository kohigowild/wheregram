import React, { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Center, Box } from '@chakra-ui/react';
import { Title, GoToSignUp } from '@/styles/auth/login';
import AuthInput from '@/components/auth/authInput';
import FormButton from '@/components/@common/formButton';
import GoogleLoginBtn from '@/components/auth/googleLoginBtn';
import { SubmitEmailLogin } from '@/api/auth/signIn';
import { setLogin } from '@/store/modules/user';
import { useAppDispatch } from '@/store';

export default function Login() {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const registerEmail = (str: string) => {
    setEmail(str);
  };

  const registerPassword = (str: string) => {
    setPassword(str);
  };

  const LoginForm = [
    {
      id: 0,
      placeholder: 'email',
      type: 'text',
      value: email,
      setValue: registerEmail,
    },
    {
      id: 1,
      placeholder: 'password',
      type: 'password',
      value: password,
      setValue: registerPassword,
    },
  ];

  const signInWithEmail = async () => {
    try {
      const result = await SubmitEmailLogin(email, password);
      dispatch(
        setLogin({
          uid: result.uid,
          email: result.email,
          nickname: result.displayName,
          photoURL: result.photoURL,
        }),
      );
      Router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Center w="100vw" h="80vh">
      <Box w="300px" padding="6vh 0">
        <Title>
          서비스를 이용하시려면
          <span style={{ color: '#48BB78', marginLeft: '4px' }}>로그인</span> 하세요.
        </Title>
        {LoginForm.map((item) => (
          <AuthInput key={item.id} item={item} />
        ))}
        <FormButton props={'이메일 계정으로 로그인'} event={signInWithEmail} disabled={false} />
        <GoogleLoginBtn />
        <GoToSignUp>
          <p>아직 계정이 없으신가요?</p>
          <Link href="/auth/signup">
            <p style={{ fontWeight: '600' }}>회원가입</p>
          </Link>
        </GoToSignUp>
      </Box>
    </Center>
  );
}
