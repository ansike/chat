import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { request } from "@/utils/fetch";

import Content from "./Content";
import Group from "./Group";
import { GroupType } from "./type";
import { ChatContext } from "./context";

import s from "./index.module.less";

const Chat = () => {
  const { id } = useParams();
  const [groups, setGroups] = useState<GroupType[]>([]);
  const [curGroup, setCurGroup] = useState<GroupType | null>(null);

  useEffect(() => {
    getGroup();
  }, []);

  const getGroup = async () => {
    const res = await request<GroupType[]>("/api/group/list");
    setGroups(res);
    const g = res.find((g) => g._id === id);
    g && setCurGroup(g);
  };

  if (!id) {
    return <>缺失分组信息</>;
  }

  return (
    <ChatContext.Provider
      value={{
        group: curGroup,
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
