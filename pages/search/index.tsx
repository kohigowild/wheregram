import React from 'react';
import styled from 'styled-components';
import { Center } from '@chakra-ui/react';
import FormInput from '@/components/@common/formInput';
import CardList from '@/components/@common/cardList';

export default function Search() {
  const searchProps = {
    id: 0,
    placeholder: '검색어를 입력하세요.',
    value: '',
    readOnly: false,
  };

  const Form = styled.div`
    width: 300px;
    padding: 3vh 0;
  `;

  return (
    <Center>
      <Form>
        <FormInput props={searchProps} />
        <CardList />
      </Form>
    </Center>
  );
}
