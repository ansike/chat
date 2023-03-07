import React from "react";
import { GroupType } from "../type";
import { useNavigate, useParams } from "react-router-dom";

import s from "./index.module.less";

type GroupProps = {
  groups: GroupType[];
  groupChange: (id: string) => void;
};
const Group = (props: GroupProps) => {
  const { id: groupId } = useParams();

  const { groups = [], groupChange } = props;
  const navigate = useNavigate();

  const openChat = (id: string) => {
    groupChange(id);
    navigate(`/chat/${id}`);
  };

  return (
    <div className={s.group}>
      <div className={s.search}></div>
      {groups.map((group) => {
        const { id, name } = group;
        return (
          <div
            className={`${s.groupItem} ${groupId === id ? s.activeGroup : ""}`}
            key={id}
            onClick={() => openChat(id)}
          >
            {name}
          </div>
        );
      })}
    </div>
  );
};

export default Group;