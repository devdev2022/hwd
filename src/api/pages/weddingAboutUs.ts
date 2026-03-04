import type { getPicturesResponse } from "@/types/aboutUs";
import { QueryAPI } from "../queryAPI";

const baseURL = import.meta.env.VITE_API_URL;
const api = new QueryAPI(baseURL);

export const useGetWeddingStaffPictures = api.createUseQuery<getPicturesResponse>(
  ["weddingStaff"],
  "/wedding/aboutus/pictures"
);
