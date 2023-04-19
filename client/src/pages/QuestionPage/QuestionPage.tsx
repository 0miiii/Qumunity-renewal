import React, { useRef, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import TagInput from "../../components/TagInput/TagInput";
import { createPost } from "../../apis/post";
import * as Styled from "./QuestionPage.style";

interface IEnteredPost {
  title: string;
  content: string;
  tags: string[];
}

const QuestionPage = () => {
  const routeTo = useNavigate();
  const [tags, setTags] = useState<string[]>([]);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const editorRef = useRef<Editor>(null);
  const { mutate, isLoading, isSuccess, isError } = useMutation(
    (post: IEnteredPost) => createPost(post)
  );

  const submitHandler = async () => {
    mutate({
      title: titleInputRef.current?.value as string,
      content: editorRef.current?.getInstance().getHTML() as string,
      tags,
    });
  };

  if (isLoading) {
    return <div>로딩 중</div>;
  }

  if (isSuccess) {
    return routeTo("/");
  }

  if (isError) {
    return <div>에러발생</div>;
  }

  return (
    <Styled.Container onSubmit={submitHandler}>
      <Styled.Form>
        <Styled.InputContainer>
          <label>제목을 입력해주세요</label>
          <input type="text" ref={titleInputRef} />
        </Styled.InputContainer>

        <Styled.InputContainer>
          <label>내용을 입력해주세요</label>
          <Editor
            previewStyle="tab"
            height="400px"
            useCommandShortcut={false}
            initialEditType="wysiwyg"
            toolbarItems={[
              ["heading", "bold", "italic", "strike"],
              ["hr", "quote"],
              ["ul", "ol", "task"],
              ["table", "link"],
              ["code", "codeblock"],
            ]}
            ref={editorRef}
            autofocus={false}
            initialValue=" "
          />
        </Styled.InputContainer>

        <Styled.InputContainer>
          <label>태그를 입력해주세요</label>
          <TagInput tags={tags} setTags={setTags} />
        </Styled.InputContainer>

        <Button variant="contained" onClick={submitHandler}>
          글 작성하기
        </Button>
      </Styled.Form>
    </Styled.Container>
  );
};

export default QuestionPage;
