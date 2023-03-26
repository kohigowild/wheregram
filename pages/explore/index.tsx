import React, { useState, useEffect } from 'react';
import { Center, Box } from '@chakra-ui/react';
import FeedCard from '@/components/@common/feedCard';
import { getExploreDoc } from '@/api/feed/getDoc';
import { FeedListType } from '@/interfaces/feed';

export default function Explore() {
  const [feedList, setFeedList] = useState<FeedListType[]>([]);

  useEffect(() => {
    getExploreDoc(setFeedList);
  }, []);

  // 연동 후 무한 스크롤 구현
  return (
    <Center>
      <Box w="360px" padding="3vh 0">
        {feedList.map((card, index) => (
          <FeedCard card={card} comment={true} key={index} />
        ))}
      </Box>
    </Center>
  );
}
