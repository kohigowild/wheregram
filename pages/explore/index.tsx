import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { RootState } from '@/store';
import { useAppSelector, useAppDispatch } from '@/store';
import { setLike } from '@/store/modules/like';
import { getLikeFeed } from '@/api/feed/likeFeed';
import { Center, Box, Spinner, Alert, AlertIcon } from '@chakra-ui/react';
import FeedCard from '@/components/@common/feedCard';
import { getExploreDoc, getMoreExploreDoc } from '@/api/feed/getDoc';
import { FeedListType } from '@/interfaces/feed';

export default function Explore() {
  const dispatch = useAppDispatch();
  const uid = useAppSelector((state: RootState) => state.user.uid);
  const [feedList, setFeedList] = useState<FeedListType[]>([]);
  const [key, setKey] = useState<any>(null);
  const [isLast, setIsLast] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [ref, inView] = useInView();

  const getLikeList = async () => {
    try {
      const result = await getLikeFeed(uid);
      dispatch(setLike(result));
    } catch (error) {
      console.log(error);
    }
  };

  const getFirstQ = async () => {
    try {
      const result: any = await getExploreDoc(setKey);
      setFeedList(result);
    } catch (error) {
      console.log(error);
    }
  };

  const getMoreQ = async () => {
    try {
      setLoading(true);
      const result: any = await getMoreExploreDoc(key, setKey);
      setFeedList([...feedList, ...result]);
      setLoading(false);
      {
        !result.length && setIsLast(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFirstQ();
    getLikeList();
  }, []);

  useEffect(() => {
    if (!key) return;

    if (inView && !loading) {
      getMoreQ();
    }
  }, [inView]);

  return (
    <Center>
      <Box padding="2vh 0">
        {feedList.map((card, index) => (
          <FeedCard card={card} comment={true} key={index} />
        ))}
        <Center>
          {!isLast && !loading && (
            <Spinner ref={ref} thickness="4px" speed="0.65s" emptyColor="gray.200" color="green.400" size="xl" />
          )}
        </Center>
        <Center>
          {isLast && (
            <Alert status="success" mt="16px">
              <AlertIcon />
              마지막 피드입니다.
            </Alert>
          )}
        </Center>
      </Box>
    </Center>
  );
}
