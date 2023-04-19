import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Post from "../../components/Post/Post";
import * as Styled from "./MainPage.style";
import { getPosts } from "../../apis/post";

const MainPage = () => {
  const { data: posts, isError, isLoading } = useQuery("posts", getPosts);

  if (isLoading) {
    return <div>로딩</div>;
  }

  if (isError) {
    return <h3>에러발생</h3>;
  }

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
      {posts?.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </Styled.Container>
  );
};

export default MainPage;
