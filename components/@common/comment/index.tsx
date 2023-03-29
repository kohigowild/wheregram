import React, { useState, useEffect } from 'react';
import { RootState } from '@/store';
import { useAppSelector } from '@/store';
import { Input } from '@chakra-ui/react';
import { Box, Flex, Button } from '@chakra-ui/react';
import { Bold } from '@/styles/feed/feed';
import { createComment, getComment } from '@/api/feed/comment';
import { DocId, CommentType } from '@/interfaces/feed';

export default function Comment({ docId }: DocId) {
  const uid = useAppSelector((state: RootState) => state.user.uid);
  const nickname = useAppSelector((state: RootState) => state.user.nickname);
  const [comment, setComment] = useState<string>('');
  const [getCommentList, setGetCommentList] = useState<CommentType[]>([]);
  const [sendComment, setSendTest] = useState<boolean>(false);

  const handleCreateComment = () => {
    createComment(docId, uid, nickname, comment);
    setSendTest(!sendComment);
    setComment('');
  };

  useEffect(() => {
    getComment(docId, setGetCommentList);
    console.log(getCommentList);
  }, [sendComment]);

  return (
    <Box>
      {getCommentList.map((comment) => (
        <div key={comment.commentId}>
          <Flex w="90vw" mb={2} color="gray.700" fontSize="14px">
            <Bold>{comment.nickname}</Bold> {comment.comment}
          </Flex>
        </div>
      ))}
      <Flex>
        <Input
          placeholder="댓글을 입력해 주세요."
          focusBorderColor="green.400"
          borderColor="gray.400"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        <Button colorScheme="green" ml="8px" onClick={handleCreateComment}>
          등록
        </Button>
      </Flex>
    </Box>
  );
}
