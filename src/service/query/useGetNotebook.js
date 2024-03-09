import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/reques";

export const useGetNotebook = () => {
  return useQuery({
    queryKey: ["notebook"],
    queryFn: () => request.get("/notebook").then((res) => res.data),
  });
};
