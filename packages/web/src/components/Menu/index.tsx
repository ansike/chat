import React from "react";
import { Link } from "react-router-dom";
import s from "./index.module.less";

const menus = [
  {
    name: "chat",
    path: "/chat/0",
  },
  {
    name: "forum",
    path: "/forum",
  },
];
const Menu = () => {
  return (
    <div className={s.menu}>
      {menus.map((menu) => {
        return (
          <Link key={menu.path} to={menu.path}>
            {menu.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
