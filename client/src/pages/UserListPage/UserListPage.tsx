import React from "react";
import Profile from "../../components/Profile/Profile";
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
          <li key={idx}>
            <Profile />
          </li>
        ))}
      </Styled.UserList>
    </Styled.Container>
  );
};

export default UserListPage;
