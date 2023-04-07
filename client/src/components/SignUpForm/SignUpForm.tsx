import React from "react";
import { TextField, Button } from "@mui/material";
import * as Styled from "./SignUpForm.style";

const SignUpForm = () => {
  const SignUpSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Styled.Container onSubmit={SignUpSubmitHandler}>
      <TextField label="닉네임" variant="outlined" />
      <TextField label="이메일" variant="outlined" />
      <TextField label="비밀번호" variant="outlined" />
      <TextField label="비밀번호 확인" variant="outlined" />
      <Button variant="contained" type="submit">
        가입하기
      </Button>
    </Styled.Container>
  );
};

export default SignUpForm;
