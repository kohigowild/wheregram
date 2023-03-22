import React from 'react';
import styled from 'styled-components';
import { Center } from '@chakra-ui/react';
import ImgAddForm from '@/components/auth/ImgAddForm';
import FormInput from '@/components/@common/FormInput';
import FormButton from '@/components/@common/FormButton';

export default function index() {
  const inputProps = {
    id: 0,
    placeholder: 'change nickname',
    value: '',
    readOnly: false,
  };

  const Form = styled.div`
    width: 300px;
    padding: 6vh 0;
  `;

  const Text = styled.p`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textColor};
  `;

  return (
    <Center w="100vw" h="80vh">
      <Form>
        <ImgAddForm />
        <FormInput props={inputProps} />
        <FormButton props={'정보 변경'} />
        <Center mt={6} justifyContent={'space-between'}>
          <Text>로그아웃</Text>
          <Text>회원 탈퇴</Text>
        </Center>
      </Form>
    </Center>
  );
}
