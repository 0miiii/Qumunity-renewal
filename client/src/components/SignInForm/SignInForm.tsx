import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { login } from "../../store/reducers/authSlice";
import { PATH } from "../../router";
import * as Styled from "./SignInForm.style";

const SignInForm = () => {
  const dipatch = useDispatch();
  const routeTo = useNavigate();
  const loginSubmitHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      const response = await axios.post("http://localhost:3000/user/signIn", {
        email: formData.get("email"),
        password: formData.get("password"),
      });
      dipatch(login(response.data.token));
      routeTo(PATH.MAIN);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Styled.Container onSubmit={loginSubmitHandler}>
      <TextField
        name="email"
        label="이메일"
        variant="outlined"
        type="email"
        required
        defaultValue="test@naver.com"
      />
      <TextField
        name="password"
        label="비밀번호"
        variant="outlined"
        type="password"
        required
        defaultValue="aaaaaa1@"
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
