import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import MyPage from "./pages/MyPage/MyPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import TagListPage from "./pages/TagListPage/TagListPage";
import UserListPage from "./pages/UserListPage/UserListPage";
import GlobalLayout from "./layouts/GlobalLayout";
import AuthGaurdLayout from "./layouts/AuthGaurdLayout";

interface IRouter {
  id: number;
  path: string;
  label: string;
  element: React.ReactNode;
  withAuth: boolean;
  withNavi: boolean;
}

export const PATH = {
  MAIN: "/",
  SIGN_IN: "/signIn",
  SIGN_UP: "/signUp",
  MYPAGE: "/mypage/:id",
  DETAIL: "/detail/:id",
  TAG_LIST: "/taglist",
  USER_LIST: "/userlist",
  QUESTION: "/question",
};

const routerData: IRouter[] = [
  {
    id: 0,
    path: PATH.MAIN,
    label: "Main",
    element: <MainPage />,
    withAuth: false,
    withNavi: true,
  },
  {
    id: 1,
    path: PATH.SIGN_IN,
    label: "SignIn",
    element: <AuthPage />,
    withAuth: false,
    withNavi: false,
  },
  {
    id: 2,
    path: PATH.SIGN_UP,
    label: "SignUp",
    element: <AuthPage />,
    withAuth: false,
    withNavi: false,
  },
  {
    id: 3,
    path: PATH.MYPAGE,
    label: "MyPage",
    element: <MyPage />,
    withAuth: true,
    withNavi: false,
  },
  {
    id: 4,
    path: PATH.DETAIL,
    label: "Detail",
    element: <DetailPage />,
    withAuth: true,
    withNavi: false,
  },
  {
    id: 5,
    path: PATH.TAG_LIST,
    label: "태그",
    element: <TagListPage />,
    withAuth: false,
    withNavi: true,
  },
  {
    id: 6,
    path: PATH.USER_LIST,
    label: "유저",
    element: <UserListPage />,
    withAuth: false,
    withNavi: true,
  },
];

export const routers = createBrowserRouter(
  routerData.map((router) => {
    if (router.withAuth) {
      return {
        path: router.path,
        element: (
          <GlobalLayout>
            <AuthGaurdLayout>{router.element}</AuthGaurdLayout>
          </GlobalLayout>
        ),
      };
    }

    return {
      path: router.path,
      element: <GlobalLayout>{router.element}</GlobalLayout>,
    };
  })
);
