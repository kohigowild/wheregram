import React, { useState, useEffect } from 'react';
import { Title, Desc } from '@/styles/feed/feed';
import Image from 'next/image';
import { Flex, Box, Badge } from '@chakra-ui/react';
import defaultImage from '/public/profile-user.png';

export default function Profile() {
  const [nickname, setNickname] = useState<string>('');
  const [photoURL, setPhotoURL] = useState<string>('');

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      const parsedUserInfo = JSON.parse(userInfo);
      setNickname(parsedUserInfo.displayName);
      setPhotoURL(parsedUserInfo.photoURL);
    }
  }, []);

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
          <Desc style={{ marginRight: '12px' }}>
            게시글
            <Badge ml="1" variant="solid" colorScheme="green">
              12
            </Badge>
          </Desc>
          <Desc>
            좋아요
            <Badge ml="1" variant="solid" colorScheme="green">
              12
            </Badge>
          </Desc>
        </Flex>
      </Box>
    </Flex>
  );
}
