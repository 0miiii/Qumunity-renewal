import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Editor, Viewer } from "@toast-ui/react-editor";
import { Button } from "@mui/material";
import Tag from "../../components/Tag/Tag";
import { getPost } from "../../apis/post";
import useScrollTop from "../../hooks/useScroll";
import * as Styled from "./DetailPage.style";

const DetailPage = () => {
  useScrollTop();
  const postId = useParams().id;

  const {
    data: post,
    isError,
    isLoading,
  } = useQuery(["post", postId], () => getPost(postId as string));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <h3>에러발생</h3>;
  }

  return (
    <Styled.Container>
      <Styled.Detail>
        <Styled.DetailInfo>
          <div>
            <span>{post?.author.nickname}</span>
            <span>{post?.createdAt}</span>
            <span>{post?.views}</span>
          </div>
          <div>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </Styled.DetailInfo>
        <h1>{post?.title}</h1>
        <Viewer initialValue={post?.content} />
        <Styled.TagGroup>
          {post?.tags.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </Styled.TagGroup>
        <div>
          <span>좋아요 1</span>
          <span>북마크</span>
        </div>
      </Styled.Detail>

      <Styled.AnswerInput>
        <Editor
          previewStyle="tab"
          height="200px"
          useCommandShortcut={false}
          initialEditType="wysiwyg"
          toolbarItems={[
            ["heading", "bold", "italic", "strike"],
            ["hr", "quote"],
            ["ul", "ol", "task"],
            ["table", "link"],
            ["code", "codeblock"],
          ]}
          // ref={}
          autofocus={false}
          initialValue=" "
        />
        <Button variant="contained">댓글 쓰기</Button>
      </Styled.AnswerInput>

      <Styled.AnswerGroup>
        <ul>
          <li>답변1</li>
          <li>답변2</li>
          <li>답변3</li>
        </ul>
      </Styled.AnswerGroup>
    </Styled.Container>
  );
};

export default DetailPage;
