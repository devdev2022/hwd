import type { getPicturesResponse } from "@/types/aboutUs";
import api from "../axiosInstance";

export const fetchStaffPictures = async (): Promise<getPicturesResponse> => {
  const res = await api.get<getPicturesResponse>("/forrest/aboutus/pictures");
  return res.data;
};
