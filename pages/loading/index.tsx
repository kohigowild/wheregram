import React, { useState } from 'react';
import { RootState } from '@/store';
import { useAppSelector, useAppDispatch } from '@/store';
import { setLogin } from '@/store/modules/user';
import ImgAddForm from '@/components/auth/imgAddForm';
import FormButton from '@/components/@common/formButton';
import { addGoogleUserInfo } from '@/api/auth/updateProfile';
import { Center, Box, Alert, AlertIcon, AlertTitle, AlertDescription, Input } from '@chakra-ui/react';

export default function Loading() {
  const dispatch = useAppDispatch();
  const uid = useAppSelector((state: RootState) => state.user.uid);
  const email = useAppSelector((state: RootState) => state.user.email);
  const [nickname, setNickname] = useState<string>('');
  const [photoURL, setPhotoURL] = useState<string>('');

  const setGoogleUserProfile = () => {
    addGoogleUserInfo(uid, email, nickname, photoURL);
    dispatch(
      setLogin({
        uid: uid,
        email: email,
        nickname: nickname,
        photoURL: photoURL,
      }),
    );
  };

  return (
    <Center w="100vw" h="80vh">
      <Box w="300px">
        <Alert status="success" borderRadius="8px" mb="40px">
          <AlertIcon />
          <Box>
            <AlertTitle>🌼 환영합니다</AlertTitle>
            <AlertDescription fontSize="12px">
              회원님, 첫 방문이시군요! 웨어그램 이용에 필요한 몇 가지 사항을 입력해 주세요.
            </AlertDescription>
          </Box>
        </Alert>
        <ImgAddForm imageURL={photoURL} setImageURL={setPhotoURL} />
        <Input
          variant="filled"
          placeholder="사용하실 닉네임을 입력해 주세요."
          focusBorderColor="green.400"
          mb="16px"
          onChange={(e) => setNickname(e.target.value)}
        />
        <FormButton props={'시작하기'} event={setGoogleUserProfile} disabled={nickname === '' ? true : false} />
      </Box>
    </Center>
  );
}
