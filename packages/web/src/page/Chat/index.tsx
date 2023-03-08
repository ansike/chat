import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { request } from "@/utils/fetch";

import Content from "./Content";
import Group from "./Group";
import { GroupType } from "./type";

import s from "./index.module.less";

const Chat = () => {
  const { id } = useParams();
  const [groups, setGroups] = useState<GroupType[]>([]);
  const [curGroup, setCurGroup] = useState<GroupType>();

  useEffect(() => {
    getGroup();
  }, []);
  
  const getGroup = async () => {
    const res = await request<GroupType[]>("/api/group/list");
    console.log({res});
    
    setGroups(res);
    setCurGroup(res.find((g) => g.id === id));
  };

  return (
    <div className={s.chat}>
      <Group
        groups={groups}
        groupChange={(id) => {
          const cg = groups.find((g) => g.id === id);
          cg && setCurGroup(cg);
        }}
      ></Group>
      <Content group={curGroup}></Content>
    </div>
  );
};

export default Chat;
