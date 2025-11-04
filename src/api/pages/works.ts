import type { WorksResponse } from "@/types/works";
import { QueryAPI } from "../queryAPI";

const baseURL = import.meta.env.VITE_API_URL;
const api = new QueryAPI(baseURL);

// 단일 요청
export const useWorks = (params: Record<string, any>) =>
  api.createUseQuery<WorksResponse>(["works"], "/forrest/works")(params);

// 다중 요청용
export const useWorksQueries = api.createUseQueries<WorksResponse>(
  "works",
  "/forrest/works"
);
