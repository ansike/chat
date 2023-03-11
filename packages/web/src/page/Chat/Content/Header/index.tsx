import { useContext } from "react";

import { ChatContext } from "../../context";
import s from "./index.module.less";

const Header = () => {
  const { group } = useContext(ChatContext);

  return (
    <div className={s.header}>
      <div className={s.name}>{group?.name}</div>
      <div className={s.num}>{group?.members?.length}人</div>
    </div>
  );
};

export default Header;
