import React from "react";
import { Outlet } from "react-router-dom";
import s from "./index.module.less";
import Menu from "../Menu";

const Body = () => {
  return (
    <div className={s.body}>
      <Menu />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
