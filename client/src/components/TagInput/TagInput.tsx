import React from "react";
import * as Styled from "./TagInput.style";

interface ITagInput {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const TagInput: React.FC<ITagInput> = ({ tags, setTags }) => {
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

export default TagInput;
