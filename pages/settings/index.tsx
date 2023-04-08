import React, { useState } from 'react';
import Router from 'next/router';
import { RootState } from '@/store';
import { useAppSelector, useAppDispatch } from '@/store';
import { setLogin, setLogout } from '@/store/modules/user';
import { initLike } from '@/store/modules/like';
import { Center, Box } from '@chakra-ui/react';
import { Text } from '@/styles/settings/settings';
import ImgAddForm from '@/components/auth/imgAddForm';
import AuthInput from '@/components/auth/authInput';
import FormButton from '@/components/@common/formButton';
import { updateUserInfo } from '@/api/auth/updateProfile';
import { secessionUser } from '@/api/auth/createUser';

export default function Settings() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.user);
  const defaultNickname = useAppSelector((state: RootState) => state.user.nickname);
  const [nickname, setNickname] = useState<string>('');
  const [imageURL, setImageURL] = useState<string>('');

  const inputProps = {
    id: 0,
    placeholder: defaultNickname,
    type: 'text',
    value: nickname,
    setValue: setNickname,
  };

  const handleLogOut = () => {
    dispatch(setLogout());
    dispatch(initLike());
    Router.push('/auth/login');
  };

  const handleSecession = () => {
    dispatch(setLogout());
    dispatch(initLike());
    secessionUser();
    Router.push('/auth/login');
  };

  const updateUser = () => {
    updateUserInfo(user.uid, nickname ? nickname : user.nickname, imageURL ? imageURL : user.photoURL);
    dispatch(
      setLogin({
        uid: user.uid,
        email: user.email,
        nickname: nickname ? nickname : user.nickname,
        photoURL: imageURL ? imageURL : user.photoURL,
      }),
    );
  };

  return (
    <Center w="100vw" h="80vh">
      <Box w="300px" padding="6vh 0">
        <ImgAddForm imageURL={imageURL} setImageURL={setImageURL} />
        <AuthInput item={inputProps} />
        <FormButton props={'정보 변경'} event={updateUser} disabled={false} />
        <Center mt={6} justifyContent={'space-between'}>
          <Text onClick={handleLogOut}>로그아웃</Text>
          <Text onClick={handleSecession}>회원 탈퇴</Text>
        </Center>
      </Box>
    </Center>
  );
}
