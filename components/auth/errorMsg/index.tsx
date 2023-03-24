import React from 'react';
import styled from 'styled-components';
import { ErrorMsgType } from '@/interfaces/auth';

export default function ErrorMsg({ errorMsg }: ErrorMsgType) {
  const Error = styled.div`
    margin-top: 2vh;
    margin-bottom: 2vh;
    text-align: center;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary};
  `;

  return <Error>{errorMsg}</Error>;
}
