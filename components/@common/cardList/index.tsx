import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex } from '@chakra-ui/react';
import { FeedListArray } from '@/interfaces/feed';
import defaultImage from '@/public/default-img.png';

export default function CardList({ feedList }: FeedListArray) {
  return (
    <Box>
      <Flex wrap="wrap" justify="left" paddingTop="8px">
        {feedList.map((item) => (
          <Link href={`/feed/${item.docId}`} key={item.docId}>
            <Box w="140px" h="140px" position={'relative'} m="4px">
              <Image
                src={item.feedImageURL ? item.feedImageURL : defaultImage}
                alt={item.nickname}
                fill
                style={{ borderRadius: '8px', objectFit: 'cover', cursor: 'pointer' }}
              />
            </Box>
          </Link>
        ))}
      </Flex>
    </Box>
  );
}
