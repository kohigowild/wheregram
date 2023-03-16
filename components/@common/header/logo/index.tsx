import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Flex } from '@chakra-ui/react';
import { poppinsExtraBold } from '@/styles/font/poppins';

export default function Logo() {
  const LogoTitle = styled.div`
    font-size: 20px;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.textColor};
    font-family: ${poppinsExtraBold.style.fontFamily};
    cursor: pointer;
  `;

  const LogoColorTitle = styled.div`
    font-size: 20px;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${poppinsExtraBold.style.fontFamily};
    cursor: pointer;
  `;

  return (
    <>
      <Link href="/">
        <Flex>
          <LogoColorTitle>#</LogoColorTitle>
          <LogoTitle>WHEREGRAM</LogoTitle>
        </Flex>
      </Link>
    </>
  );
}
