import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/reques";

export const useGetCatalog = () => {
  return useQuery({
    queryKey: ["catalog"],
    queryFn: () => request.get("./catalog").then((res) => res.data),
  });
};
