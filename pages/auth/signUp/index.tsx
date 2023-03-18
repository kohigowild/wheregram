import React from 'react';
import styled from 'styled-components';
import { Center } from '@chakra-ui/react';
import FormInput from '@/components/@common/formInput';
import FormButton from '@/components/@common/formButton';

export default function SignUp() {
  const SignUpForm = [
    {
      id: 0,
      placeholder: 'email',
    },
    {
      id: 1,
      placeholder: 'password',
    },
    {
      id: 2,
      placeholder: 'confirm password',
    },
    {
      id: 3,
      placeholder: 'nickname',
    },
  ];

  const Form = styled.div`
    width: 240px;
    padding: 6vh 0;
  `;

  return (
    <Center>
      <Form>
        {SignUpForm.map((props) => (
          <FormInput props={props} key={props.id} />
        ))}
        <FormButton props={'회원가입'} />
      </Form>
    </Center>
  );
}
