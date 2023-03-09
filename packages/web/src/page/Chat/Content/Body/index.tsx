import { useContext, useEffect, useState } from "react";
import { SOCKET_KEY, socket } from "@/utils/webSocket";
import { MsgType } from "../../type";
import { ChatContext } from "../../context";

import s from "./index.module.less";

const Body = () => {
  const { user: curUser, group } = useContext(ChatContext);
  const [messags, setMessags] = useState<MsgType[]>([]);

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
    // socket.on(SOCKET_KEY.MSG_KEY, function (data) {
    //   setMessags([
    //     ...messags,
    //     {
    //       content: data.msg,
    //       group: group!,
    //       user: user!,
    //     },
    //   ]);
    // });
  }, [messags, setMessags]);

  return (
    <div className={s.body}>
      {messags.map((data) => {
        const { msg, _id, user } = data;
        return (
          <div
            key={_id}
            className={`${s.msg} ${
              user?._id === curUser?._id ? s.curUser : ""
            }`}
          >
            <div className={s.avatar}>{user?.name}</div>
            <div className={s.detail}>
              <div className={s.top}>
                <div className={s.name}>{user?.name}</div>
                <div className={s.date}>{user?.update_at}</div>
              </div>
              <div className={s.bottom}>
                <div className={s.msg}>{msg}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Body;
