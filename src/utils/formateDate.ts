import dayjs from "dayjs";

export const formatDate = (date: number) => {
  const formattedDate = dayjs(date).format("MM/DD/YYYY, hh:mm A");
  return formattedDate;
};
