import React, { useState, useEffect } from 'react';
import { Input } from '@chakra-ui/react';
import { Box, Flex, Button } from '@chakra-ui/react';
import { Bold } from '@/styles/feed/feed';
import { createComment, getComment } from '@/api/feed/comment';
import { useRecoilState } from 'recoil';
import { userInfoState } from '@/states';
import { DocId, CommentType } from '@/interfaces/feed';

export default function Comment({ docId }: DocId) {
  const [userState, setUserState] = useRecoilState(userInfoState);
  const [comment, setComment] = useState<string>('');
  const [getCommentList, setGetCommentList] = useState<CommentType[]>([]);
  const [sendComment, setSendTest] = useState<boolean>(false);

  const handleCreateComment = () => {
    createComment(docId, userState.uid, userState.displayName, comment);
    setSendTest(!sendComment);
  };

  useEffect(() => {
    getComment(docId, setGetCommentList);
    console.log(getCommentList);
  }, [sendComment]);

  return (
    <Box>
      {getCommentList.map((comment) => (
        <Flex w="90vw" mb={2} color="gray.700" fontSize="14px" key={comment.commentId}>
          <Bold>{comment.nickname}</Bold> {comment.comment}
        </Flex>
      ))}
      <Flex>
        <Input
          placeholder="댓글을 입력해 주세요."
          focusBorderColor="green.400"
          borderColor="gray.400"
          onChange={(e) => setComment(e.target.value)}
        />
        <Button colorScheme="green" ml="8px" onClick={handleCreateComment}>
          등록
        </Button>
      </Flex>
    </Box>
  );
}
