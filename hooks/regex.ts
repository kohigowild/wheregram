export const validateEmail = (email: string) => {
  const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return regex.test(email);
};

export const validatePassword = (password: string) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\w\W]{8,}$/;
  return passwordRegex.test(password);
};

export const validateNickname = (nickname: string) => {
  const nicknameRegex = /^.{2,8}$/;
  return nicknameRegex.test(nickname);
};

export const removeWhitespace = (text: string) => {
  const regex = /\s/g;
  return text.replace(regex, '');
};
