import Head from 'next/head';
import { Badge } from '@chakra-ui/react';
import { Container, Title, SlideTrack, Desc } from '@/styles/root/root';
import { Landing } from '@/styles/@common/header';
import Carousel from '@/components/@common/carousel';

function Home() {
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
              <Badge variant="subtle" colorScheme="green" borderRadius="12px" mb="4px" mr="4px">
                #관광 명소
              </Badge>
              부터
              <Badge variant="subtle" colorScheme="green" borderRadius="12px" mb="4px" ml="4px" mr="4px">
                #맛집
              </Badge>
              까지
              <Desc>모든 체험을 기록하고 공유하세요!</Desc>
            </div>
          </Title>
          <SlideTrack>
            <Carousel />
          </SlideTrack>
        </Container>
      </Landing>
    </>
  );
}

export default Home;
