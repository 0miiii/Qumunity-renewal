import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { PATH } from "../../router";
import * as Styled from "./Header.style";

const Header = () => {
  return (
    <Styled.Container>
      <Styled.Inner>
        <div>
          <Link to={PATH.MAIN}>로고</Link>
        </div>
        <Styled.Nav>
          <ul>
            <li>
              <Link to={PATH.MAIN}>질문</Link>
            </li>
            <li>
              <Link to={PATH.USER_LIST}>유저</Link>
            </li>
            <li>
              <Link to={PATH.TAG_LIST}>태그</Link>
            </li>
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
