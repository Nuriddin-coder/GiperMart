import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../../config/reques";

export const useGetPhone = () => {
  return useQuery({
    queryKey: ["phone"],
    queryFn: () => request.get("/tel").then((res) => res.data),
  });
};
