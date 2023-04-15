import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RootState } from '@/store';
import { useAppSelector } from '@/store';
import { Footer, List } from '@/styles/@common/footer';
import { Center, Icon } from '@chakra-ui/react';
import { HiHashtag, HiPlusCircle, HiSearch, HiIdentification } from 'react-icons/hi';

export default function FooterNav() {
  const router = useRouter();
  console.log(router.pathname);
  const login = useAppSelector((state: RootState) => state.user.uid);

  const TabsInfo = [
    {
      id: 1,
      name: '/explore',
      icon: HiHashtag,
    },
    {
      id: 2,
      name: '/write',
      icon: HiPlusCircle,
    },
    {
      id: 3,
      name: '/search',
      icon: HiSearch,
    },
    {
      id: 4,
      name: '/profile',
      icon: HiIdentification,
    },
  ];

  return (
    <Footer>
      <Center w="100%" h="52px">
        {TabsInfo.map((tab) => (
          <Link href={login !== '' ? tab.name : '/auth/login'} key={tab.id}>
            <List className={router.pathname === tab.name ? 'tab-active' : ''}>
              <Icon as={tab.icon} w={6} h={6} />
            </List>
          </Link>
        ))}
      </Center>
      <style>
        {`
        .tab-active {
          background-color: #48BB78;
          color: white;
        }
        `}
      </style>
    </Footer>
  );
}
