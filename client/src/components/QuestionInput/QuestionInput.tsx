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
  const inputType: React.ReactNode = (() => {
    switch (type) {
      case "title":
        return <QuestionTextInput />;
      case "summary":
        return <QuestionTextarea />;
      case "tag":
        return <QuestionTagInput />;
      case "editor":
        return <QuestionEditor />;
      default:
        throw new Error(`${type} 은 적절하지 않습니다`);
    }
  })();

  return (
    <Styled.Container>
      <label htmlFor="title">{title}</label>
      <p>{summary}</p>
      {inputType}
    </Styled.Container>
  );
};

export default QuestionInput;
