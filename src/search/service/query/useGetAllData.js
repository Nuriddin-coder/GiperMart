import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/reques";

export const useGetAllData = (search = "") => {
  return useQuery({
    queryKey: ["all-data", search],
    queryFn: () =>
      request
        .get("/all", { params: { title_like: search } })
        .then((res) => res.data),
  });
};
