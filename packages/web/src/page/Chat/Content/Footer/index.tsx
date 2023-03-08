import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SOCKET_KEY, socket } from "@/utils/webSocket";

import s from "./index.module.less";

const Footer = () => {
    const [searchParams] = useSearchParams();
  const userId = searchParams.get("uid");
  const [val, setVal] = useState("");

  const submit = () => {
    // 发送消息
    socket.emit(
      SOCKET_KEY.MSG_KEY,
      JSON.stringify({
        uid: userId,
        msg: val,
      })
    );
    // 清空输入框
    setVal("");
  };

  return (
    <div className={s.footer}>
      <textarea
        value={val}
        className={s.textarea}
        onChange={(e) => setVal(e.target.value)}
        onKeyDown={(e) => {
          switch (e.code) {
            case "Enter":
              submit();
              e.preventDefault();
              // 考虑使用组合键回车功能
              break;
            default:
              break;
          }
        }}
      />
    </div>
  );
};

export default Footer;
