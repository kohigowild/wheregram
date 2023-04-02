import Head from 'next/head';
import { Center, Tag, Box } from '@chakra-ui/react';
import { Title, SlideList, SlideTrack } from '@/styles/root/root';
import FeedCard from '@/components/@common/feedCard';

function Home() {
  const CardInfo = [
    {
      docId: '0',
      address: '전라남도 여수시',
      addressDetail: '여기가 어디지',
      createAt: '',
      desc: '제발 살려줘',
      feedImageURL: 'https://i.pinimg.com/564x/44/cd/31/44cd31ca061bf9ea5e3b424490f50a73.jpg',
      like: 392,
      nickname: '탈락도ROcK이다',
      profileURL: 'https://i.pinimg.com/564x/79/50/5b/79505b031fb97b848044ad0f4935cd98.jpg',
      rating: 3,
      uid: 'a',
    },
    {
      docId: '2',
      address: '충청북도 파리',
      addressDetail: '에펠탑',
      createAt: '',
      desc: '👻',
      feedImageURL: 'https://i.pinimg.com/564x/3f/83/91/3f8391d2a4229c03aa419d73fb552725.jpg',
      like: 431,
      nickname: '안알랴줌',
      profileURL: 'https://i.pinimg.com/236x/3a/2f/0d/3a2f0dce4af1c1ae21d178d5af32b2b6.jpg',
      rating: 3,
      uid: 'a',
    },
    {
      docId: '1',
      address: '서울특별시 동작구',
      addressDetail: '',
      createAt: '',
      desc: '인생 최고로 가치 있던 천원',
      feedImageURL: 'https://i.pinimg.com/236x/ff/0f/45/ff0f45384e7a2c537fc95da6e97e0fb5.jpg',
      like: 803,
      nickname: '이슬짱팬',
      profileURL: 'https://i.pinimg.com/236x/1b/05/ce/1b05ce52aaed968236fa37110a711ab5.jpg',
      rating: 5,
      uid: 'a',
    },
    {
      docId: '4',
      address: '부산광역시 북구',
      addressDetail: '북구 갤러리',
      createAt: '',
      desc: '반 고흐 전시회 진짜 멋있었다!',
      feedImageURL: 'https://i.pinimg.com/564x/dd/cd/ae/ddcdaeaeb96e18b46c9e27cc638ba429.jpg',
      like: 2032,
      nickname: '북구럽군요',
      profileURL: 'https://i.pinimg.com/236x/ba/cb/29/bacb299fdc9fd501cd3f00c13204c56c.jpg',
      rating: 3,
      uid: 'a',
    },
  ];

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
                {CardInfo.map((card) => (
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
