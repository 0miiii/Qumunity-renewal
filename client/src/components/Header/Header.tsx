import React from 'react';
import { Button } from '@mui/material';
import * as Styled from './Header.style';

const Header = () => {
  return (
    <Styled.Container>
      <Styled.Inner>
        <div>로고</div>
        <Styled.Nav>
          <ul>
            <li>질문</li>
            <li>유저</li>
            <li>태그</li>
          </ul>
        </Styled.Nav>
        <Styled.BtnGroup>
          <li>
            <Button variant="contained">로그인</Button>
          </li>
          <li>
            <Button variant="contained">회원가입</Button>
          </li>
        </Styled.BtnGroup>
      </Styled.Inner>
    </Styled.Container>
  );
};

export default Header;
