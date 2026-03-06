import type { getBuinsessInfoResponse } from "@/types/common";
import api from "../axiosInstance";

export const fetchWeddingBusinessInfo =
  async (): Promise<getBuinsessInfoResponse> => {
    const res = await api.get<getBuinsessInfoResponse>("/wedding/common/businessInfo");
    return res.data;
  };
