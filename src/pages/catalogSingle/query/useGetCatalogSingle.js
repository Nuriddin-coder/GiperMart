import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/reques";

export const useGetCatalogSingle = (name, page = 1) => {
  return useQuery({
    queryKey: ["catalog-item", page],
    queryFn: () =>
      request
        .get(`/${name}`, { params: { _page: page, _limit: 12 } })
        .then((res) => {
          const pageSize = Number(res?.headers?.get("X-Total-Count")) / 12;
          return {
            data: res.data,
            pageSize: Math.ceil(pageSize),
          };
        }),
  });
};