import type { WorksResponse } from "@/types/works";
import { QueryAPI } from "../queryAPI";

const baseURL = import.meta.env.VITE_API_URL;
const api = new QueryAPI(baseURL);

export const useWorks = (params: Record<string, any>) =>
  api.createUseQuery<WorksResponse>(["works"], "/forrest/works")(params);
