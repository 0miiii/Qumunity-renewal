import React from "react";
import { IPost } from "../../../types/post";
import Tag from "../../Tag/Tag";
import * as Styled from "./ContentBox.style";

interface Props {
  post: IPost;
}

const ContentBox: React.FC<Props> = ({ post }) => {
  return (
    <Styled.Container>
      <Styled.State>
        <span>{post.views} views</span>
        <span>{post.votes} votes</span>
        <span>{post.answers} answers</span>
      </Styled.State>
      <div>{post.title}</div>
      <Styled.Bottom>
        <div>
          {post.tags.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </div>
        <span>{post.createdAt}</span>
      </Styled.Bottom>
    </Styled.Container>
  );
};

export default ContentBox;
