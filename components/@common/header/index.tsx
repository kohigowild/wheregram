import React from 'react';
import Link from 'next/link';
import { Center } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import { RiSettings4Fill } from 'react-icons/ri';
import Logo from './logo';
import styled from 'styled-components';

export default function Header() {
  const Settings = styled.div`
    position: absolute;
    right: 0;
    top: 16px;
    margin-right: 16px;
  `;

  return (
    <>
      <Center w="100%" h="52px" boxShadow="base">
        <Logo />
        <Link href="/settings">
          <Settings>
            <Icon as={RiSettings4Fill} w="20px" h="20px" color="gray.700" />
          </Settings>
        </Link>
      </Center>
    </>
  );
}
