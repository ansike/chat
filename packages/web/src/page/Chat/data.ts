/*
 * @Description: description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2023-03-07 21:14:00
 * @LastEditTime: 2023-03-07 23:46:12
 */
import { GroupType, MsgType } from "./type";

export const groups: GroupType[] = [
  {
    id: "1",
    name: "小组1",
    teams: [],
    latestMsg: "hello world",
    latestMsgDate: new Date(),
    createTime: new Date(),
  },
  {
    id: "2",
    name: "小组2",
    teams: [],
    latestMsg: "hi",
    latestMsgDate: new Date(),
    createTime: new Date(),
  },
];

export const msgs: MsgType[] = [
  {
    id: "1",
    groupId: "1",
    uid: "1",
    content:
      "hi,hi,hihi,hi,hi,hihihi,hi,hihihi,hi,hihihi,hi,hihihi,hi,hihihi,hi,hihihi,hi,hihi",
    createDate: "",
  },
  {
    id: "2",
    groupId: "1",
    uid: "2",
    content: "hello",
    createDate: "",
  },
];
