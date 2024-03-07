import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/reques";

export const useGetAllDataId = (id) => {
  return useQuery({
    queryKey: ["all-data", id],
    queryFn: () => request.get(`/all/${id}`).then((res) => res.data),
  });
};
