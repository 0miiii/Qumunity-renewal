import React, { useState, useEffect } from "react";
import MyPageTabs from "../../components/MyPageTabs/MyPageTabs";
import instance from "../../apis/intance";
import Profile from "../../components/Profile/Profile";
import axios, { AxiosError } from "axios";
import { IUser } from "../../types/user";
import * as Styled from "./MyPage.style";

interface IResponse {
  message: string;
  data: IUser;
}

const MyPage = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState(true);

  const getMyInfoRequest = async () => {
    try {
      const response = await instance.get<IResponse>("/user/getMyInfo");
      console.log(response);
      setUser(response.data.data);
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
    getMyInfoRequest();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!user) {
    return <div>유저가 존재하지 않습니다</div>;
  }

  return (
    <Styled.Container>
      <Profile user={user} />
      <MyPageTabs />
    </Styled.Container>
  );
};

export default MyPage;
