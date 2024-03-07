import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/reques";

export const useGetBanner = () => {
  return useQuery({
    queryKey: ["banners"],
    queryFn: () => request.get("/banner").then((res) => res.data),
  });
};
