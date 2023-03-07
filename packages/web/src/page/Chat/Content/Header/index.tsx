import React from "react";
import { GroupType } from "../../type";

import s from "./index.module.less";

type HeaderProps = {
  group: GroupType;
};
const Header = (props: HeaderProps) => {
  const { group } = props;

  return (
    <div className={s.header}>
      <div className={s.name}>{group.name}</div>
      <div className={s.num}>4人</div>
    </div>
  );
};

export default Header;
