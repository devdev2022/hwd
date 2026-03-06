import type { getBuinsessInfoResponse } from "@/types/common";
import api from "../axiosInstance";

export const fetchBusinessInfo = async (): Promise<getBuinsessInfoResponse> => {
  const res = await api.get<getBuinsessInfoResponse>("/forrest/common/businessInfo");
  return res.data;
};
