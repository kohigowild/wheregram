import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import FeedCard from '@/components/@common/feedCard';
import { FeedListType } from '@/interfaces/feed';
import { Center } from '@chakra-ui/react';
import { getFeedDetail } from '@/api/feed/getDoc';

export default function Detail() {
  const router = useRouter();
  const id: any = router.query.id;
  const [card, setCard] = useState<FeedListType[] | null>(null);

  useEffect(() => {
    {
      id && getFeedDetail(id, setCard);
    }
  }, []);

  return (
    <>
      <Center>
        {card && <FeedCard card={card[0]} comment={true} />}
        <Center></Center>
      </Center>
    </>
  );
}
