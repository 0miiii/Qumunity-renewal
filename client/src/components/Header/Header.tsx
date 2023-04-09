import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { RootState } from "../../store/store";
import { PATH } from "../../router";
import { logout } from "../../store/reducers/authSlice";
import * as Styled from "./Header.style";

const Header = () => {
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state.auth.isLoggedIn);
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <Styled.Container>
      <Styled.Inner>
        <div>
          <Link to={PATH.MAIN}>로고</Link>
        </div>
        <Styled.Nav>
          <ul>
            <Styled.NavLi focus={PATH.MAIN === location}>
              <Link to={PATH.MAIN}>질문</Link>
            </Styled.NavLi>
            <Styled.NavLi focus={PATH.USER_LIST === location}>
              <Link to={PATH.USER_LIST}>유저</Link>
            </Styled.NavLi>
            <Styled.NavLi focus={PATH.TAG_LIST === location}>
              <Link to={PATH.TAG_LIST}>태그</Link>
            </Styled.NavLi>
          </ul>
        </Styled.Nav>
        <Styled.BtnGroup>
          <li>
            <Link to={isLogin ? PATH.MYPAGE : PATH.SIGN_IN}>
              <Button variant="contained">
                {isLogin ? "마이페이지" : "로그인"}
              </Button>
            </Link>
          </li>
          <li>
            <Link to={isLogin ? PATH.SIGN_IN : PATH.SIGN_UP}>
              <Button
                variant="contained"
                onClick={isLogin ? logoutHandler : undefined}
              >
                {isLogin ? "로그아웃" : "회원가입"}
              </Button>
            </Link>
          </li>
        </Styled.BtnGroup>
      </Styled.Inner>
    </Styled.Container>
  );
};

export default Header;
