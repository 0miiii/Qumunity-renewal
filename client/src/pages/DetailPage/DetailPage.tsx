import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { Editor, Viewer } from "@toast-ui/react-editor";
import { Button } from "@mui/material";
import instance from "../../apis/intance";
import { IPost } from "../../types/post";
import Tag from "../../components/Tag/Tag";
import * as Styled from "./DetailPage.style";

interface IResponse {
  success: boolean;
  message: string;
  data: IPost;
}

const DetailPage = () => {
  const postId = useParams().id;

  const [post, setPost] = useState<IPost | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState(false);

  const getPostRequest = async () => {
    setLoading(true);

    try {
      const response = await instance.post<IResponse>("/post/getpost", {
        postId,
      });
      setPost(response.data.data);
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
