import React, { useState, useEffect } from 'react';
import { Center, Box } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import CardList from '@/components/@common/cardList';
import { searchFeedList } from '@/api/feed/getDoc';
import { FeedListType } from '@/interfaces/feed';

export default function Search() {
  const [feedList, setFeedList] = useState<FeedListType[]>([]);
  const [keyword, setKeyword] = useState<string>('');
  const [debouncedKeyword, setDebouncedKeyword] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(() => {
      return setDebouncedKeyword(keyword);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [keyword]);

  useEffect(() => {
    searchFeedList(keyword, setFeedList);
  }, [debouncedKeyword]);

  return (
    <Center>
      <Box w="300px" padding="3vh 0">
        <Input
          placeholder="장소를 검색하세요."
          focusBorderColor="green.400"
          borderColor="gray.300"
          onChange={(e) => setKeyword(e.target.value)}
          mb="8px"
        />
        <CardList feedList={feedList} />
      </Box>
    </Center>
  );
}
