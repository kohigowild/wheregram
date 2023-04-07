import Head from 'next/head';
import { useState, useEffect } from 'react';
import { RootState } from '@/store';
import { useAppSelector, useAppDispatch } from '@/store';
import { setLike } from '@/store/modules/like';
import { getMainDoc } from '@/api/feed/getDoc';
import { getLikeFeed } from '@/api/feed/likeFeed';
import { Center, Tag, Box } from '@chakra-ui/react';
import { Title, SlideList, SlideTrack } from '@/styles/root/root';
import FeedCard from '@/components/@common/feedCard';
import { FeedListType } from '@/interfaces/feed';

function Home() {
  const dispatch = useAppDispatch();
  const uid = useAppSelector((state: RootState) => state.user.uid);
  const [cardInfo, setCardInfo] = useState<FeedListType[]>([]);

  const getLikeList = async () => {
    try {
      const result = await getLikeFeed(uid);
      dispatch(setLike(result));
    } catch (error) {
      console.log(error);
    }
  };

  const getQ = async () => {
    try {
      const result: any = await getMainDoc();
      setCardInfo(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQ();
    getLikeList();
  }, []);

  return (
    <>
      <Head>
        <title>#wheregram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center>
        <Box>
          <Title>
            <p style={{ marginBottom: '4px' }}>
              <Tag colorScheme="green" borderRadius="full" m="0 4px">
                #관광 명소
              </Tag>
              부터
              <Tag colorScheme="green" borderRadius="full" m="0 4px">
                #맛집
              </Tag>
              까지
            </p>
            <p>모든 체험을 기록하고 공유하세요.</p>
          </Title>
          <SlideTrack>
            <SlideList>
              <Center>
                {cardInfo.map((card) => (
                  <FeedCard card={card} comment={false} key={card.docId} />
                ))}
              </Center>
            </SlideList>
          </SlideTrack>
        </Box>
      </Center>
    </>
  );
}

export default Home;
