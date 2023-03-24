import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import { Center, Box } from '@chakra-ui/react';
import { Text } from '@/styles/settings/settings';
import ImgAddForm from '@/components/auth/imgAddForm';
import AuthInput from '@/components/auth/authInput';
import FormButton from '@/components/@common/formButton';
import { updateUserInfo } from '@/api/auth/updateProfile';

export default function Settings() {
  const [nickname, setNickname] = useState<string>('');
  const [photoURL, setPhotoURL] = useState<string>('');

  const inputProps = {
    id: 0,
    placeholder: 'change nickname',
    type: 'text',
    value: nickname,
    setValue: setNickname,
  };

  const handleLogOut = () => {
    localStorage.removeItem('userInfo');
    Router.push('/auth/login');
  };

  const updateUser = () => {
    if (nickname !== '' || photoURL !== '') {
      updateUserInfo(nickname, photoURL);
    } else {
      alert('변경된 정보가 없습니다.');
    }
  };

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      const parsedUserInfo = JSON.parse(userInfo);
      setNickname(parsedUserInfo.displayName);
      setPhotoURL(parsedUserInfo.photoURL);
    }
  }, []);

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
