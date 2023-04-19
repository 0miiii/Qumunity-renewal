import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PATH } from "../router";
import { loginCheck } from "../apis/auth";
import { logout } from "../store/reducers/authSlice";

interface Iprops {
  children: React.ReactNode;
}

const AuthGaurdLayout: React.FC<Iprops> = ({ children }) => {
  const [loading, setIsLoading] = useState(true);
  const routeTo = useNavigate();
  const dispatch = useDispatch();

  const validateToken = async () => {
    try {
      await loginCheck();
      setIsLoading(false);
    } catch (err) {
      alert("로그인이 필요합니다");
      dispatch(logout());
      routeTo(PATH.SIGN_IN);
      return;
    }
  };

  useEffect(() => {
    validateToken();
  }, [children]);

  if (loading) {
    return <div>loading</div>;
  }

  return <>{children}</>;
};

export default AuthGaurdLayout;
