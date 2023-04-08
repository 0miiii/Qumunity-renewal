import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import { PATH } from "../../router";
import * as Styled from "./Header.style";

const Header = () => {
  const location = useLocation().pathname;

  console.log(location);
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
            <Link to={PATH.SIGN_IN}>
              <Button variant="contained">로그인</Button>
            </Link>
          </li>
          <li>
            <Link to={PATH.SIGN_UP}>
              <Button variant="contained">회원가입</Button>
            </Link>
          </li>
        </Styled.BtnGroup>
      </Styled.Inner>
    </Styled.Container>
  );
};

export default Header;
