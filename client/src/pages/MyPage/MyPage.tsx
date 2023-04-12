import React from "react";
import MyPageTabs from "../../components/MyPageTabs/MyPageTabs";
import * as Styled from "./MyPage.style";

const MyPage = () => {
  return (
    <Styled.Container>
      <Styled.Profile>
        <img src="" alt="" />
        <div>
          <span>닉네임</span>
          <span>Qestions 2</span>
          <span>Answers 3</span>
        </div>
      </Styled.Profile>
      <MyPageTabs />
    </Styled.Container>
  );
};

export default MyPage;
