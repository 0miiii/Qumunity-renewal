import React from "react";
import { useQuery } from "react-query";
import { getMyInfo } from "../../apis/user";
import MyPageTabs from "../../components/MyPageTabs/MyPageTabs";
import Profile from "../../components/Profile/Profile";
import * as Styled from "./MyPage.style";

const MyPage = () => {
  const { data: user, isLoading, isError } = useQuery("myinfo", getMyInfo);

  if (isLoading) {
    return <div>로딩</div>;
  }

  if (isError) {
    return <h3>에러발생</h3>;
  }

  if (!user) {
    return <h3>존재하지 않는 유저입니다</h3>;
  }

  return (
    <Styled.Container>
      <Profile user={user} />
      <MyPageTabs />
    </Styled.Container>
  );
};

export default MyPage;
