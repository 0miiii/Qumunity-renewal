import React from 'react';
import { TextField, Button } from '@mui/material';
import * as Styled from './SignInForm.style';

const SignInForm = () => {
  return (
    <Styled.Container>
      <TextField id="email" label="이메일" variant="outlined" />
      <TextField id="password" label="비밀번호" variant="outlined" />
      <Button variant="contained">로그인</Button>
      <p>아직 회원이 아니신가요?</p>
      <Button variant="contained">회원가입</Button>
      <p>게스트 계정으로 둘러보고 싶어요</p>
      <Button variant="contained">게스트 계정 로그인</Button>
    </Styled.Container>
  );
};

export default SignInForm;
