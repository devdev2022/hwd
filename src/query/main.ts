import { useQuery } from "@tanstack/react-query";
import { fetchIntroduction, fetchSnsImg } from "@/api/pages/main";
import { fetchWeddingIntroduction, fetchWeddingSnsImg } from "@/api/pages/weddingMain";

export const useIntroduction = () =>
  useQuery({
    queryKey: ["introduction"],
    queryFn: fetchIntroduction,
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    retry: 2,
  });

export const useGetSnsImg = () =>
  useQuery({
    queryKey: ["snsimg"],
    queryFn: fetchSnsImg,
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    retry: 2,
  });

export const useWeddingIntroduction = () =>
  useQuery({
    queryKey: ["weddingIntroduction"],
    queryFn: fetchWeddingIntroduction,
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    retry: 2,
  });

export const useGetWeddingSnsImg = () =>
  useQuery({
    queryKey: ["weddingSnsImg"],
    queryFn: fetchWeddingSnsImg,
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    retry: 2,
  });
