import React, { useState, useEffect } from 'react';
import { Center, Box } from '@chakra-ui/react';
import FormButton from '@/components/@common/formButton';
import AuthInput from '@/components/auth/authInput';
import ErrorMsg from '@/components/auth/errorMsg';
import ImgAddForm from '@/components/auth/imgAddForm';
import { createUser } from '@/api/auth/createUser';
import { validateEmail, validatePassword, removeWhitespace } from '@/hooks/regex';

export default function SignUp() {
  const [imageURL, setImageURL] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('회원가입에 필요한 정보를 입력해 주세요.');
  const [disabled, setDisabled] = useState<boolean>(true);

  // 이메일 양식 유효성 검증
  const handleChangeEmail = (str: string) => {
    const changedEmail = removeWhitespace(str);
    setEmail(changedEmail);
    setErrorMsg(validateEmail(changedEmail) ? '다음 정보를 입력하세요.' : '이메일을 확인해 주세요.');
  };

  // 패스워드 유효성 검증
  const handleChangePassword = (str: string) => {
    const changedPassword = removeWhitespace(str);
    setPassword(changedPassword);
    setErrorMsg(
      validatePassword(changedPassword) ? '다음 정보를 입력하세요.' : '문자와 숫자 조합으로 8글자 이상 입력해 주세요.',
    );
  };

  const handleChangePasswordConfirm = (str: string) => {
    const passwordConfirmCurrent = removeWhitespace(str);
    setPasswordConfirm(passwordConfirmCurrent);
    setErrorMsg(password === passwordConfirmCurrent ? '다음 정보를 입력하세요.' : '비밀번호가 일치하지 않습니다.');
  };

  const handleChangeNickname = (str: string) => {
    setNickname(str);
    setErrorMsg(nickname === '' ? '닉네임을 입력해 주세요' : '가입 가능합니다.');
  };

  const SignUpForm = [
    {
      id: 0,
      placeholder: 'email',
      type: 'text',
      value: email,
      setValue: handleChangeEmail,
    },
    {
      id: 1,
      placeholder: 'password',
      type: 'password',
      value: password,
      setValue: handleChangePassword,
    },
    {
      id: 2,
      placeholder: 'confirm password',
      type: 'password',
      value: passwordConfirm,
      setValue: handleChangePasswordConfirm,
    },
    {
      id: 3,
      placeholder: 'nickname',
      type: 'text',
      value: nickname,
      setValue: handleChangeNickname,
    },
  ];

  useEffect(() => {
    {
      errorMsg === '가입 가능합니다.' && email && password && setDisabled(false);
    }
  }, [email, password, nickname, errorMsg]);

  const handleCreateUser = () => {
    createUser(email, password, nickname, imageURL);
  };

  return (
    <Center>
      <Box w="300px" padding="6vh 0">
        <ImgAddForm imageURL={imageURL} setImageURL={setImageURL} />
        {SignUpForm.map((item) => (
          <AuthInput key={item.id} item={item} />
        ))}
        <ErrorMsg errorMsg={errorMsg} />
        <FormButton props={'회원가입'} event={handleCreateUser} disabled={disabled} />
      </Box>
    </Center>
  );
}
