import React from "react";
import { Navigate, createBrowserRouter, RouterProvider } from "react-router-dom";

import Container from "../components/Container";
import Chat from "../page/Chat";
import Forum from "../page/Forum";

const routes = [
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/forum",
        element: <Forum />,
      },
      {
        // 默认路由
        path: "",
        element: <Navigate to="/chat" replace />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);
const SelfRouter = () => {
  return <RouterProvider router={router} />;
};

export default SelfRouter;
