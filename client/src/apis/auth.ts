import instance from "./intance";

interface IAuthResponse {
  token: string;
}

interface ISignInUserInfo {
  email: string;
  password: string;
}

interface ISignUpUserInfo extends ISignInUserInfo {
  nickname: string;
}

export const signInRequest = (userinfo: ISignInUserInfo) => {
  return instance.post<IAuthResponse>("/user/signIn", userinfo);
};

export const signUpRequest = (userinfo: ISignUpUserInfo) => {
  return instance.post<IAuthResponse>("/user/signUp", userinfo);
};

export const loginCheck = () => {
  return instance.get("/user/auth");
};
