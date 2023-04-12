import React from "react";
import MyPageTabs from "../../components/MyPageTabs/MyPageTabs";
import Profile from "../../components/Profile/Profile";
import * as Styled from "./MyPage.style";

const MyPage = () => {
  return (
    <Styled.Container>
      <Profile />
      <MyPageTabs />
    </Styled.Container>
  );
};

export default MyPage;
