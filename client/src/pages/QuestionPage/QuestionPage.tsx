import React from "react";
import { Button } from "@mui/material";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import TagInput from "../../components/TagInput/TagInput";
import * as Styled from "./QuestionPage.style";

const QuestionPage = () => {
  return (
    <Styled.Container>
      <Styled.Form>
        <Styled.InputContainer>
          <label>제목을 입력해주세요</label>
          <input type="text" />
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
          />
        </Styled.InputContainer>

        <Styled.InputContainer>
          <label>태그를 입력해주세요</label>
          <TagInput />
        </Styled.InputContainer>

        <Button variant="contained">글 작성하기</Button>
      </Styled.Form>
    </Styled.Container>
  );
};

export default QuestionPage;
