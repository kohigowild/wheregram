import React, { useState, useEffect } from 'react';
import { RootState } from '@/store';
import { useAppSelector } from '@/store';
import Profile from '@/components/profile/profileForm';
import CardList from '@/components/@common/cardList';
import { Center, Box } from '@chakra-ui/react';
import { FeedListType } from '@/interfaces/feed';
import { userFeedList } from '@/api/feed/getDoc';

export default function Feed() {
  const uid = useAppSelector((state: RootState) => state.user.uid);
  const nickname = useAppSelector((state: RootState) => state.user.nickname);
  const email = useAppSelector((state: RootState) => state.user.email);
  const photoURL = useAppSelector((state: RootState) => state.user.photoURL);
  const [feedList, setFeedList] = useState<FeedListType[]>([]);

  useEffect(() => {
    userFeedList(uid, setFeedList);
  }, []);

  return (
    <Center>
      <Box w="300px" padding="6vh 0">
        <Profile nickname={nickname} photoURL={photoURL} email={email} />
        <CardList feedList={feedList} />
      </Box>
    </Center>
  );
}
