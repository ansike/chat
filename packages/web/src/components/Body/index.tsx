/*
 * @Description: description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2023-03-06 23:08:13
 * @LastEditTime: 2023-03-10 22:47:44
 */
import { Outlet } from "react-router-dom";
import s from "./index.module.less";
import Menu from "../Menu";

const Body = () => {
  return (
    <div className={s.body}>
      <Menu />
      <Outlet />
    </div>
  );
};

export default Body;
