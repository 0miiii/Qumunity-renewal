import React, { useState } from "react";
import * as Styled from "./QuestionTagInput.style";

const QuestionTagInput = () => {
  const [tags, setTags] = useState<string[]>([]);

  const tagAddHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      const enteredTag = event.currentTarget.value.trim();
      if (!enteredTag) {
        event.currentTarget.value = "";
        return;
      }
      setTags((preTags) => [...preTags, `#${enteredTag}`]);
      event.currentTarget.value = "";
    }
  };

  return (
    <Styled.Container>
      <Styled.TagGroup>
        {tags.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </Styled.TagGroup>
      <input type="text" onKeyUp={tagAddHandler} />
    </Styled.Container>
  );
};

export default QuestionTagInput;
