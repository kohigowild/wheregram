import React, { useState, useEffect } from 'react';
import { RootState } from '@/store';
import { useAppSelector, useAppDispatch } from '@/store';
import { setLike } from '@/store/modules/like';
import { getLikeFeed } from '@/api/feed/likeFeed';
import { Center, Box } from '@chakra-ui/react';
import FeedCard from '@/components/@common/feedCard';
import { getExploreDoc } from '@/api/feed/getDoc';
import { FeedListType } from '@/interfaces/feed';

export default function Explore() {
  const dispatch = useAppDispatch();
  const uid = useAppSelector((state: RootState) => state.user.uid);
  const [feedList, setFeedList] = useState<FeedListType[]>([]);

  const getLikeList = async () => {
    try {
      const result = await getLikeFeed(uid);
      dispatch(setLike(result));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getExploreDoc(setFeedList);
    getLikeList();
  }, []);

  // 연동 후 무한 스크롤 구현
  return (
    <Center>
      <Box padding="2vh 0">
        {feedList.map((card, index) => (
          <FeedCard card={card} comment={true} key={index} />
        ))}
      </Box>
    </Center>
  );
}
