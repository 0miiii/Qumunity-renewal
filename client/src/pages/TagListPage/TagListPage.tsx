import React from "react";
import * as Styled from "./TagListPage.style";

const TagListPage = () => {
  return (
    <Styled.Container>
      <Styled.FilterGroup>
        <input type="text" />
      </Styled.FilterGroup>
      <Styled.TagList>
        {new Array(9).fill(0).map((_, idx) => (
          <li key={idx}>
            <Styled.Tag>#javascript</Styled.Tag>
          </li>
        ))}
      </Styled.TagList>
    </Styled.Container>
  );
};

export default TagListPage;
