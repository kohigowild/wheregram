import React from 'react';
import Link from 'next/link';
import { RootState } from '@/store';
import { useAppSelector } from '@/store';
import { Center } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import { RiSettings4Fill } from 'react-icons/ri';
import Logo from './logo';
import { Settings } from '@/styles/@common/header';

export default function Header() {
  const login = useAppSelector((state: RootState) => state.user.uid);

  return (
    <>
      <Center w="100%" h="52px" boxShadow="base" position={'fixed'} top="0" backgroundColor={'white'} zIndex="10000">
        <Logo />
        <Link href={login ? '/settings' : '/auth/login'}>
          <Settings>
            <Icon as={RiSettings4Fill} w="20px" h="20px" color="gray.700" />
          </Settings>
        </Link>
      </Center>
    </>
  );
}
