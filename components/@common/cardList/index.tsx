import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex } from '@chakra-ui/react';
import lunch from '/public/images/lunch.jpg';
import pool from '/public/images/pool.jpg';
import flower from '/public/images/flower.jpg';
import tako from '/public/images/tako.jpg';

export default function CardList() {
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
    <Flex wrap="wrap" justify="center">
      {CardInfo.map((item) => (
        <Link href={`/feed/${item.id}`} key={item.id}>
          <Box w="140px" h="140px" position={'relative'} m="4px">
            <Image
              priority
              src={item.img}
              alt="profileImage"
              fill
              style={{ borderRadius: '8px', objectFit: 'cover', cursor: 'pointer' }}
            />
          </Box>
        </Link>
      ))}
    </Flex>
  );
}
