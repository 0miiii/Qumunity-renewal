import React, { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { Link } from "react-router-dom";
import { IPost } from "../../types/post";
import Post from "../../components/Post/Post";
import * as Styled from "./MainPage.style";
import instance from "../../apis/intance";

interface IResponse {
  success: boolean;
  message: string;
  data: IPost[];
}

const MainPage = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [error, setError] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState(false);

  const getPostRequest = async () => {
    setLoading(true);

    try {
      const response = await instance.get<IResponse>("/post/getposts");
      setPosts(response.data.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err);
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPostRequest();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
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
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </Styled.Container>
  );
};

export default MainPage;
