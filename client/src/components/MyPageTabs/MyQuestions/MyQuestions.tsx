import React, { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { getMyPost } from "../../../apis/post";
import Pagination from "@mui/material/Pagination";
import ContentBox from "../ContentBox/ContentBox";
import * as Styled from "./MyQuestions.style";

interface IProps {
  count: number;
}

const MyQuestions: React.FC<IProps> = ({ count }) => {
  const queryClient = useQueryClient();
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 3;
  const maxPage = Math.ceil(count / limit);
  const {
    data: mypost,
    isLoading,
    isError,
  } = useQuery(["myPosts", currentPage], () => getMyPost(currentPage, limit), {
    keepPreviousData: true,
  });

  const pageHandler = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    if (maxPage > currentPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(["myPosts", nextPage], () =>
        getMyPost(nextPage, limit)
      );
    }
  }, [currentPage]);

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
        count={maxPage}
        page={currentPage}
        onChange={pageHandler}
        variant="outlined"
        shape="rounded"
      />
    </Styled.Container>
  );
};

export default MyQuestions;
