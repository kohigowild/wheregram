import React from 'react';
import styled from 'styled-components';
import { poppinsExtraBold } from '@/styles/font/poppins';

export default function Logo() {
  const LogoTitle = styled.div`
    font-size: 20px;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.textColor};
    font-family: ${poppinsExtraBold.style.fontFamily};
  `;

  const LogoColorTitle = styled.div`
    font-size: 20px;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${poppinsExtraBold.style.fontFamily};
  `;
  return (
    <>
      <LogoColorTitle>#</LogoColorTitle>
      <LogoTitle>WHEREGRAM</LogoTitle>
    </>
  );
}
