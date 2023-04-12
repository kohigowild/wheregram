import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/store';
import { RootState } from '@/store';
import { setLike } from '@/store/modules/like';
import { getMainDoc } from '@/api/feed/getDoc';
import { getLikeFeed } from '@/api/feed/likeFeed';
import { Center } from '@chakra-ui/react';
import { Container, Title, SlideTrack, Desc, Logo } from '@/styles/root/root';
import FeedCard from '@/components/@common/feedCard';
import Carousel from '@/components/@common/carousel';
import { FeedListType } from '@/interfaces/feed';

function Home() {
  const dispatch = useAppDispatch();
  const uid: string = useAppSelector((state: RootState) => state.user.uid);
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
        <Container>
          <Title>
            <div>
              <Desc>여행 후기 공유 플랫폼</Desc>
              <Logo>#WHEREGRAM</Logo>
            </div>
          </Title>
          <SlideTrack>
            <Carousel loop>
              {cardInfo.map((card) => {
                return (
                  <div key={card.docId} style={{ display: 'flex', position: 'relative' }}>
                    <FeedCard card={card} comment={false} />
                  </div>
                );
              })}
            </Carousel>
          </SlideTrack>
        </Container>
      </Center>
    </>
  );
}

export default Home;
