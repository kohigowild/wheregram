import React from 'react';
import styled from 'styled-components';
import { Center } from '@chakra-ui/react';
import FormInput from '@/components/@common/formInput';
import FormButton from '@/components/@common/formButton';
import ImgAddForm from '@/components/auth/ImgAddForm';

export default function SignUp() {
  const SignUpForm = [
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
    {
      id: 2,
      placeholder: 'confirm password',
      value: '',
      readOnly: false,
    },
    {
      id: 3,
      placeholder: 'nickname',
      value: '',
      readOnly: false,
    },
  ];

  const Form = styled.div`
    width: 300px;
    padding: 6vh 0;
  `;

  return (
    <Center>
      <Form>
        <ImgAddForm />
        {SignUpForm.map((props) => (
          <FormInput props={props} key={props.id} />
        ))}
        <FormButton props={'회원가입'} />
      </Form>
    </Center>
  );
}
