import React from 'react';
import Image from 'next/image';
import { Title, Desc } from '@/styles/feed/feed';
import { Flex, Box } from '@chakra-ui/react';
import defaultImage from '/public/profile-user.png';
import { profileProps } from '@/interfaces/auth';

export default function Profile({ nickname, photoURL, email }: profileProps) {
  return (
    <Flex align={'center'} mb="20px">
      <Box w={'100px'} h={'100px'} position="relative">
        <Image
          priority
          src={photoURL ? photoURL : defaultImage}
          alt="profileImage"
          fill
          style={{ borderRadius: '50%', objectFit: 'cover', cursor: 'pointer' }}
        />
      </Box>
      <Box ml={'32px'}>
        <Title>{nickname}</Title>
        <Flex>
          <Desc style={{ marginRight: '12px' }}>{email}</Desc>
        </Flex>
      </Box>
    </Flex>
  );
}
