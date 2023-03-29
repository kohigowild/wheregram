import React from 'react';
import Link from 'next/link';
import { RootState } from '@/store';
import { useAppSelector } from '@/store';
import { Footer } from '@/styles/@common/footer';
import { Tabs, TabList, Tab, Center, Icon } from '@chakra-ui/react';
import { HiHome, HiHashtag, HiPlusCircle, HiSearch, HiIdentification } from 'react-icons/hi';

export default function FooterNav() {
  const login = useAppSelector((state: RootState) => state.user.uid);

  const TabsInfo = [
    {
      id: 0,
      name: '/',
      icon: HiHome,
    },
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
    <Tabs variant="soft-rounded" colorScheme="green">
      <TabList>
        <Footer>
          <Center w="100%" h="52px">
            {TabsInfo.map((tab) => (
              <Link href={login !== '' ? tab.name : '/auth/login'} key={tab.id}>
                <Tab w={10} h={10} ml={4} mr={4} _selected={{ color: 'white', bg: 'green.400' }}>
                  <Icon as={tab.icon} w={6} h={6} />
                </Tab>
              </Link>
            ))}
          </Center>
        </Footer>
      </TabList>
    </Tabs>
  );
}
