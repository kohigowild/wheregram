import React from 'react';
import FeedCard from '@/components/@common/feedCard';
import lunch from '/public/images/lunch.jpg';
import pool from '/public/images/pool.jpg';
import flower from '/public/images/flower.jpg';
import tako from '/public/images/tako.jpg';

export default function index() {
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

  // 연동 후 무한 스크롤 구현
  return (
    <div style={{ paddingTop: '4px' }}>
      {CardInfo.map((card) => (
        <FeedCard card={card} key={card.id} />
      ))}
    </div>
  );
}
