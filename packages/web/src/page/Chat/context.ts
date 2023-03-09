import { createContext } from "react";
import { GroupType, UserType } from "./type";

export const ChatContext = createContext<{
  group: GroupType | null;
  user: UserType | null;
}>({
  group: null,
  user: null,
});
