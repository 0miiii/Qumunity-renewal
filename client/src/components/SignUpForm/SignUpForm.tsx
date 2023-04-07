import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@mui/material";
import { SignUpSchema } from "../../libs/authValidationYup";
import * as Styled from "./SignUpForm.style";

type FormData = yup.InferType<typeof SignUpSchema>;

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      nickname: "",
      email: "",
      password: "",
      password_check: "",
    },
    resolver: yupResolver(SignUpSchema),
    mode: "onChange",
  });

  const SignUpSubmitHandler = handleSubmit((data) => console.log(data));

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
