/*
 * @Description: description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2023-03-07 21:44:01
 * @LastEditTime: 2023-03-07 23:59:27
 */
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { msgs } from "../../data";
import s from "./index.module.less";
import { MsgType } from "../../type";
const Body = () => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("uid");

  const [messags, setMessags] = useState<MsgType[]>([]);
  useEffect(() => {
    setMessags(msgs);
  }, []);

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
