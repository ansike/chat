import { useContext, useEffect } from "react";
import { GroupType } from "../type";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

import s from "./index.module.less";
import { ChatContext } from "../context";

const Content = () => {
  const { group } = useContext(ChatContext);

  if (!group) {
    return <div className={s.welcome}>have a nice day~</div>;
  }

  return (
    <div className={s.content}>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
};

export default Content;
