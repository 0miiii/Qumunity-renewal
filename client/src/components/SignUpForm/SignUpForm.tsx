import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@mui/material";
import { SignUpSchema } from "../../libs/authValidationYup";
import { login } from "../../store/reducers/authSlice";
import { PATH } from "../../router";
import * as Styled from "./SignUpForm.style";

type FormData = yup.InferType<typeof SignUpSchema>;

const SignUpForm = () => {
  const routeTo = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      nickname: "test",
      email: "test@naver.com",
      password: "aaaaaa1@",
      password_check: "aaaaaa1@",
    },
    resolver: yupResolver(SignUpSchema),
    mode: "onChange",
  });

  const SignUpSubmitHandler = handleSubmit(async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/user/signUp", {
        email: data.email,
        password: data.password,
        nickname: data.nickname,
      });
      dispatch(login(response.data.token));
      routeTo(PATH.MAIN);
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <Styled.Container onSubmit={SignUpSubmitHandler}>
      <TextField
        {...register("nickname")}
        label="닉네임"
        variant="outlined"
        error={!!errors.nickname}
        helperText={errors.nickname?.message}
      />
      <TextField
        {...register("email")}
        label="이메일"
        variant="outlined"
        error={!!errors.email}
        helperText={errors.email?.message}
        type="email"
      />
      <TextField
        {...register("password")}
        label="비밀번호"
        variant="outlined"
        error={!!errors.password}
        helperText={errors.password?.message}
        type="password"
      />
      <TextField
        {...register("password_check")}
        label="비밀번호 확인"
        variant="outlined"
        error={!!errors.password_check}
        helperText={errors.password_check?.message}
        type="password"
      />
      <Button variant="contained" type="submit">
        가입하기
      </Button>
    </Styled.Container>
  );
};

export default SignUpForm;
