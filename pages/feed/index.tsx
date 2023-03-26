import React, { useState, useEffect } from 'react';
import Profile from '@/components/feed/profile';
import CardList from '@/components/@common/cardList';
import { Center, Box } from '@chakra-ui/react';
import { FeedListType } from '@/interfaces/feed';
import { userFeedList } from '@/api/feed/getDoc';
import { useRecoilState } from 'recoil';
import { userInfoState } from '@/states';

export default function Feed() {
  const [userState, setUserState] = useRecoilState(userInfoState);
  const [feedList, setFeedList] = useState<FeedListType[]>([]);

  useEffect(() => {
    userFeedList(userState.uid, setFeedList);
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
