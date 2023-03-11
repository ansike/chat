import React from "react";
import { Navigate, createBrowserRouter, RouterProvider } from "react-router-dom";

import Container from "../components/Container";
import Chat from "../page/Chat";
import Forum from "../page/Forum";

const routes = [
  {
    path: "/",
    element: <Container />,
    error: <div>404</div>,
    children: [
      {
        path: "/chat/:id",
        element: <Chat />,
      },
      {
        path: "/forum",
        element: <Forum />,
      },
      {
        // 默认路由
        path: "",
        // element: <Navigate to="/forum" replace />,
        element: <Navigate to="/chat/0" replace />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);
const SelfRouter = () => {
  return <RouterProvider router={router} />;
};

export default SelfRouter;
