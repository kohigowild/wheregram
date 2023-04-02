import React from 'react';
import Image from 'next/image';
import { Title, Desc } from '@/styles/feed/feed';
import { Center, Box } from '@chakra-ui/react';
import defaultImage from '/public/profile-user.png';
import { profileProps } from '@/interfaces/auth';

export default function Profile({ nickname, photoURL, email }: profileProps) {
  return (
    <Center mb="20px">
      <Box w="100px" h="100px" position="relative">
        <Image
          priority
          src={photoURL ? photoURL : defaultImage}
          alt="profileImage"
          fill
          sizes="100px"
          style={{ borderRadius: '50%', objectFit: 'cover', cursor: 'pointer' }}
        />
      </Box>
      <Box ml={'32px'}>
        <Title>{nickname}</Title>
        <Desc style={{ marginRight: '12px' }}>{email}</Desc>
      </Box>
    </Center>
  );
}
