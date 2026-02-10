import type { WorksResponse, multipleParams } from "@/types/works";
import api from "./axiosInstance";

export const fetchWorks = async (params: multipleParams) => {
  const res = await api.get<WorksResponse>("/forrest/works", { params });
  return res.data;
};

export const fetchMultipleWorks = async (params: multipleParams) => {
  const res = await api.get<WorksResponse[]>("/forrest/works", { params });
  return res.data;
};
