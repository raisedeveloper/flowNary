// routes.js
import React from 'react';
import Icon from '@mui/material/Icon';

// Material Dashboard 2 React layouts
import Home from "layouts/home";
import Album from "layouts/album";
import Chatting from "layouts/chatting";
import Mypage from "layouts/mypage";
import Family from "layouts/family";
import Notifications from "layouts/notifications";
import Chalendar from "layouts/schedule";
import TodoList from "layouts/todoList";
import Write from "layouts/write";
import Settings from "layouts/setting";
import Team from "layouts/team";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Logout from "layouts/authentication/logout";

const createRoutes = (isLoggedIn) => [
  {
    type: "collapse",
    name: "홈",
    key: "home",
    icon: <Icon fontSize="xx-large">roofing</Icon>,
    route: "/home",
    component: <Home />,
    visible: true,
  },
  {
    type: "collapse",
    name: "앨범",
    key: "album",
    icon: <Icon fontSize="xx-large">collections</Icon>,
    route: "/album",
    component: <Album />,
    visible: true,
  },
  {
    type: "collapse",
    name: "채팅",
    key: "chatting",
    icon: <Icon fontSize="xx-large">send</Icon>,
    route: "/chatting",
    component: <Chatting />,
    visible: true,
  },
  {
    type: "collapse",
    name: "마이페이지",
    key: "mypage",
    icon: <Icon variant="outlined" fontSize="xx-large">contact_page</Icon>,
    route: "/mypage",
    component: <Mypage />,
    visible: true,
  },
  {
    type: "collapse",
    name: "패밀리",
    key: "family",
    icon: <Icon fontSize="xx-large">diversity_1</Icon>,
    route: "/family",
    component: <Family />,
    visible: true,
  },
  {
    type: "collapse",
    name: "알림",
    key: "notifications",
    icon: <Icon fontSize="xx-large">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
    visible: true,
  },
  {
    type: "collapse",
    name: "일정관리",
    key: "chalendar",
    icon: <Icon fontSize="xx-large">calendar_month</Icon>,
    route: "/chalendar",
    component: <Chalendar />,
    visible: true,
  },
  {
    type: "collapse",
    name: "할 일",
    key: "to-do",
    icon: <Icon fontSize="xx-large">checklist</Icon>,
    route: "/to-do",
    component: <TodoList />,
    visible: true,
  },
  {
    type: "collapse",
    name: "글쓰기",
    key: "write",
    icon: <Icon fontSize="xx-large">history_edu</Icon>,
    route: "/write",
    component: <Write />,
    visible: true,
  },
  {
    type: "collapse",
    name: "설정",
    key: "profile/settings",
    icon: <Icon fontSize="xx-large">filter_vintage</Icon>,
    route: "/profile/settings",
    component: <Settings />,
    visible: true,
  },
  {
    type: "collapse",
    name: "로그인",
    key: "sign-in",
    icon: <Icon fontSize="xx-large">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
    visible: !isLoggedIn, // 로그인되지 않았을 때만 보임
  },
  {
    type: "collapse",
    name: "로그아웃",
    key: "sign-out",
    icon: <Icon fontSize="xx-large">logout</Icon>,
    route: "/logout",
    component: <Logout />,
    visible: isLoggedIn, // 로그인되었을 때만 보임
  },
  {
    type: "collapse",
    name: "회원가입",
    key: "sign-up",
    icon: <Icon fontSize="xx-large">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
    visible: !isLoggedIn, // 로그인되지 않았을 때만 보임
  },
];

export default createRoutes;
