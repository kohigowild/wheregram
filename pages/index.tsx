import Head from 'next/head';
import styled, { keyframes } from 'styled-components';
import { Center, Tag } from '@chakra-ui/react';
import FeedCard from '@/components/@common/feedCard';
import { notoSansKrMedium } from '@/styles/@common/font/notoSansKr';
import lunch from '/public/images/lunch.jpg';
import pool from '/public/images/pool.jpg';
import flower from '/public/images/flower.jpg';
import tako from '/public/images/tako.jpg';

function Home() {
  const Slide = keyframes`
  5% {
    transform: translateX(0)
  }
  40% {
    transform: translateX(-100%)
  }
  70% {
    transform: translateX(-200%)
  }
  100% {
    transform: translateX(-300%)
  }
`;

  const Title = styled.div`
    padding: 6vh 0;
    text-align: center;
    color: ${({ theme }) => theme.colors.textColor};
    font-family: ${notoSansKrMedium.style.fontFamily};
    font-size: 16px;
  `;

  const SlideTrack = styled.div`
    position: relative;
    overflow: hidden;
    width: 360px;
  `;

  const SlideList = styled.div`
    display: flex;
    animation: ${Slide} 12s 2s alternate infinite;
  `;

  const Form = styled.div`
    width: 360px;
    padding: 3vh 0;
  `;

  const CardInfo = [
    {
      id: 0,
      name: 'trustmitt',
      location: '전라남도 여수시',
      img: pool,
      like: 34,
      rating: '4.0',
      desc: '좋아요',
    },
    {
      id: 1,
      name: 'trustmitt',
      location: '전라남도 여수시',
      img: lunch,
      like: 34,
      rating: '4.0',
      desc: '좋아요',
    },
    {
      id: 2,
      name: 'trustmitt',
      location: '전라남도 여수시',
      img: flower,
      like: 34,
      rating: '4.0',
      desc: '좋아요',
    },
    {
      id: 3,
      name: 'trustmitt',
      location: '전라남도 여수시',
      img: tako,
      like: 34,
      rating: '4.0',
      desc: '좋아요',
    },
  ];

  return (
    <>
      <Head>
        <title>#wheregram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center>
        <Form>
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
                {CardInfo.map((card) => (
                  <FeedCard card={card} key={card.id} />
                ))}
              </Center>
            </SlideList>
          </SlideTrack>
        </Form>
      </Center>
    </>
  );
}

export default Home;
