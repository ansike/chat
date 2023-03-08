import { useEffect } from "react";
import { GroupType } from "../type";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

import s from "./index.module.less";

type ContentProps = {
  group?: GroupType;
};

const Content = (props: ContentProps) => {
  const { group } = props;


  if (!group) {
    return <div className={s.welcome}>have a nice day~</div>;
  }

  return (
    <div className={s.content}>
      <Header group={group}></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
};

export default Content;
