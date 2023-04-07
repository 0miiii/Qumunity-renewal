import React from "react";
import { useLocation } from "react-router-dom";
import * as Styled from "./AuthPage.style";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignInForm from "../../components/SignInForm/SignInForm";
import { PATH } from "../../router";

const AuthPage = () => {
  const location = useLocation().pathname;
  const AuthForm = location === PATH.SIGN_UP ? <SignUpForm /> : <SignInForm />;

  return (
    <Styled.Container>
      <div>로고</div>
      {AuthForm}
    </Styled.Container>
  );
};

export default AuthPage;
