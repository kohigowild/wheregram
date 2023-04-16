import React, { useState } from 'react';
import { Input, Box, Badge } from '@chakra-ui/react';
import { KeywordType } from '@/interfaces/feed';

export default function TagBox({ keyword, setKeyword }: KeywordType) {
  const [tag, setTag] = useState<string>('');

  const handleTagAdd = () => {
    setKeyword((prev) => [...prev, tag]);
    setTag('');
  };

  const handleOnKeyPress = (e: any) => {
    if (keyword.length >= 5) return;
    else if (e.key === 'Enter') {
      handleTagAdd();
    }
  };

  return (
    <Box mt="12px">
      {keyword.map((word, idx) => (
        <Badge variant="subtle" colorScheme="green" mb="12px" borderRadius="4px" key={idx} mr="4px">
          #{word}
        </Badge>
      ))}
      <Input
        variant="outline"
        placeholder="태그를 입력하세요. (최대 5 개)"
        borderColor="gray.300"
        focusBorderColor="green.400"
        onChange={(e) => setTag(e.target.value)}
        onKeyPress={(e) => handleOnKeyPress(e)}
        value={tag}
      />
    </Box>
  );
}
