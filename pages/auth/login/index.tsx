import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Center } from '@chakra-ui/react';
import FormInput from '@/components/@common/formInput';
import FormButton from '@/components/@common/formButton';
import GoogleLoginBtn from '@/components/auth/googleLoginBtn';

export default function Login() {
  const LoginForm = [
    {
      id: 0,
      placeholder: 'email',
      value: '',
      readOnly: false,
    },
    {
      id: 1,
      placeholder: 'password',
      value: '',
      readOnly: false,
    },
  ];

  const Form = styled.div`
    width: 300px;
    padding: 6vh 0;
  `;

  const Title = styled.div`
    margin-bottom: 4vh;
    text-align: center;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textColor};
  `;

  const GoToSignUp = styled.div`
    margin-top: 4vh;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textColor};
  `;

  return (
    <Center w="100vw" h="80vh">
      <Form>
        <Title>
          서비스를 이용하시려면
          <span style={{ color: '#48BB78', marginLeft: '4px' }}>로그인</span> 하세요.
        </Title>
        {LoginForm.map((props) => (
          <FormInput props={props} key={props.id} />
        ))}
        <FormButton props={'이메일 계정으로 로그인'} />
        <GoogleLoginBtn />
        <GoToSignUp>
          <p>아직 계정이 없으신가요?</p>
          <Link href="/auth/signUp">
            <p style={{ fontWeight: '600' }}>회원가입</p>
          </Link>
        </GoToSignUp>
      </Form>
    </Center>
  );
}
