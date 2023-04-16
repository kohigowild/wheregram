import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { RootState } from '@/store';
import { useAppSelector, useAppDispatch } from '@/store';
import { setLike } from '@/store/modules/like';
import { getLikeFeed } from '@/api/feed/likeFeed';
import FeedCard from '@/components/@common/feedCard';
import { FeedListType } from '@/interfaces/feed';
import { Center } from '@chakra-ui/react';
import { getFeedDetail } from '@/api/feed/getDoc';

export default function Detail() {
  const dispatch = useAppDispatch();
  const uid = useAppSelector((state: RootState) => state.user.uid);
  const router = useRouter();
  const { id }: any = router.query;
  const [card, setCard] = useState<FeedListType[] | null>(null);

  const getLikeList = async () => {
    try {
      const result = await getLikeFeed(uid);
      dispatch(setLike(result));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log({ id });
    id !== undefined && getFeedDetail(id, setCard);
    getLikeList();
  }, []);

  return (
    <>
      <Center>{card && <FeedCard card={card[0]} comment={true} />}</Center>
    </>
  );
}

// export async function getServerSideProps({ query: { id } }: any) {
//   return {
//     props: { id },
//   };
// }
