import React from "react";
import Pagination from "@mui/material/Pagination";
import ContentBox from "../ContentBox/ContentBox";
import * as Styled from "./MyQuestions.style";

const MyQuestions = () => {
  return (
    <Styled.Container>
      <ContentBox />
      <ContentBox />
      <ContentBox />
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Styled.Container>
  );
};

export default MyQuestions;
