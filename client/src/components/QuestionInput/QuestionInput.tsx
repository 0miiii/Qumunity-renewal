import React from "react";
import * as Styled from "./QuestionInput.style";
import QuestionTextInput from "./QuestionTextInput/QuestionTextInput";
import QuestionTextarea from "./QuestionTextarea/QuestionTextarea";
import QuestionTagInput from "./QuestionTagInput/QuestionTagInput";
import QuestionEditor from "./QuestionEditor/QuestionEditor";

interface IQuestionInput {
  title: string;
  summary: string;
  type: "title" | "summary" | "tag" | "editor";
}

const QuestionInput: React.FC<IQuestionInput> = ({ title, summary, type }) => {
  let inputType: React.ReactNode;

  if (type === "title") {
    inputType = <QuestionTextInput />;
  }
  if (type === "summary") {
    inputType = <QuestionTextarea />;
  }
  if (type === "tag") {
    inputType = <QuestionTagInput />;
  }
  if (type === "editor") {
    inputType = <QuestionEditor />;
  }

  return (
    <Styled.Container>
      <label htmlFor="title">{title}</label>
      <p>{summary}</p>
      {inputType}
    </Styled.Container>
  );
};

export default QuestionInput;
