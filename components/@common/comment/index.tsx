import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { RootState } from '@/store';
import { useAppSelector } from '@/store';
import { Input } from '@chakra-ui/react';
import { Box, Flex, Button, CloseButton, useToast } from '@chakra-ui/react';
import { Bold } from '@/styles/feed/feed';
import { createComment, getComment, deleteComment } from '@/api/feed/comment';
import { DocId, CommentType } from '@/interfaces/feed';

export default function Comment({ docId }: DocId) {
  const toast = useToast();
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

  const handleDeleteComment = (id: string) => {
    deleteComment(docId, id);
    setSendTest(!sendComment);
    toast({
      title: '삭제 알림',
      description: '댓글을 삭제했습니다.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  useEffect(() => {
    getComment(docId, setGetCommentList);
  }, [sendComment]);

  return (
    <Box>
      {getCommentList.map((comment) => (
        <div key={comment.commentId} style={{ display: 'flex' }}>
          <Flex w="90vw" mb={2} color="gray.700" fontSize="14px">
            <Link href={`/profile/${comment.uid}`}>
              <Bold>{comment.nickname}</Bold>
            </Link>{' '}
            {comment.comment}
          </Flex>
          {comment.uid === uid && (
            <CloseButton size="sm" mt="-2px" onClick={() => handleDeleteComment(comment.commentId)} />
          )}
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
