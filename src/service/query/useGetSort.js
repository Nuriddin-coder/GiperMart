import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/reques";

export const useGetSort = () => {
  return useQuery({
    queryKey: ["sort"],
    queryFn: () => request.get("/category").then((res) => res.data),
  });
};
