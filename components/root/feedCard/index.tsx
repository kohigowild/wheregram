import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Flex, Center, Avatar, Icon, Box } from '@chakra-ui/react';
import { HiLocationMarker, HiStar } from 'react-icons/hi';
import { TiHeartFullOutline } from 'react-icons/ti';
import { FeedDataArray } from '@/interfaces/feed';

export default function FeedCard({ card }: FeedDataArray) {
  const UserName = styled.div`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.textColor};
  `;

  const Bold = styled.div`
    font-weight: 600;
    margin-right: 4px;
  `;

  const UserLocation = styled.div`
    font-size: 12px;
    color: #adb5bd;
  `;

  return (
    <Box mb={4} ml="5vw" mr="5vw">
      <Center>
        <Flex w="90vw" mb={4} align="center">
          <Avatar mr={2} />
          <div>
            <UserName>{card.name}</UserName>
            <UserLocation>
              <Icon as={HiLocationMarker} mr={1} mt={1} />
              {card.location}
            </UserLocation>
          </div>
        </Flex>
      </Center>
      <Center mb={2}>
        <Image
          src={card.img}
          alt={card.name}
          style={{ width: '90vw', height: '90vw', borderRadius: '8px', objectFit: 'cover' }}
        />
      </Center>
      <Center mb={2}>
        <Flex w="90vw" justify="space-between" align="center" color="gray.700">
          좋아요 {card.like} 개
          <Icon as={TiHeartFullOutline} mt={1} w={6} h={6} />
        </Flex>
      </Center>
      <Center>
        <Flex w="90vw" mb={2} color="green.400">
          이 장소에 <Icon as={HiStar} mt="6px" ml={1} mr={1} /> {card.rating} 점을 남겼어요.
        </Flex>
      </Center>
      <Center>
        <Flex w="90vw" mb={2} color="gray.700">
          <Bold>{card.name}</Bold> {card.desc}
        </Flex>
      </Center>
    </Box>
  );
}
