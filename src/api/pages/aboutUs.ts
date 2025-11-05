import type { getPicturesResponse } from "@/types/aboutUs";
import { QueryAPI } from "../queryAPI";

const baseURL = import.meta.env.VITE_API_URL;
const api = new QueryAPI(baseURL);

export const useGetStaffPictures = () =>
  api.createUseQuery<getPicturesResponse>(
    ["staff"],
    "/forrest/aboutus/pictures"
  )();
