import React, { useEffect } from 'react';
import Link from 'next/link';
import { Center } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import { RiSettings4Fill } from 'react-icons/ri';
import Logo from './logo';
import { Settings } from '@/styles/@common/header';
import { useRecoilState } from 'recoil';
import { userInfoState } from '@/states';

export default function Header() {
  const [userState, setUserState] = useRecoilState(userInfoState);

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      const parsedUserInfo = JSON.parse(userInfo);
      setUserState(parsedUserInfo);
    }
  }, []);

  return (
    <>
      <Center w="100%" h="52px" boxShadow="base" position={'fixed'} top="0" backgroundColor={'white'} zIndex="10000">
        <Logo />
        <Link href={userState.uid ? '/settings' : '/auth/login'}>
          <Settings>
            <Icon as={RiSettings4Fill} w="20px" h="20px" color="gray.700" />
          </Settings>
        </Link>
      </Center>
    </>
  );
}
