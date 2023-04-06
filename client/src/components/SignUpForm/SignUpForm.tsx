import React from 'react';
import { TextField, Button } from '@mui/material';
import * as Styled from './SignUpForm.style';

const SignUpForm = () => {
  return (
    <Styled.Container>
      <TextField id="nickname" label="닉네임" variant="outlined" />
      <TextField id="email" label="이메일" variant="outlined" />
      <TextField id="password" label="비밀번호" variant="outlined" />
      <TextField id="password-check" label="비밀번호 확인" variant="outlined" />
      <Button variant="contained">가입하기</Button>
    </Styled.Container>
  );
};

export default SignUpForm;
