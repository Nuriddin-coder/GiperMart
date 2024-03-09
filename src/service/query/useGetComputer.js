import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/reques";

export const useGetComputer = () => {
  return useQuery({
    queryKey: ["computers"],
    queryFn: () => request.get("/computers").then((res) => res.data),
  });
};
