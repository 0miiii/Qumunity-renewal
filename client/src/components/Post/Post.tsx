import React from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import * as Styled from "./Post.style";

interface Props {
  post: IPost;
}
interface IPost {
  _id: string;
  title: string;
  content: string;
  tags: string[];
  answers: number;
  views: number;
  votes: number;
  author: IUser;
  createAt: string;
  updateAt: string;
}

interface IUser {
  _id: string;
  email: string;
  nickname: string;
  photoURL: string;
  questions: number;
}

const Post: React.FC<Props> = ({ post }) => {
  const createdAt = format(post.createAt, "en_US");

  return (
    <Styled.Container>
      <Styled.State>
        <li>{post.votes} votes</li>
        <li>{post.answers} answers</li>
        <li>{post.views} views</li>
      </Styled.State>
      <Styled.Content>
        <Styled.Top>
          <h1>
            <Link to={`/detail/${post._id}`}>{post.title}</Link>
          </h1>
          <p>{post.content}</p>
        </Styled.Top>
        <Styled.Bot>
          <Styled.Tags>
            {post.tags.map((el) => (
              <li key={el}>{el}</li>
            ))}
          </Styled.Tags>
          <Styled.AuthorInfo>
            <li>
              <img src={post.author.photoURL} />
            </li>
            <li>{post.author.nickname}</li>
            <li>{createdAt}</li>
          </Styled.AuthorInfo>
        </Styled.Bot>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Post;
