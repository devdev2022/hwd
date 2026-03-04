import type { getBuinsessInfoResponse } from "@/types/common";
import { QueryAPI } from "../queryAPI";

const baseURL = import.meta.env.VITE_API_URL;
const api = new QueryAPI(baseURL);

export const useGetWeddingBusinessInfo = api.createUseQuery<getBuinsessInfoResponse>(
  ["weddingBusinessInfo"],
  "/wedding/common/businessInfo"
);
