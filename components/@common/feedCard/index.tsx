import React from 'react';
import Image from 'next/image';
import { Flex, Center, Avatar, Icon, Box } from '@chakra-ui/react';
import { UserName, UserLocation, Bold } from '@/styles/feed/feed';
import { HiLocationMarker, HiStar } from 'react-icons/hi';
import { TiHeartFullOutline } from 'react-icons/ti';
import { FeedListCard } from '@/interfaces/feed';

export default function FeedCard({ card }: FeedListCard) {
  return (
    <Box w="360px" padding="4vh 0" borderRadius="16px" boxShadow="lg" backgroundColor="gray.50" mt="4vh">
      <Box ml="5vw" mr="5vw">
        <Center>
          <Flex w="90vw" mb={4} align="center">
            <Avatar mr={2} />
            <div>
              <UserName>{card.nickname}</UserName>
              <UserLocation>
                <Icon as={HiLocationMarker} mr={1} mt={1} />
                {card.address}
              </UserLocation>
            </div>
          </Flex>
        </Center>
        <Center mb={2}>
          <Image
            src={card.feedImageURL}
            alt={card.address}
            width={300}
            height={300}
            style={{
              borderRadius: '8px',
              objectFit: 'fill',
            }}
          />
        </Center>
        <Center mb={2}>
          <Flex w="90vw" justify="space-between" align="center" color="gray.700">
            좋아요 {card.like} 개
            <Icon as={TiHeartFullOutline} mt={1} w={6} h={6} cursor="pointer" />
          </Flex>
        </Center>
        <Center>
          <Flex w="90vw" mb={2} color="green.400">
            {card.addressDetail}에 <Icon as={HiStar} mt="6px" ml={1} mr={1} /> {card.rating}.0 점을 남겼어요.
          </Flex>
        </Center>
        <Center>
          <Flex w="90vw" mb={2} color="gray.700">
            <Bold>{card.nickname}</Bold> {card.desc}
          </Flex>
        </Center>
      </Box>
    </Box>
  );
}
