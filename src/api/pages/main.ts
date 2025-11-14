import type { MainResponse, SnsImgResponse } from "@/types/main";
import { QueryAPI } from "../queryAPI";

const baseURL = import.meta.env.VITE_API_URL;
const api = new QueryAPI(baseURL);

export const useIntroduction = () =>
  api.createUseQuery<MainResponse>(
    ["introduction"],
    "/forrest/main/introduction"
  );

export const useGetSnsImg = () =>
  api.createUseQuery<SnsImgResponse>(["snsimg"], "/forrest/main/snsimg");
