import React from 'react';
import styled from 'styled-components';
import Profile from '@/components/feed/profile';
import CardList from '@/components/@common/cardList';
import { Center } from '@chakra-ui/react';

export default function Feed() {
  const Form = styled.div`
    width: 300px;
    padding: 3vh 0;
  `;

  return (
    <Center>
      <Form>
        <Profile />
        <CardList />
      </Form>
    </Center>
  );
}
