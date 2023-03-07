import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Content from "./Content";
import Group from "./Group";

import { groups } from "./data";
import { GroupType } from "./type";

import s from "./index.module.less";

const Chat = () => {
  const { id } = useParams();
  const [curGroup, setCurGroup] = useState<GroupType>();

  useEffect(() => {
    setCurGroup(groups.find((g) => g.id === id));
  }, []);

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
