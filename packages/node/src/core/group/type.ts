/*
 * @Description: description
 * @Author: Ask
 * @LastEditors: Ask
 * @Date: 2023-03-08 22:17:14
 * @LastEditTime: 2023-03-08 22:17:51
 */
export type GroupType = {
  id: string;
  name: string;
  teams: string[];
  latestMsg: string;
  latestMsgDate: Date;
  createTime: Date;
};
