import type { MainResponse, SnsImgResponse } from "@/types/main";
import api from "../axiosInstance";

export const fetchWeddingIntroduction = async (): Promise<MainResponse> => {
  const res = await api.get<MainResponse>("/wedding/main/introduction");
  return res.data;
};

export const fetchWeddingSnsImg = async (): Promise<SnsImgResponse> => {
  const res = await api.get<SnsImgResponse>("/wedding/main/snsimg");
  return res.data;
};
