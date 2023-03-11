import dayjs from "dayjs";
export const formatTime = (date: string) => {
  return dayjs(date).format("YYYY-MM-DD hh:mm:ss");
};
