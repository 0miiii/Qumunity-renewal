import React from 'react';
import { useLocation } from 'react-router-dom';
import * as Styled from './SignUpPage.style';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import SignInForm from '../../components/SignInForm/SignInForm';

const SignUpPage = () => {
  const location = useLocation().pathname;
  const AuthForm = location === '/sign-up' ? <SignUpForm /> : <SignInForm />;

  console.log('location', location);
  return (
    <Styled.Container>
      <div>로고</div>
      {AuthForm}
    </Styled.Container>
  );
};

export default SignUpPage;
