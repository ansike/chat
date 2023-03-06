import React from "react";
import Header from "../Header";
import Body from "../Body";
import s from "./style.module.less";

const Container = () => {
  return <div className={s.container}>
    <Header />
    <Body />
  </div>;
};

export default Container;
