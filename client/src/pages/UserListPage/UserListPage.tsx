import React, { useEffect, useState } from "react";
import instance from "../../apis/intance";
import Profile from "../../components/Profile/Profile";
import { IUser } from "../../types/user";
import * as Styled from "./UserListPage.style";
import axios, { AxiosError } from "axios";

interface IResponse {
  message: string;
  data: IUser[];
}

const UserListPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [error, setError] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState(false);

  const getAllUserInfoRequest = async () => {
    setLoading(true);
    try {
      const response = await instance.get<IResponse>("/user/getUsers");
      setUsers(response.data.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err);
      } else {
        console.log(err);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllUserInfoRequest();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
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
        {users.map((user) => (
          <li key={user._id}>
            <Profile user={user} />
          </li>
        ))}
      </Styled.UserList>
    </Styled.Container>
  );
};

export default UserListPage;
