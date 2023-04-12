import React from "react";
import * as Styled from "./UserListPage.style";

const UserListPage = () => {
  return (
    <Styled.Container>
      <Styled.FilterGroup>
        <input type="text" />
        <div>
          <button>qestion</button>
          <button>answer</button>
        </div>
      </Styled.FilterGroup>
      <Styled.UserList>
        {new Array(9).fill(0).map((_, idx) => (
          <Styled.Profile key={idx}>
            <img src="" alt="" />
            <div>
              <span>닉네임</span>
              <span>Qestions 2</span>
              <span>Answers 3</span>
            </div>
          </Styled.Profile>
        ))}
      </Styled.UserList>
    </Styled.Container>
  );
};

export default UserListPage;
