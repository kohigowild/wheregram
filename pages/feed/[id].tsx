import React, { useState, useEffect } from 'react';
import FeedCard from '@/components/@common/feedCard';
import Comment from '@/components/@common/comment';
import { FeedData } from '@/interfaces/feed';
import { Center } from '@chakra-ui/react';
import pool from '/public/images/pool.jpg';

export default function Detail() {
  const [card, setCard] = useState<FeedData | null>(null);

  const tmp = {
    id: 0,
    name: 'trustmitt',
    location: '전라남도 여수시',
    img: pool,
    like: 34,
    rating: '4.0',
    desc: '좋아요',
  };

  useEffect(() => {
    setCard(tmp);
  }, []);

  return (
    <>
      <Center>
        {card && <FeedCard card={card} />}
        <Center>
          <Comment />
        </Center>
      </Center>
    </>
  );
}
