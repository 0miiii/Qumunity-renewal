import React from "react";
import { Link } from "react-router-dom";
import Post from "../../components/Post/Post";
import * as Styled from "./MainPage.style";

const MainPage = () => {
  return (
    <Styled.Container>
      <Styled.Top>
        <span>6 질문</span>
        <Link to="/question">질문페이지로이동</Link>
      </Styled.Top>
      <Styled.FilterGroup>
        <input type="text" />
        <div>정렬버튼</div>
      </Styled.FilterGroup>
      <Post />
      <Post />
    </Styled.Container>
  );
};

export default MainPage;
