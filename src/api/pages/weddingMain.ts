import type { MainResponse, SnsImgResponse } from "@/types/main";
import { QueryAPI } from "../queryAPI";

const baseURL = import.meta.env.VITE_API_URL;
const api = new QueryAPI(baseURL);

export const useWeddingIntroduction = api.createUseQuery<MainResponse>(
  ["weddingIntroduction"],
  "/wedding/main/introduction"
);

export const useGetWeddingSnsImg = api.createUseQuery<SnsImgResponse>(
  ["weddingSnsimg"],
  "/wedding/main/snsimg"
);
