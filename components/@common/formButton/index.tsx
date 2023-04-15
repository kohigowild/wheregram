import React, { useState } from 'react';
import styled from 'styled-components';
import { Spinner } from '@chakra-ui/react';
import { BtnProps } from '@/interfaces/auth';

export default function FormButton({ props, event, disabled }: BtnProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleButtonClick = () => {
    setIsLoading(true);
  };

  const SubmitButton = styled.button`
    width: 100%;
    height: 40px;
    margin-top: 20px;
    border-radius: 12px;
    border: 0;
    font-size: 14px;
    transition: all 0.3s ease;
    color: white;
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.colors.primaryDark} 0px 10px 0px 0px;

    &:active {
      transform: translateY(5px);
      transition: 200ms;
      background-color: ${({ theme }) => theme.colors.primary};
      box-shadow: ${({ theme }) => theme.colors.primaryDark} 0px 0px 0px 0px;
    }

    &:disabled {
      background-color: #cbd5e0;
      box-shadow: #a0aec0 0px 10px 0px 0px;
    }
  `;

  return (
    <SubmitButton
      onClick={() => {
        handleButtonClick();
        event();
      }}
      disabled={disabled}>
      {isLoading ? <Spinner color="white" /> : props}
    </SubmitButton>
  );
}
