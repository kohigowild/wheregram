import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Profile from '@/components/profile/profileForm';
import CardList from '@/components/@common/cardList';
import { Center, Box } from '@chakra-ui/react';
import { FeedListType } from '@/interfaces/feed';
import { userFeedList } from '@/api/feed/getDoc';
import { getUserInfo } from '@/api/auth/getUserInfo';
import { UserInfo } from '@/interfaces/auth';

export default function UserProfile() {
  const router = useRouter();
  const id: any = router.query.id;
  const [feedList, setFeedList] = useState<FeedListType[]>([]);
  const [userInfo, setUserInfo] = useState<UserInfo[] | null>(null);

  useEffect(() => {
    userFeedList(id, setFeedList);
    getUserInfo(id, setUserInfo);
  }, []);

  return (
    <Center>
      <Box w="300px" padding="1vh 0">
        {userInfo && (
          <Profile nickname={userInfo[0].displayName} photoURL={userInfo[0].photoURL} email={userInfo[0].email} />
        )}
        <CardList feedList={feedList} />
      </Box>
    </Center>
  );
}
