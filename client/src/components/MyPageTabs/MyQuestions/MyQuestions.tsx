import React, { useState } from "react";
import { useQuery } from "react-query";
import { getMyPost } from "../../../apis/post";
import Pagination from "@mui/material/Pagination";
import ContentBox from "../ContentBox/ContentBox";
import * as Styled from "./MyQuestions.style";

interface IProps {
  count: number;
}

const MyQuestions: React.FC<IProps> = ({ count }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 3;
  const {
    data: mypost,
    isLoading,
    isError,
  } = useQuery(["myPosts", currentPage], () => getMyPost(currentPage, limit));

  const pageHandler = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  if (isLoading) {
    return <div>로딩</div>;
  }

  if (isError) {
    return <h3>에러발생</h3>;
  }

  return (
    <Styled.Container>
      {mypost?.map((post) => (
        <ContentBox key={post._id} post={post} />
      ))}
      <Pagination
        count={Math.ceil(count / limit)}
        page={currentPage}
        onChange={pageHandler}
        variant="outlined"
        shape="rounded"
      />
    </Styled.Container>
  );
};

export default MyQuestions;
