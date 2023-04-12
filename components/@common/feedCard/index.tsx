import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';
import { RootState } from '@/store';
import { useAppSelector } from '@/store';
import { likeFeed, unLikeFeed } from '@/api/feed/likeFeed';
import { deleteFeed } from '@/api/feed/deleteDoc';
import { Flex, Center, Icon, Box, useToast, CloseButton } from '@chakra-ui/react';
import { UserName, UserLocation, Bold } from '@/styles/feed/feed';
import { HiLocationMarker, HiStar } from 'react-icons/hi';
import { TiHeartFullOutline } from 'react-icons/ti';
import defaultImage from '/public/profile-user.png';
import defaultFeedImage from '/public/default-img.png';
import Comment from '../comment';
import { FeedListCard } from '@/interfaces/feed';

export default function FeedCard({ card, comment }: FeedListCard) {
  const toast = useToast();
  const uid = useAppSelector((state: RootState) => state.user.uid);
  const likelist = useAppSelector((state: RootState) => state.like);
  const [sendLike, setSendLike] = useState<boolean>(false);
  const [getLike, setGetLike] = useState<number>(card.like);

  const handleFeedLike = () => {
    uid !== '' ? likeFeed(uid, card.docId, getLike + 1) : Router.push('/auth/login');
    setGetLike(getLike + 1);
  };

  const handleFeedUnlike = () => {
    setGetLike(getLike - 1);
    unLikeFeed(uid, card.docId, getLike - 1);
  };

  const handleLike = () => {
    setSendLike(!sendLike);
    {
      sendLike ? handleFeedUnlike() : handleFeedLike();
    }
  };

  const handleFeedDelete = () => {
    deleteFeed(uid, card.docId);
    toast({
      title: '삭제 알림',
      description: '피드를 삭제했습니다.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    Router.push('/profile');
  };

  useEffect(() => {
    likelist.map((el: any) => {
      el.docId === card.docId && setSendLike(true);
    });
  });

  return (
    <Box w="360px" padding="4vh 0" borderRadius="16px" boxShadow="lg" backgroundColor="gray.50" m="10px">
      <Box ml="30px" mr="30px">
        <Center position="relative">
          <Flex w="90vw" mb={4} align="center">
            <Box position="relative" w="56px" h="56px" mr="12px">
              <Image
                src={card.profileURL ? card.profileURL : defaultImage}
                alt={card.nickname}
                fill
                sizes="56px"
                style={{
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
            </Box>
            <Box>
              <Link href={uid !== '' ? `/profile/${card.uid}` : '/auth/login'}>
                <UserName>{card.nickname}</UserName>
              </Link>
              <UserLocation>
                <Icon as={HiLocationMarker} mr={1} mt={1} />
                {card.address ? card.address : '장소를 입력하지 않았습니다.'}
              </UserLocation>
            </Box>
          </Flex>
          {card.uid === uid && (
            <CloseButton size="sm" position="absolute" top="8px" right="8px" onClick={handleFeedDelete} />
          )}
        </Center>
        <Center mb={2} w="300px" h="300px" position={'relative'}>
          <Image
            src={card.feedImageURL ? card.feedImageURL : defaultFeedImage}
            alt={card.address}
            fill
            sizes="300px"
            style={{
              borderRadius: '8px',
              objectFit: 'cover',
            }}
          />
        </Center>
        <Center mb="4px">
          <Flex w="90vw" justify="space-between" align="center" color="gray.700" fontSize="14px">
            좋아요 {getLike} 개
            <Icon
              as={TiHeartFullOutline}
              mt={1}
              w={6}
              h={6}
              cursor="pointer"
              color={sendLike ? 'green.400' : 'gray.400'}
              onClick={handleLike}
            />
          </Flex>
        </Center>
        <Center>
          <Flex w="90vw" mb={2} color="green.400" fontSize="14px">
            {card.addressDetail ? card.addressDetail : '이 장소'}에 <Icon as={HiStar} mt="6px" ml={1} mr={1} />{' '}
            {card.rating}.0 점을 남겼어요.
          </Flex>
        </Center>
        <Center>
          <Flex w="90vw" mb={2} color="gray.700" fontSize="14px">
            <Link href={`/profile/${card.uid}`}>
              <Bold>{card.nickname}</Bold>
            </Link>
            {card.desc}
          </Flex>
        </Center>
        {comment && <Comment docId={card.docId} key={card.docId} />}
      </Box>
    </Box>
  );
}
