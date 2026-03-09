import { useQuery } from "@tanstack/react-query";
import { fetchBusinessInfo } from "@/api/pages/common";
import { fetchWeddingBusinessInfo } from "@/api/pages/weddingCommon";

export const useGetBusinessInfo = (enabled = true) =>
  useQuery({
    queryKey: ["businessInfo"],
    queryFn: fetchBusinessInfo,
    enabled,
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    retry: 2,
  });

export const useGetWeddingBusinessInfo = (enabled = true) =>
  useQuery({
    queryKey: ["weddingBusinessInfo"],
    queryFn: fetchWeddingBusinessInfo,
    enabled,
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    retry: 2,
  });
