export type GroupType = {
  _id: string;
  name: string;
  members: UserType[];
  avatar: "";
  create_at: string;
  update_at: string;
};

export type GroupResType = {
  _id: string;
  name: string;
  members: string[];
  avatar: "";
  create_at: string;
  update_at: string;
};

export type MsgType = {
  _id?: string;
  msg: string;
  creator: UserType;
  group: GroupType;
  create_at?: string;
  update_at?: string;
};

export type UserType = {
  _id: string;
  name: string;
  age: number;
  avatar: "";
  create_at: string;
  update_at: string;
};
