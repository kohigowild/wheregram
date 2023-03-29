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
  const [feedList, setFeedList] = useState<FeedListType[]>([]);

  useEffect(() => {
    userFeedList(uid, setFeedList);
  }, []);

  return (
    <Center>
      <Box w="300px" padding="1vh 0">
        <Profile />
        <CardList feedList={feedList} />
      </Box>
    </Center>
  );
}
