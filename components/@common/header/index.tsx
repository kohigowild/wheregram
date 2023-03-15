import React from 'react';
import Link from 'next/link';
import { Center } from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';
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
      <Center w="100%" h="52px">
        <Logo />
        <Link href="/settings">
          <Settings>
            <SettingsIcon w="20px" h="20px" color="gray.700" />
          </Settings>
        </Link>
      </Center>
    </>
  );
}
