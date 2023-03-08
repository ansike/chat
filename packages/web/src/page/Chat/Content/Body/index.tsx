import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import s from "./index.module.less";
import { MsgType } from "../../type";
import { SOCKET_KEY, socket } from "@/utils/webSocket";
const Body = () => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("uid");

  const [messags, setMessags] = useState<MsgType[]>([]);
  useEffect(() => {
    socket.on(SOCKET_KEY.ALL_MSG, function (data) {
      setMessags(data);
      console.log("content", SOCKET_KEY.ALL_MSG, data);
    });
    socket.emit(SOCKET_KEY.ALL_MSG, "");
  }, []);

    useEffect(() => {
      socket.on(SOCKET_KEY.MSG_KEY, function (data) {
        setMessags([
          ...messags,
          {
            content: data.msg,
            createDate: "",
            groupId: "1",
            id: Math.random() + "",
            uid: "1",
          } as MsgType,
        ]);
      });
    }, [messags, setMessags]);

  return (
    <div className={s.body}>
      {messags.map((msg) => {
        const { content, id, uid } = msg;
        return (
          <div
            key={id}
            className={`${s.msg} ${userId === uid ? s.curUser : ""}`}
          >
            <div className={s.avatar}>{uid}</div>
            <div className={s.detail}>
              <div className={s.top}>
                <div className={s.name}>ask</div>
                <div className={s.date}>12:12</div>
              </div>
              <div className={s.bottom}>
                <div className={s.msg}>{content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Body;
