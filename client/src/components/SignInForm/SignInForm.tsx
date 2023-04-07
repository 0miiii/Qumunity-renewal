import React from "react";
import { TextField, Button } from "@mui/material";
import * as Styled from "./SignInForm.style";

const SignInForm = () => {
  const loginSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const loginInfo = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(loginInfo);
  };

  return (
    <Styled.Container onSubmit={loginSubmitHandler}>
      <TextField
        name="email"
        label="이메일"
        variant="outlined"
        type="email"
        required
      />
      <TextField
        name="password"
        label="비밀번호"
        variant="outlined"
        type="password"
        required
      />
      <Button variant="contained" type="submit">
        로그인
      </Button>
      <p>아직 회원이 아니신가요?</p>
      <Button variant="contained">회원가입</Button>
      <p>게스트 계정으로 둘러보고 싶어요</p>
      <Button variant="contained">게스트 계정 로그인</Button>
    </Styled.Container>
  );
};

export default SignInForm;
