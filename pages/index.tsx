import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/store';
import { RootState } from '@/store';
import { setLike } from '@/store/modules/like';
import { getMainDoc } from '@/api/feed/getDoc';
import { getLikeFeed } from '@/api/feed/likeFeed';
import { Container, Title, SlideTrack, Desc, Logo } from '@/styles/root/root';
import { Landing } from '@/styles/@common/header';
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
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Welcome to Wheregram." />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Landing>
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
      </Landing>
    </>
  );
}

export default Home;
