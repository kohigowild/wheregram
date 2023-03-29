import React, { useState } from 'react';
import Router from 'next/router';
import { RootState } from '@/store';
import { useAppSelector, useAppDispatch } from '@/store';
import { setLogin, setLogout } from '@/store/modules/user';
import { Center, Box } from '@chakra-ui/react';
import { Text } from '@/styles/settings/settings';
import ImgAddForm from '@/components/auth/imgAddForm';
import AuthInput from '@/components/auth/authInput';
import FormButton from '@/components/@common/formButton';
import { updateUserInfo } from '@/api/auth/updateProfile';

export default function Settings() {
  const dispatch = useAppDispatch();
  const uid = useAppSelector((state: RootState) => state.user.uid);
  const email = useAppSelector((state: RootState) => state.user.email);
  const defaultNickname = useAppSelector((state: RootState) => state.user.nickname);
  const [nickname, setNickname] = useState<string>('');
  const [photoURL, setPhotoURL] = useState<string>('');

  const inputProps = {
    id: 0,
    placeholder: defaultNickname,
    type: 'text',
    value: nickname,
    setValue: setNickname,
  };

  const handleLogOut = () => {
    dispatch(setLogout());
    Router.push('/auth/login');
  };

  const updateUser = () => {
    updateUserInfo(uid, nickname, photoURL);
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
      <Box w="300px" padding="6vh 0">
        <ImgAddForm imageURL={photoURL} setImageURL={setPhotoURL} />
        <AuthInput item={inputProps} />
        <FormButton props={'정보 변경'} event={updateUser} disabled={false} />
        <Center mt={6} justifyContent={'space-between'}>
          <Text onClick={handleLogOut}>로그아웃</Text>
          <Text>회원 탈퇴</Text>
        </Center>
      </Box>
    </Center>
  );
}
