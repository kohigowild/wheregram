import React from 'react';
import styled from 'styled-components';
import { InputProps } from '@/interfaces/auth';

export default function FormInput({ props }: InputProps) {
  const Input = styled.input`
    background-color: #edf2f7;
    border: none;
    padding: 1rem;
    margin-bottom: 20px;
    font-size: 1rem;
    width: 300px;
    height: 52px;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.primaryDark};
    box-shadow: 0 0.4rem #e2e8f0;
    cursor: pointer;

    &:focus {
      outline: none;
      box-shadow: 0 0.2rem #e2e8f0;
      transform: translateY(0.2rem);
    }
  `;

  return (
    <>
      {props.value ? (
        <Input type="text" defaultValue={props.value} readOnly={props.readOnly} />
      ) : (
        <Input type="text" placeholder={props.placeholder} readOnly={props.readOnly} />
      )}
    </>
  );
}
