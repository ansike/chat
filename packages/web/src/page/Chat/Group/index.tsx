import { GroupType } from "../type";
import { useNavigate, useParams } from "react-router-dom";

import s from "./index.module.less";

type GroupProps = {
  groups?: GroupType[];
};
const Group = (props: GroupProps) => {
  const { id: groupId } = useParams();

  const { groups = [] } = props;
  const navigate = useNavigate();

  const openChat = (id: string) => {
    navigate(`/chat/${id}`);
  };

  return (
    <div className={s.group}>
      <div className={s.search}></div>
      {groups.map((group) => {
        const { _id, name } = group;
        return (
          <div
            className={`${s.groupItem} ${groupId === _id ? s.activeGroup : ""}`}
            key={_id}
            onClick={() => openChat(_id)}
          >
            {name}
          </div>
        );
      })}
    </div>
  );
};

export default Group;
