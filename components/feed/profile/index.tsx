import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Flex, Box, Badge } from '@chakra-ui/react';
import defaultImage from '/public/profile-user.png';

export default function Profile() {
  const [imagePreview, setImagePreview] = useState<any>(defaultImage);

  const Title = styled.div`
    margin-bottom: 12px;
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textColor};
  `;

  const Desc = styled.div`
    display: flex;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textColor};
  `;

  return (
    <Flex align={'center'}>
      <Box w={'100px'} h={'100px'} position="relative">
        <Image
          priority
          src={imagePreview}
          alt="profileImage"
          fill
          style={{ borderRadius: '50%', objectFit: 'cover', cursor: 'pointer' }}
        />
      </Box>
      <Box ml={'32px'}>
        <Title>trustmitt</Title>
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
