import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { RootState } from '@/store';
import { useAppSelector } from '@/store';
import { Input } from '@chakra-ui/react';
import {
  Box,
  Flex,
  Button,
  CloseButton,
  useToast,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Icon,
} from '@chakra-ui/react';
import { AiOutlineClose } from 'react-icons/ai';
import { Bold } from '@/styles/feed/feed';
import { createComment, getComment, deleteComment } from '@/api/feed/comment';
import { DocId, CommentType } from '@/interfaces/feed';

export default function Comment({ docId }: DocId) {
  const toast = useToast();
  const uid = useAppSelector((state: RootState) => state.user.uid);
  const nickname = useAppSelector((state: RootState) => state.user.nickname);
  const [comment, setComment] = useState<string>('');
  const [getCommentList, setGetCommentList] = useState<CommentType[]>([]);

  const handleCreateComment = () => {
    createComment(docId, uid, nickname, comment);
    setComment('');
    getComment(docId, setGetCommentList);
  };

  const handleDeleteComment = (id: string) => {
    deleteComment(docId, id);
    toast({
      title: '삭제 알림',
      description: '댓글을 삭제했습니다.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    getComment(docId, setGetCommentList);
  };

  useEffect(() => {
    getComment(docId, setGetCommentList);
  }, []);

  return (
    <Box>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton padding="0px" mb="8px">
              <Box as="span" flex="1" textAlign="left" fontSize="14px" color="gray.500">
                {getCommentList.length} 개의 댓글 보기
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel padding="0px">
            {getCommentList.map((comment, idx) => (
              <div key={idx} style={{ display: 'flex' }}>
                <Flex w="90vw" mb={2} color="gray.700" fontSize="14px">
                  <Link href={`/profile/${comment.uid}`}>
                    <Bold>{comment.nickname}</Bold>
                  </Link>
                  {comment.comment}
                </Flex>
                {comment.uid === uid && (
                  <Icon
                    as={AiOutlineClose}
                    mt="4px"
                    mr="4px"
                    fontSize="12px"
                    onClick={() => handleDeleteComment(comment.commentId)}
                    cursor="pointer"
                  />
                )}
              </div>
            ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Flex pb="20px">
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
