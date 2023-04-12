import React from "react";
import { Editor, Viewer } from "@toast-ui/react-editor";
import { Button } from "@mui/material";
import * as Styled from "./DetailPage.style";

const DetailPage = () => {
  return (
    <Styled.Container>
      <Styled.Detail>
        <Styled.DetailInfo>
          <div>
            <span>글 작성자</span>
            <span>작성한 날짜</span>
            <span>조회수</span>
          </div>
          <div>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </Styled.DetailInfo>
        <h1>글 제목</h1>
        <Viewer initialValue="글 내용" />
        <Styled.TagGroup>
          <li>태그1</li>
          <li>태그2</li>
          <li>태그3</li>
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
