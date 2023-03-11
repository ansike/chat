import { useContext, useEffect, useRef, useState } from "react";
import { SOCKET_KEY, socket } from "@/utils/webSocket";
import { MsgType } from "../../type";
import { ChatContext } from "../../context";
import { GlobalContext } from "@/context";

import s from "./index.module.less";
import { formatTime } from "@/utils/format";

const Body = () => {
  const { group } = useContext(ChatContext);
  const { user: curUser } = useContext(GlobalContext);
  const [messags, setMessags] = useState<MsgType[]>([]);
  const bodyRef = useRef<HTMLDivElement>(null);

  const allMsg = (data: MsgType[]) => {
    setMessags(data);
    console.log("content", SOCKET_KEY.ALL_MSG, data);
  };

  useEffect(() => {
    socket.on(SOCKET_KEY.ALL_MSG, allMsg);

    if (group?._id) {
      socket.emit(SOCKET_KEY.ALL_MSG, group?._id);
    }

    return () => {
      socket.off(SOCKET_KEY.ALL_MSG, allMsg);
    };
  }, [group?._id]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollIntoView({ behavior: "smooth" });
    }
    socket.on(SOCKET_KEY.MSG_KEY, addMsg);
    return () => {
      socket.off(SOCKET_KEY.MSG_KEY, addMsg);
    };
  }, [messags]);

  const addMsg = (data: MsgType) => {
    setMessags([
      ...messags,
      {
        ...data,
        group: group!,
      },
    ]);
  };

  return (
    <div className={s.body}>
      {messags.map((data) => {
        const { msg, _id, creator } = data;
        return (
          <div
            key={_id}
            className={`${s.msg} ${
              creator?._id === curUser?._id ? s.curUser : ""
            }`}
          >
            <div className={s.avatar}>{creator?.name}</div>
            <div className={s.detail}>
              <div className={s.top}>
                <div className={s.name}>{creator?.name}</div>
                <div className={s.date}>
                  {formatTime(creator?.create_at || "")}
                </div>
              </div>
              <div className={s.bottom}>
                <div className={s.msg}>{msg}</div>
              </div>
            </div>
          </div>
        );
      })}
      <div ref={bodyRef}></div>
    </div>
  );
};

export default Body;
