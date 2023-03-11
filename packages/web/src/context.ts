import { createContext } from "react";
import { UserType } from "./page/Chat/type";

export const GlobalContext = createContext<{
  user: UserType | null;
  userList: UserType[] | null;
}>({
  user: null,
  userList: null,
});
