import React from 'react';
import styled from 'styled-components';
import { BtnProps } from '@/interfaces/auth';

export default function FormButton({ props }: BtnProps) {
  const SubmitButton = styled.button`
    width: 240px;
    height: 40px;
    border-radius: 12px;
    border: 0;
    font-size: 14px;
    transition: all 0.3s ease;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    box-shadow: ${({ theme }) => theme.colors.primaryDark} 0px 10px 0px 0px;

    &:active {
      background-color: ${({ theme }) => theme.colors.primary};
      box-shadow: ${({ theme }) => theme.colors.primaryDark} 0px 0px 0px 0px;
      transform: translateY(5px);
      transition: 200ms;
    }
  `;

  return <SubmitButton>{props}</SubmitButton>;
}
