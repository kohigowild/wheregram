import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useAppSelector, useAppDispatch } from '@/store';
import { RootState } from '@/store';
import { setLike } from '@/store/modules/like';
import { getMainDoc } from '@/api/feed/getDoc';
import { getLikeFeed } from '@/api/feed/likeFeed';
import { FeedListType } from '@/interfaces/feed';
import FeedCard from '@/components/@common/feedCard';

const Carousel = () => {
  const dispatch = useAppDispatch();
  const uid: string = useAppSelector((state: RootState) => state.user.uid);
  const [cardInfo, setCardInfo] = useState<FeedListType[]>([]);
  const autoplayOptions = {
    delay: 3000,
  };
  const [viewportRef, embla] = useEmblaCarousel(
    {
      loop: true,
    },
    [Autoplay(autoplayOptions)],
  );

  useEffect(() => {
    if (embla && cardInfo.length > 0) {
      embla.reInit();
    }
  }, [embla, cardInfo]);

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
    <div className="overflow-hidden" ref={viewportRef}>
      <div className="flex">
        {cardInfo.map((card) => {
          return (
            <div key={card.docId} style={{ display: 'flex', position: 'relative' }}>
              <FeedCard card={card} comment={false} />
            </div>
          );
        })}
      </div>

      <style>
        {`.flex {
        display: flex
      }

      .overflow-hidden {
        overflow: hidden
      }`}
      </style>
    </div>
  );
};

export default Carousel;
