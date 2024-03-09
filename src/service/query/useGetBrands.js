import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/reques";

export const useGetBrands = () => {
  return useQuery({
    queryKey: ["brands"],
    queryFn: () => request.get("/brands").then((res) => res.data),
  });
};
