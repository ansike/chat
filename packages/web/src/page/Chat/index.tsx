import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { request } from "@/utils/fetch";

import Content from "./Content";
import Group from "./Group";
import { GroupType, UserType } from "./type";

import s from "./index.module.less";
import { ChatContext } from "./context";

const Chat = () => {
  const { id } = useParams();
  const uid = new URLSearchParams(window.location.search).get("uid");
  const [groups, setGroups] = useState<GroupType[]>([]);
  const [curGroup, setCurGroup] = useState<GroupType | null>(null);
  const [curUser, setCurUser] = useState<UserType | null>(null);

  useEffect(() => {
    getGroup();
    getUser();
  }, []);

  const getGroup = async () => {
    const res = await request<GroupType[]>("/api/group/list");
    setGroups(res);
    const g = res.find((g) => g._id === id);
    g && setCurGroup(g);
  };

  const getUser = async () => {
    const res = await request<UserType[]>("/api/user/list");
    const u = res.find((u) => u._id === uid);
    u && setCurUser(u);
  };

  if (!id || !uid) {
    return <>缺失分组/用户信息</>;
  }
  
  return (
    <ChatContext.Provider
      value={{
        group: curGroup,
        user: curUser,
      }}
    >
      <div className={s.chat}>
        <Group
          groups={groups}
          groupChange={(id) => {
            const cg = groups.find((g) => g._id === id);
            cg && setCurGroup(cg);
          }}
        ></Group>
        <Content></Content>
      </div>
    </ChatContext.Provider>
  );
};

export default Chat;
