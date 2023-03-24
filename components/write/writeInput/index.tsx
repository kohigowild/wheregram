import React from 'react';
import { Input } from '@chakra-ui/react';
import { InputProps } from '@/interfaces/auth';

export default function WriteInput({ item }: InputProps) {
  const handleChangeValue = (e: any) => {
    item.setValue(e.target.value);
    console.log(item.value);
  };

  return (
    <Input
      type={item.type}
      defaultValue={item.value}
      variant="filled"
      placeholder={item.placeholder}
      color="gray.600"
      borderColor="gray.200"
      focusBorderColor="green.400"
      mb="12px"
      mt="12px"
      onChange={handleChangeValue}
    />
  );
}
