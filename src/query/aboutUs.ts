import { useQuery } from "@tanstack/react-query";
import { fetchStaffPictures } from "@/api/pages/aboutUs";
import { fetchWeddingStaffPictures } from "@/api/pages/weddingAboutUs";

export const useGetStaffPictures = () =>
  useQuery({
    queryKey: ["staff"],
    queryFn: fetchStaffPictures,
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    retry: 2,
  });

export const useGetWeddingStaffPictures = () =>
  useQuery({
    queryKey: ["weddingStaff"],
    queryFn: fetchWeddingStaffPictures,
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    retry: 2,
  });
