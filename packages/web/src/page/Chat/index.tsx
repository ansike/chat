import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ALL_GROUPS } from "@/gql/group";

import Content from "./Content";
import Group from "./Group";
import { GroupResType, GroupType, UserType } from "./type";
import { ChatContext } from "./context";

import s from "./index.module.less";
import { Spin } from "antd";
import { GlobalContext } from "@/context";

const Chat = () => {
  const { id } = useParams();
  const [curGroup, setCurGroup] = useState<GroupType | null>(null);
  const { userList } = useContext(GlobalContext);
  const { loading, data } = useQuery<{ groups: GroupResType[] }>(
    GET_ALL_GROUPS
  );
  const userMap: { [key: string]: UserType } | undefined = userList?.reduce(
    (prev, cur) => {
      prev = { ...prev, [cur._id]: cur };
      return prev;
    },
    {}
  );
  useEffect(() => {
    if (data?.groups.length) {
      setGroup();
    }
  }, [id, data?.groups]);

  if (!id) {
    return <>缺失分组信息</>;
  }

  const setGroup = () => {
    const cg = data?.groups.find((g) => g._id === id);
    if (cg) {
      setCurGroup({
        ...cg,
        members: cg?.members.map((m) => userMap![m])||[],
      });
    }
  };

  return (
    <ChatContext.Provider
      value={{
        group: curGroup,
      }}
    >
      {/* <Spin spinning={loading}> */}
      <div className={s.chat}>
        <Group
          groups={
            data?.groups?.map((g) => ({
              ...g,
              members: g.members?.map((m) => userMap?.[m as string]),
            })) as GroupType[]
          }
        ></Group>
        <Content></Content>
      </div>
      {/* </Spin> */}
    </ChatContext.Provider>
  );
};

export default Chat;
