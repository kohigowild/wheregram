import React from 'react';
import FormInput from '../formInput';

export default function Comment() {
  const commentProps = {
    id: 0,
    placeholder: '댓글을 입력해 주세요.',
    value: '',
    readOnly: false,
  };

  return <FormInput props={commentProps} />;
}
