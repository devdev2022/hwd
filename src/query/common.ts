import { useQuery } from "@tanstack/react-query";
import { fetchBusinessInfo } from "@/api/pages/common";
import { fetchWeddingBusinessInfo } from "@/api/pages/weddingCommon";

export const useGetBusinessInfo = () =>
  useQuery({
    queryKey: ["businessInfo"],
    queryFn: fetchBusinessInfo,
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    retry: 2,
  });

export const useGetWeddingBusinessInfo = () =>
  useQuery({
    queryKey: ["weddingBusinessInfo"],
    queryFn: fetchWeddingBusinessInfo,
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    retry: 2,
  });
