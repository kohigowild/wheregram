import React, { useState } from 'react';
import styled from 'styled-components';
import { Flex, Spacer, Icon } from '@chakra-ui/react';
import { HiStar } from 'react-icons/hi';

export default function Rating() {
  const [ratingIndex, setRatingIndex] = useState(0);
  const ArrayIndexes = [1, 2, 3, 4, 5];

  const RatingContainer = styled.div`
    display: flex;
    .inactive {
      color: ${({ theme }) => theme.colors.textColor};
    }
    .active {
      color: ${({ theme }) => theme.colors.primary};
    }
  `;

  const Desc = styled.div`
    font-size: 14px;
    display: flex;
    color: ${({ theme }) => theme.colors.textColor};
  `;

  const Highlight = styled.div`
    margin: 0 4px;
    color: ${({ theme }) => theme.colors.primary};
  `;

  return (
    <Flex mb="20px">
      <RatingContainer>
        {ArrayIndexes.map((idx) => (
          <Icon
            as={HiStar}
            w={5}
            h={5}
            key={idx}
            className={idx <= ratingIndex ? 'active' : 'inactive'}
            onClick={() => setRatingIndex(idx)}
          />
        ))}
      </RatingContainer>
      <Spacer />
      <Desc>
        이 장소에 별점을 <Highlight>{ratingIndex}점</Highlight> 줄래요.
      </Desc>
    </Flex>
  );
}
