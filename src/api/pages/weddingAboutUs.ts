import type { getPicturesResponse } from "@/types/aboutUs";
import api from "../axiosInstance";

export const fetchWeddingStaffPictures =
  async (): Promise<getPicturesResponse> => {
    const res = await api.get<getPicturesResponse>("/wedding/aboutus/pictures");
    return res.data;
  };
