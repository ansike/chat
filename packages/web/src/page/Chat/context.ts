import { createContext } from "react";
import { GroupType } from "./type";

export const ChatContext = createContext<{
  group: GroupType | null;
}>({
  group: null,
});
