import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { CREATE_USER, GET_ALL_USERS } from "@/gql/user";
import { UserType } from "../Chat/type";
import { formatTime } from "@/utils/format";

const Forum = () => {
  const [addUser] = useMutation(CREATE_USER);
  const { data: userData, refetch } = useQuery<{ users: UserType[] }>(
    GET_ALL_USERS
  );

  const [userName, setUserName] = useState("");

  const deleteUser = async (user: UserType) => {
    // TODO
    console.log("todo delete", user);
  };

  const createUser = async () => {
    await addUser({
      variables: {
        createUserInput: {
          name: userName,
          age: 11,
        },
      },
    });
    await refetch();
  };

  const columns: ColumnsType<UserType> = [
    {
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "CreateTime",
      dataIndex: "create_at",
      render(date) {
        return formatTime(date);
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <a onClick={() => deleteUser(record)}>Delete</a>
        </>
      ),
    },
  ];
  return (
    <div>
      <Table
        rowKey="_id"
        columns={columns}
        dataSource={userData?.users || []}
      ></Table>
      <input
        placeholder="please input user name"
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={createUser}>创建</button>
    </div>
  );
};

export default Forum;
