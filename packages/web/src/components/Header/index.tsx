import { useContext } from "react";
import s from "./index.module.less";
import { GlobalContext } from "@/context";

const Header = () => {
  const { user } = useContext(GlobalContext);
  return (
    <div className={s.header}>
      <div></div>
      <div className={s.user}>{user?.name?.slice(0,2)}</div>
    </div>
  );
};

export default Header;
