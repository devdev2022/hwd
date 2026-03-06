import type { MainResponse, SnsImgResponse } from "@/types/main";
import api from "../axiosInstance";

export const fetchIntroduction = async (): Promise<MainResponse> => {
  const res = await api.get<MainResponse>("/forrest/main/introduction");
  return res.data;
};

export const fetchSnsImg = async (): Promise<SnsImgResponse> => {
  const res = await api.get<SnsImgResponse>("/forrest/main/snsimg");
  return res.data;
};
