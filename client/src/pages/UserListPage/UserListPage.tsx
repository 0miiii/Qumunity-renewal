import React from "react";
import { useQuery } from "react-query";
import { getUsers } from "../../apis/user";
import Profile from "../../components/Profile/Profile";
import * as Styled from "./UserListPage.style";

const UserListPage = () => {
  const { data: users, isLoading, isError } = useQuery("users", getUsers);

  if (isLoading) {
    return <div>로딩</div>;
  }

  if (isError) {
    return <h3>에러발생</h3>;
  }

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
        {users?.map((user) => (
          <li key={user._id}>
            <Profile user={user} />
          </li>
        ))}
      </Styled.UserList>
    </Styled.Container>
  );
};

export default UserListPage;
