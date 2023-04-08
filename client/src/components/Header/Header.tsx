import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { PATH } from "../../router";
import * as Styled from "./Header.style";

const Header = () => {
  return (
    <Styled.Container>
      <Styled.Inner>
        <Link to={PATH.MAIN}>
          <div>로고</div>
        </Link>
        <Styled.Nav>
          <ul>
            <Link to={PATH.MAIN}>
              <li>질문</li>
            </Link>
            <Link to={PATH.USER_LIST}>
              <li>유저</li>
            </Link>
            <Link to={PATH.TAG_LIST}>
              <li>태그</li>
            </Link>
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
