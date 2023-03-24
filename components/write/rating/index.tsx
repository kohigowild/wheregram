import React from 'react';
import { RatingContainer, Desc, Highlight } from '@/styles/write/write';
import { Flex, Spacer, Icon } from '@chakra-ui/react';
import { HiStar } from 'react-icons/hi';
import { RatingType } from '@/interfaces/feed';

export default function Rating({ rating, setRating }: RatingType) {
  const ArrayIndexes = [1, 2, 3, 4, 5];

  return (
    <Flex mb="20px">
      <RatingContainer>
        {ArrayIndexes.map((idx) => (
          <Icon
            as={HiStar}
            w={5}
            h={5}
            key={idx}
            className={idx <= rating ? 'active' : 'inactive'}
            onClick={() => setRating(idx)}
            cursor="pointer"
          />
        ))}
      </RatingContainer>
      <Spacer />
      <Desc>
        이 장소에 별점을 <Highlight>{rating}점</Highlight> 줄래요.
      </Desc>
    </Flex>
  );
}
