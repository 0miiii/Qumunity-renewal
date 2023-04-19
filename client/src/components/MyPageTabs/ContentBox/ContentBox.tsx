import React from "react";
import * as Styled from "./ContentBox.style";

const ContentBox = () => {
  return (
    <Styled.Container>
      <Styled.State>
        <span>0 views</span>
        <span>0 votes</span>
        <span>0 answers</span>
      </Styled.State>
      <p>질문 제목</p>
      <Styled.Bottom>
        <div>
          <span>태그</span>
          <span>태그</span>
          <span>태그</span>
        </div>
        <span>날짜</span>
      </Styled.Bottom>
    </Styled.Container>
  );
};

export default ContentBox;
