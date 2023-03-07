/*
 * @Description: description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2023-03-07 22:40:45
 * @LastEditTime: 2023-03-07 23:46:27
 */

export type GroupType = {
  id: string;
  name: string;
  teams: string[];
  latestMsg: string;
  latestMsgDate: Date;
  createTime: Date;
};

export type MsgType = {
  id: string;
  uid: string;
  groupId: string;
  content: string;
  createDate: string;
};
