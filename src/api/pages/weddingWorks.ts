import type { WorksResponse, multipleParams } from "@/types/works";
import api from "../axiosInstance";

export const fetchWeddingWorks = async (params: multipleParams) => {
  const res = await api.get<WorksResponse>("/wedding/works", { params });
  return res.data;
};

export const fetchWeddingMultipleWorks = async (params: multipleParams) => {
  const res = await api.get<WorksResponse[]>("/wedding/works", { params });
  return res.data;
};
