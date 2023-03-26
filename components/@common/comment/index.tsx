import React from 'react';
import { Input } from '@chakra-ui/react';
import { Flex, Button } from '@chakra-ui/react';

export default function Comment() {
  return (
    <Flex>
      <Input placeholder="댓글을 입력해 주세요." focusBorderColor="green.400" borderColor="gray.400" />
      <Button colorScheme="green" ml="8px">
        등록
      </Button>
    </Flex>
  );
}
